"use client";

import { motion } from "motion/react";

import { useActiveSection } from "@/hooks/useActiveSection";
import ScrollDownButton from "../ScrollDownButton";
import SectionHeading from "../SectionHeading";
import BlogContent from "./BlogContent";

const Blog = () => {
  const { setActiveSection } = useActiveSection();

  return (
    <motion.section
      id="blog"
      className="relative min-h-screen flex items-center py-30"
      onViewportEnter={() => setActiveSection("blog")}
      viewport={{ amount: 0.5, margin: "-80px 0px 0px 0px" }}
    >
      {/* Section background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-900/40" />
        <div
          className={`absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-tr from-primary to-primary/70 opacity-5`}
          style={{
            clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading>Latest Articles</SectionHeading>
        <BlogContent />
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ScrollDownButton to="#contact" item="contact" />
      </motion.div>
    </motion.section>
  );
};

export default Blog;
