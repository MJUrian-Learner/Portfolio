"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";

interface SocialLinkProps {
  icon: LucideIcon;
  href: string;
}

const SocialLink = ({ ...props }: SocialLinkProps) => {
  const { theme } = useTheme();
  return (
    <Link
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 transition-colors hover:text-${
        theme.accent.split("-")[1]
      }-400 hover:border-${theme.accent.split("-")[1]}-400`}
    >
      <props.icon />
    </Link>
  );
};

export default SocialLink;
