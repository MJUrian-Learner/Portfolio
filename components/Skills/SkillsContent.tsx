"use client";

import { SKILL_CATEGORIES } from "@/constants";
import { Star } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import SkillCard from "./SkillCard";

const allSkills = Object.values(SKILL_CATEGORIES).flatMap((cat) => cat.skills);

// Define Skill type based on SKILL_CATEGORIES structure
export type Skill = {
  name: string;
  icon: string;
  level: number;
  description: string;
  projects: string[];
};

const SkillsContent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Helper to split skills into 3 columns
  function splitIntoColumns(skills: Skill[], numCols: number) {
    const cols: Skill[][] = Array.from({ length: numCols }, () => []);
    skills.forEach((skill, i) => {
      cols[i % numCols].push(skill);
    });
    return cols;
  }

  const skillsToShow =
    activeCategory === "all"
      ? allSkills
      : SKILL_CATEGORIES[activeCategory as keyof typeof SKILL_CATEGORIES]
          .skills;
  const columns = splitIntoColumns(skillsToShow, 3);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="mt-6"
    >
      <div>
        {/* Category navigation */}
        <Select value={activeCategory} onValueChange={setActiveCategory}>
          <SelectTrigger className="w-full max-w-xs py-6 rounded-xl text-lg">
            <SelectValue>
              <span className="flex items-center gap-3 ">
                {activeCategory === "all" ? (
                  <Star size={24} className="text-foreground" />
                ) : (
                  (() => {
                    const Icon =
                      SKILL_CATEGORIES[
                        activeCategory as keyof typeof SKILL_CATEGORIES
                      ].icon;
                    return <Icon size={24} className="text-foreground" />;
                  })()
                )}
                {activeCategory === "all"
                  ? "All Tech Stack"
                  : SKILL_CATEGORIES[
                      activeCategory as keyof typeof SKILL_CATEGORIES
                    ].title}
              </span>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem key="all" value="all" className="text-lg ">
              <span className="flex items-center gap-3">
                <Star size={20} className="text-foreground" />
                All Tech Stack
              </span>
            </SelectItem>
            {Object.entries(SKILL_CATEGORIES).map(([key, category]) => (
              <SelectItem key={key} value={key} className="text-lg ">
                <span className="flex items-center gap-3">
                  <category.icon size={20} className="text-foreground" />
                  {category.title}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Active category description */}
        <div className="pl-3 mt-3 mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-muted-foreground"
            >
              {activeCategory === "all"
                ? "A comprehensive overview of all technologies and tools in my stack."
                : SKILL_CATEGORIES[
                    activeCategory as keyof typeof SKILL_CATEGORIES
                  ].description}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Skills display */}
      <AnimatePresence mode="wait">
        <div className="flex flex-row gap-4 sm:gap-6">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex-1 flex flex-col gap-4 sm:gap-6">
              {col.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  hoveredSkill={hoveredSkill}
                  setHoveredSkill={setHoveredSkill}
                />
              ))}
            </div>
          ))}
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillsContent;
