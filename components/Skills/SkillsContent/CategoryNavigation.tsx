"use client";

import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Star } from "lucide-react";
import { SKILL_CATEGORIES } from "@/constants";
import { AnimatePresence, motion } from "motion/react";

interface CategoryNavigationProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryNavigation = ({
  activeCategory,
  setActiveCategory,
}: CategoryNavigationProps) => {
  return (
    <div>
      {/* Category navigation */}
      <Select value={activeCategory} onValueChange={setActiveCategory}>
        <SelectTrigger className="hover:bg-primary/20 w-full max-w-xs py-6 rounded-xl text-lg">
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
            transition={{ duration: 0.3, ease: "backInOut" }}
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
  );
};

export default CategoryNavigation;
