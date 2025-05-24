"use client";

import { ALL_SKILLS, SKILL_CATEGORIES } from "@/constants";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Skill } from "@/types/global";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { splitIntoXColumns } from "@/lib/utils";
import CategoryNavigation from "./CategoryNavigation";
import SkillCard from "./SkillCard";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const MAX_SKILLS_ON_SCREEN = 9;

const SkillsContent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const [activeCategory, setActiveCategory] = useState("all");

  const [columns, setColumns] = useState<Skill[][]>([]);
  const [moreColumns, setMoreColumns] = useState<Skill[][]>([]);

  const [showMore, setShowMore] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const columnCount = isDesktop ? 3 : isTablet ? 2 : 1;

  const skillsToShow =
    activeCategory === "all"
      ? ALL_SKILLS
      : SKILL_CATEGORIES[activeCategory as keyof typeof SKILL_CATEGORIES]
          .skills;

  useEffect(() => {
    const firstSet = skillsToShow.slice(0, MAX_SKILLS_ON_SCREEN);
    const secondSet = skillsToShow.slice(MAX_SKILLS_ON_SCREEN);

    setColumns(splitIntoXColumns(firstSet, columnCount));
    setMoreColumns(splitIntoXColumns(secondSet, columnCount));
  }, [skillsToShow, columnCount]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="mt-6"
    >
      <CategoryNavigation
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Skills display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3, ease: "backInOut" }}
          className="flex flex-row gap-4 sm:gap-6"
        >
          {columns.map((col, colIdx) => (
            <div
              key={`first-${colIdx}`}
              className="flex-1 flex flex-col gap-4 sm:gap-6"
            >
              {col.map((skill, skillIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (colIdx * columns.length + skillIdx) * 0.08,
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                  }}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Render second set if it exists */}
      {moreColumns.length > 0 && (
        <>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setShowMore((prev) => !prev)}
            className="mt-6"
          >
            <span className="text-foreground">
              {showMore ? "Show less" : "Show more"}
            </span>
            {showMore ? <ChevronUp /> : <ChevronDown />}
          </Button>
          <AnimatePresence mode="wait">
            {showMore && (
              <motion.div
                key={activeCategory + "-more"}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 1, ease: "backInOut" }}
                className="flex flex-row gap-4 sm:gap-6 mt-6"
                layout
              >
                {moreColumns.map((col, colIdx) => (
                  <div
                    key={`more-${colIdx}`}
                    className="flex-1 flex flex-col gap-4 sm:gap-6"
                  >
                    {col.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{
                          delay:
                            (colIdx * moreColumns.length + skillIdx) * 0.08,
                          type: "spring",
                          stiffness: 80,
                          damping: 12,
                        }}
                      >
                        <SkillCard skill={skill} />
                      </motion.div>
                    ))}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.div>
  );
};

export default SkillsContent;
