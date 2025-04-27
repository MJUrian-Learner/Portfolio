"use client";

import React from "react";
import { motion } from "motion/react";
import { useActiveSection } from "@/hooks/useActiveSection";
import SectionHeading from "../SectionHeading";
import { useTheme } from "@/hooks/useTheme";
import Form from "./Form";

const Contact = () => {
  const { theme } = useTheme();
  const { setActiveSection } = useActiveSection();
  return (
    <motion.section
      id="contact"
      className="relative min-h-screen flex items-center py-20"
      onViewportEnter={() => setActiveSection("contact")}
      viewport={{ amount: 0.5, margin: "-80px 0px 0px 0px" }}
    >
      {/* Section background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-900/30" />
        <div
          className={`absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t ${theme.primary} opacity-5`}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading>Let&apos;s Connect</SectionHeading>
        <Form />
      </div>
    </motion.section>
  );
};

export default Contact;
