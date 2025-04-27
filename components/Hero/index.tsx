"use client";

import { motion } from "motion/react";
import ScrollDownButton from "../ScrollDownButton";
import Copywrite from "./Copywrite";
import GridLines from "./GridLines";
import HeroImage from "./HeroImage";
import { useActiveSection } from "@/hooks/useActiveSection";

const Hero = () => {
  const { setActiveSection } = useActiveSection();
  return (
    <motion.section
      id="hero"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-16"
      onViewportEnter={() => setActiveSection("hero")}
      viewport={{ amount: 0.5, margin: "-80px 0px 0px 0px" }}
    >
      <GridLines />

      <div className="container px-6 relative z-10">
        <div className="mx-10 grid grid-cols-2 gap-60 h-full items-center">
          <Copywrite />
          <HeroImage />
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ScrollDownButton to="#about" item="about" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
