"use client";

import React from "react";
import SectionHeading from "../SectionHeading";
import { useTheme } from "@/hooks/useTheme";
import { useActiveSection } from "@/hooks/useActiveSection";
import { motion } from "motion/react";
import ProjectsConent from "./ProjectsConent";
import ScrollDownButton from "../ScrollDownButton";

const Projects = () => {
  const { theme } = useTheme();
  const { setActiveSection } = useActiveSection();
  return (
    <motion.section
      id="projects"
      className="relative min-h-screen flex items-center py-30"
      onViewportEnter={() => setActiveSection("projects")}
      viewport={{ amount: 0.5, margin: "-80px 0px 0px 0px" }}
    >
      {/* Section background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-900/30" />
        <div
          className={`absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl ${theme.primary} opacity-5`}
          style={{
            clipPath: "polygon(30% 0, 100% 0, 100% 100%, 60% 100%)",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading>Featured Work</SectionHeading>
        <ProjectsConent />
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ScrollDownButton to="#blog" item="blog" />
      </motion.div>
    </motion.section>
  );
};

export default Projects;
