"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { motion } from "motion/react";
import ScrollDownButton from "../ScrollDownButton";
import SectionHeading from "../SectionHeading";
import ProjectsContent from "./ProjectsContent";

const Projects = () => {
  const { setActiveSection } = useActiveSection();
  return (
    <motion.section
      id="projects"
      className="relative min-h-dvh flex items-center py-28"
      onViewportEnter={() => setActiveSection("projects")}
      viewport={{ amount: 0.5, margin: "-80px 0px 0px 0px" }}
    >
      {/* Section background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div
          className={`absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-primary to-primary/70 opacity-5`}
          style={{
            clipPath: "polygon(30% 0, 100% 0, 100% 100%, 60% 100%)",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading>Featured Work</SectionHeading>
        <ProjectsContent />
      </div>

      <ScrollDownButton to="#blog" item="blog" />
    </motion.section>
  );
};

export default Projects;
