"use client";

import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface SocialButtonProps {
  icon: LucideIcon;
  href: string;
}

const SocialButton = ({ ...props }: SocialButtonProps) => {
  return (
    <Link href={props.href} target="_blank" rel="noopener noreferrer">
      <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
        <props.icon />
      </Button>
    </Link>
  );
};

export default SocialButton;
