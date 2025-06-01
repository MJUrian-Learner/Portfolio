"use client";

import { motion } from "framer-motion";

import { useActiveSection } from "@/hooks/useActiveSection";
import SectionHeading from "../SectionHeading";
import ServicesContent from "./ServicesContent";
import ScrollDownButton from "../ScrollDownButton";

export default function Services() {
  const { setActiveSection } = useActiveSection();

  return (
    <motion.section
      id="services"
      className="relative min-h-dvh flex items-center py-28 md:py-20"
      onViewportEnter={() => setActiveSection("services")}
      viewport={{ amount: 0.5, margin: "-80px 0px 0px 0px" }}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionHeading>Build With Me</SectionHeading>
          <p className="max-w-[700px] text-muted-foreground lg:text-xl">
            Comprehensive digital services tailored to elevate your brand and
            create meaningful user experiences.
          </p>
        </div>

        <ServicesContent />

        <ScrollDownButton to="#credentials" item="credentials" />
      </div>
    </motion.section>
  );
}
