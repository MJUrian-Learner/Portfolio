"use client";

import React from "react";
import { motion } from "motion/react";
import { useActiveSection } from "@/hooks/useActiveSection";
import SectionHeading from "../SectionHeading";
import { useTheme } from "@/hooks/useTheme";
import InteractiveSkillsShowcase from "./SkillsContent";

const Skills = () => {
  const { setActiveSection } = useActiveSection();
  const { theme } = useTheme();

  return (
    <motion.section
      id="skills"
      className="relative min-h-screen flex items-center py-20"
      onViewportEnter={() => setActiveSection("about")}
      viewport={{ amount: 0.5, margin: "-80px 0px 0px 0px" }}
    >
      {/* Section background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-900/50" />
        <div
          className={`absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t ${theme.primary} opacity-5`}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading>Tech Expertise</SectionHeading>
        <InteractiveSkillsShowcase />
      </div>
    </motion.section>
  );
};

export default Skills;
