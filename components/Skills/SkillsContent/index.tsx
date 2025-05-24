"use client";

import { ALL_SKILLS, SKILL_CATEGORIES } from "@/constants";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState, useEffect, useMemo } from "react";
import { Skill } from "@/types/global";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { splitIntoXColumns } from "@/lib/utils";
import CategoryNavigation from "./CategoryNavigation";
import SkillCard from "./SkillCard";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

// Framer Motion variants for orchestrating the expand/collapse animation of the 'Show More' section
const parentVariants = {
  open: {
    // Expanded state: show all content
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.64, // Smooth open
      ease: "easeInOut",
      when: "beforeChildren", // Parent animates before children
      delayChildren: 0.1, // Small delay before children start
      staggerChildren: 0.15, // Stagger children for a nice cascade
    },
  },
  closed: {
    // Collapsed state: hide content
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.64, // Smooth close
      ease: "easeInOut",
      when: "afterChildren", // Parent waits for children to finish exit
      staggerChildren: 0.15, // Stagger children exit
      staggerDirection: -1, // Stagger in reverse order on close
    },
  },
};

// Variants for each skill card in the 'Show More' section
const childVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.18, type: "easeInOut" },
  },
  closed: {
    opacity: 0,
    y: -18,
    transition: { duration: 0.18, type: "easeInOut" },
  },
};

const SkillsContent = () => {
  // Ref for in-view animation
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  // Track the currently active skill category
  const [activeCategory, setActiveCategory] = useState("all");

  // Handler to change category and reset 'Show More' state
  const handleActiveCategory = (category: string) => {
    setActiveCategory(category);
    setShowMore(false);
  };

  // Responsive column count
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const columnCount = isDesktop ? 3 : isTablet ? 2 : 1;

  // State for columns of skills
  const [columns, setColumns] = useState<Skill[][]>([]);
  const [moreColumns, setMoreColumns] = useState<Skill[][]>([]);

  // Compute the skills to show for the current category
  const skillsToShow = useMemo(
    () =>
      activeCategory === "all"
        ? ALL_SKILLS
        : SKILL_CATEGORIES[activeCategory as keyof typeof SKILL_CATEGORIES]
            .skills,
    [activeCategory]
  );

  const numOfSkillsToShow = useMemo(() => {
    if (isDesktop) {
      return 9;
    } else if (isTablet) {
      return 6;
    } else {
      return 3;
    }
  }, [isDesktop, isTablet]);

  // Split skills into first set (always shown) and second set (shown on 'Show More')
  const firstSet = useMemo(
    () => skillsToShow.slice(0, numOfSkillsToShow),
    [skillsToShow, numOfSkillsToShow]
  );
  const hasMore = skillsToShow.length > numOfSkillsToShow;
  const secondSet = useMemo(
    () => (hasMore ? skillsToShow.slice(numOfSkillsToShow) : []),
    [skillsToShow, hasMore, numOfSkillsToShow]
  );

  // Update columns when skills or layout changes
  useEffect(() => {
    setColumns(splitIntoXColumns(firstSet, columnCount));
    if (hasMore) {
      setMoreColumns(splitIntoXColumns(secondSet, columnCount));
    } else {
      setMoreColumns([]); // Clear if not enough skills
    }
  }, [firstSet, secondSet, columnCount, hasMore]);

  // State for toggling 'Show More'
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="mt-6"
    >
      {/* Category filter navigation */}
      <CategoryNavigation
        activeCategory={activeCategory}
        setActiveCategory={handleActiveCategory}
      />

      {/* Main skills grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.32, ease: "easeInOut" }}
          className="flex flex-row gap-4 sm:gap-6"
        >
          {columns.map((col, colIdx) => (
            <div
              key={`first-${colIdx}`}
              className="flex-1 flex flex-col gap-4 sm:gap-6"
            >
              {/* Each skill card in the main grid */}
              {col.map((skill, skillIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: -24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (colIdx * columns.length + skillIdx) * 0.06,
                    type: "spring",
                    stiffness: 90,
                    damping: 14,
                  }}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
              {/* Show More/Less button (only in first column) */}
              {moreColumns.length > 0 && colIdx === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.22, ease: "anticipate" }}
                >
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowMore((prev) => !prev)}
                  >
                    <span className="text-foreground">
                      {showMore ? "Show less" : "Show more"}
                    </span>
                    {showMore ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Expandable 'Show More' section with orchestrated animation */}
      {moreColumns.length > 0 && (
        <AnimatePresence>
          {showMore && (
            <motion.div
              key={activeCategory + "-more"}
              className="flex flex-row gap-4 sm:gap-6 mt-6"
              layout
              variants={parentVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Each skill card in the expanded section */}
              {moreColumns.map((col, colIdx) => (
                <div
                  key={`more-${colIdx}`}
                  className="flex-1 flex flex-col gap-4 sm:gap-6"
                >
                  {col.map((skill) => (
                    <motion.div key={skill.name} variants={childVariants}>
                      <SkillCard skill={skill} />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default SkillsContent;
