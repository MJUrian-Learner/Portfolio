import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import { SectionId } from "@/providers/ActiveSectionProvider";
import { motion } from "motion/react";

const ScrollDownButton = ({ to, item }: { to: string; item: SectionId }) => {
  const { setActiveSection } = useActiveSection();
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
    >
      <Link href={to}>
        <Button
          variant="ghost"
          className="text-primary hover:text-foreground/70"
          onClick={() => setActiveSection(`${item as SectionId}`)}
        >
          Scroll Down
        </Button>
      </Link>
    </motion.div>
  );
};

export default ScrollDownButton;
