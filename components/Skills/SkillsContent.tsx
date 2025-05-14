"use client";

import { SKILL_CATEGORIES } from "@/constants";
import { Star } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

const allSkills = Object.values(SKILL_CATEGORIES).flatMap((cat) => cat.skills);

const SkillsContent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const [activeCategory, setActiveCategory] = useState("all");

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
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {(activeCategory === "all"
            ? allSkills
            : SKILL_CATEGORIES[activeCategory as keyof typeof SKILL_CATEGORIES]
                .skills
          ).map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group bg-background backdrop-blur-sm border border-border rounded-xl overflow-hidden transition-all duration-300`}
            >
              {/* Skill card front */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-foreground font-bold`}
                    >
                      <span>{skill.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className={`${
                          star <= Math.round(skill.level / 20)
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                        fill={
                          star <= Math.round(skill.level / 20)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    ))}
                  </div>
                </div>

                {/* Skill level bar */}
                <div className="w-full h-1.5 bg-primary/30 rounded-full mb-4 overflow-hidden">
                  <motion.div
                    className={`h-full bg-primary`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      delay: index * 0.1 + 0.3,
                      duration: 1,
                      ease: "easeOut",
                    }}
                  />
                </div>

                {/* Skill description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {skill.description}
                </p>

                {/* Projects */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground">
                    Related Projects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.projects.map((project) => (
                      <Badge key={project}>{project}</Badge>
                    ))}
                  </div>
                </div>

                {/* Hover effect */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillsContent;
