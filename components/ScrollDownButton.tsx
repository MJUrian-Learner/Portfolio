import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import { SectionId } from "@/providers/ActiveSectionProvider";

const ScrollDownButton = ({ to, item }: { to: string; item: SectionId }) => {
  const { setActiveSection } = useActiveSection();
  return (
    <Link href={to}>
      <Button
        variant="ghost"
        className="text-foreground/50 hover:text-foreground/70"
        onClick={() => setActiveSection(`${item as SectionId}`)}
      >
        Scroll Down
      </Button>
    </Link>
  );
};

export default ScrollDownButton;
