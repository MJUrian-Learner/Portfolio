import React from "react";
import { motion } from "motion/react";
import { NAVIGATION_MENU } from "@/constants";

const Navigation = () => {
  return (
    <div>
      <nav>{NAVIGATION_MENU.map}</nav>
    </div>
  );
};

export default Navigation;
