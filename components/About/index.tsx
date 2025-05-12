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
      className="relative min-h-dvh flex items-center py-28 md:py-20"
      onViewportEnter={() => setActiveSection("about")}
      viewport={{ amount: 0.5, margin: "-80px 0px 0px 0px" }}
    >
      <DiagonalBackground side="left" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-3 xl:grid-cols-5 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="lg:col-span-1 xl:col-span-2">
            <AboutImage />
          </div>
          <div className="lg:col-span-2 xl:col-span-3">
            <AboutContent />
          </div>
        </div>
      </div>
      <ScrollDownButton to="#services" item="services" />
    </motion.section>
  );
};

export default About;
