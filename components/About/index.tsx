"use client";

import React from "react";
import DiagonalBackground from "../DiagonalBackground";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import { motion } from "motion/react";
import { useActiveSection } from "@/hooks/useActiveSection";
import ScrollDownButton from "../ScrollDownButton";

const About = () => {
  const { setActiveSection } = useActiveSection();
  return (
    <motion.section
      id="about"
      className="relative min-h-dvh flex items-center py-20"
      onViewportEnter={() => setActiveSection("about")}
      viewport={{ amount: 0.5, margin: "-80px 0px 0px 0px" }}
    >
      <DiagonalBackground side="left" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="sm:col-span-1 md:col-span-2 md:order-1 order-2">
            <AboutImage />
          </div>
          <div className="sm:col-span-2 md:col-span-3 md:order-2 order-1">
            <AboutContent />
          </div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ScrollDownButton to="#services" item="services" />
      </motion.div>
    </motion.section>
  );
};

export default About;
