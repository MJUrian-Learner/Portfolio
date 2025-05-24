"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { motion } from "motion/react";
import SectionHeading from "../SectionHeading";
import ContactContent from "./ContactContent";
import Link from "next/link";
import { Button } from "../ui/button";

const Contact = () => {
  const { setActiveSection } = useActiveSection();
  return (
    <motion.section
      id="contact"
      className="relative min-h-dvh flex items-center py-28 md:py-20"
      onViewportEnter={() => setActiveSection("contact")}
      viewport={{ amount: 0.5, margin: "-80px 0px 0px 0px" }}
    >
      {/* Section background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div
          className={`absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary to-primary/70 opacity-5`}
        />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading>Let&apos;s Connect</SectionHeading>
        <ContactContent />
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden 2xl:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <Link href="#hero">
          <Button
            variant="ghost"
            className="text-primary hover:text-foreground/70"
            onClick={() => setActiveSection("hero")}
          >
            Go Back to Top
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
