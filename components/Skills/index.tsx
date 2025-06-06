"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { motion } from "motion/react";
import ScrollDownButton from "../ScrollDownButton";
import SectionHeading from "../SectionHeading";
import SkillsContent from "./SkillsContent";

const Skills = () => {
  const { setActiveSection } = useActiveSection();

  return (
    <motion.section
      id="skills"
      className="relative min-h-dvh flex items-center py-28 md:py-20"
      onViewportEnter={() => setActiveSection("skills")}
      viewport={{ amount: 0.5, margin: "-80px 0px 0px 0px" }}
    >
      {/* Section background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div
          className={`absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-primary to-primary/70 opacity-5`}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading position="left">Tech Expertise</SectionHeading>
        <SkillsContent />
      </div>

      <ScrollDownButton to="#projects" item="projects" />
    </motion.section>
  );
};

export default Skills;
