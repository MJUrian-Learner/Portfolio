import React from "react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "../ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";

const Copywrite = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-left"
    >
      <motion.div
        className="mb-6 inline-block"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        <Badge className={`rounded-full px-3 py-1 text-sm  ${theme.badge}`}>
          Full-Stack Developer & Designer
        </Badge>
      </motion.div>

      <motion.h1
        className={`text-6xl font-bold mb-6 leading-tight  bg-clip-text text-transparent bg-gradient-to-r ${theme.primary}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Transforming <span className="text-zinc-200">Ideas</span> Into Digital{" "}
        <span className="text-zinc-200">Reality</span>
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-zinc-400 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        I craft exceptional digital experiences that blend cutting-edge
        technology with intuitive design. Specializing in creating solutions
        that not only look stunning but deliver measurable results.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
      >
        <Link href="#projects">
          <Button
            className={`${theme.highlight} hover:opacity-90 text-zinc-950 group relative overflow-hidden`}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Portfolio{" "}
              <Rocket
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
            <span
              className={`absolute inset-0 bg-gradient-to-r ${theme.secondary} opacity-0 group-hover:opacity-100 transition-opacity`}
            />
          </Button>
        </Link>
        <Link href="#contact">
          <Button
            variant="outline"
            className={`${theme.border} ${theme.accent.replace(
              "text-",
              "text-"
            )} ${theme.hover}`}
          >
            Let&apos;s Collaborate
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Copywrite;
