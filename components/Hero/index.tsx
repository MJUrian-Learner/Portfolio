"use client";

import { motion } from "motion/react";
import Copywrite from "./Copywrite";
import GridLines from "./GridLines";
import { useActiveSection } from "@/hooks/useActiveSection";
import ScrollDownButton from "../ScrollDownButton";
import HeroImage from "./HeroImage";

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
          <div className="hidden sm:block">
            <HeroImage />
          </div>
        </div>
      </div>

      <ScrollDownButton to="#about" item="about" />
    </motion.section>
  );
};

export default Hero;
