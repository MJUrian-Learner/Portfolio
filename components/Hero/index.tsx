"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import GridLines from "./GridLines";
import Copywrite from "./Copywrite";
import HeroImage from "./HeroImage";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-16"
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
        <Link href="#about">
          <Button variant="ghost" className="text-zinc-500 hover:text-zinc-300">
            Scroll Down
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
