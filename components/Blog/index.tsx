"use client";

import { motion } from "motion/react";

import { useTheme } from "@/hooks/useTheme";
import SectionHeading from "../SectionHeading";
import { useActiveSection } from "@/hooks/useActiveSection";
import BlogContent from "./BlogContent";

const Blog = () => {
  const { theme } = useTheme();
  const { setActiveSection } = useActiveSection();

  return (
    <motion.section
      id="blog"
      className="relative min-h-screen flex items-center py-20"
      onViewportEnter={() => setActiveSection("blog")}
      viewport={{ amount: 0.5, margin: "-80px 0px 0px 0px" }}
    >
      {/* Section background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-900/40" />
        <div
          className={`absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-tr ${theme.primary} opacity-5`}
          style={{
            clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading>Latest Articles</SectionHeading>
        <BlogContent />
      </div>
    </motion.section>
  );
};

export default Blog;
