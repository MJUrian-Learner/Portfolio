"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { motion } from "motion/react";
import DiagonalBackground from "../DiagonalBackground";
import SectionHeading from "../SectionHeading";
import CredentialsContent from "./CredentialsContent";
import ScrollDownButton from "../ScrollDownButton";

const Credentials = () => {
  const { setActiveSection } = useActiveSection();
  return (
    <motion.section
      id="credentials"
      className="relative min-h-dvh flex items-center py-30"
      onViewportEnter={() => setActiveSection("credentials")}
      viewport={{ amount: 0.5, margin: "-80px 0px 0px 0px" }}
    >
      <DiagonalBackground side="right" />

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading>Credentials & Experience</SectionHeading>
        <CredentialsContent />
      </div>

      <ScrollDownButton to="#skills" item="skills" />
    </motion.section>
  );
};

export default Credentials;
