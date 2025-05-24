"use client";

import { ALL_SKILLS, SKILL_CATEGORIES } from "@/constants";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { splitIntoXColumns } from "@/lib/utils";
import CategoryNavigation from "./CategoryNavigation";
import SkillCard from "./SkillCard";
import { Skill } from "@/types/global";

const SkillsContent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const [activeCategory, setActiveCategory] = useState("all");
  const [columns, setColumns] = useState<Skill[][]>([]);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const columnCount = isDesktop ? 3 : isTablet ? 2 : 1;

  const skillsToShow =
    activeCategory === "all"
      ? ALL_SKILLS
      : SKILL_CATEGORIES[activeCategory as keyof typeof SKILL_CATEGORIES]
          .skills;

  useEffect(() => {
    setColumns(splitIntoXColumns(skillsToShow, columnCount));
  }, [columnCount, skillsToShow]);

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
            <div key={colIdx} className="flex-1 flex flex-col gap-4 sm:gap-6">
              {col.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillsContent;
