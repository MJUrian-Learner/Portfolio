"use client";

import { SKILL_CATEGORIES } from "@/constants";
import { useTheme } from "@/hooks/useTheme";
import { Star } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Badge } from "../ui/badge";

const SkillsContent = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="mt-12"
    >
      {/* Category navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(SKILL_CATEGORIES).map(([key, category]) => (
          <motion.button
            key={key}
            className={`px-5 py-3 rounded-xl flex items-center gap-2 transition-all ${
              activeCategory === key
                ? `bg-zinc-800 ${theme.accent} shadow-lg`
                : "bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800/70 hover:text-zinc-300"
            }`}
            onClick={() => setActiveCategory(key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>
              <category.icon size={24} />
            </span>
            <span>{category.title}</span>
          </motion.button>
        ))}
      </div>

      {/* Active category description */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-zinc-400"
          >
            {
              SKILL_CATEGORIES[activeCategory as keyof typeof SKILL_CATEGORIES]
                .description
            }
          </motion.p>
        </AnimatePresence>
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
          {SKILL_CATEGORIES[
            activeCategory as keyof typeof SKILL_CATEGORIES
          ].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300`}
            >
              {/* Skill card front */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg ${theme.highlight} flex items-center justify-center text-zinc-900 font-bold`}
                    >
                      <span>{skill.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-200">
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
                            ? theme.accent
                            : "text-zinc-700"
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
                <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-4 overflow-hidden">
                  <motion.div
                    className={`h-full ${theme.highlight}`}
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
                <p className="text-sm text-zinc-400 mb-4">
                  {skill.description}
                </p>

                {/* Projects */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider text-zinc-500">
                    Related Projects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.projects.map((project) => (
                      <Badge
                        key={project}
                        className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                      >
                        {project}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* View details button */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 ${theme.highlight} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
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
