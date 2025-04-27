import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Sparkles, Zap } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const HeroImage = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="
        relative      
        mx-auto      
        w-[280px]
        sm:w-[320px]
        md:w-[380px]   
        lg:w-[440px]  
      "
    >
      <div className="relative w-full aspect-square">
        {/* Orbital rings */}
        <div
          className={`absolute inset-[-15%] rounded-full border ${theme.border} opacity-20 animate-[spin_40s_linear_infinite]`}
        />
        <div
          className={`absolute inset-[-8%] rounded-full border ${theme.border} opacity-30 animate-[spin_30s_linear_infinite_reverse]`}
        />

        {/* Main circular container */}
        <div className="relative w-full h-full">
          <div className="absolute inset-0 overflow-hidden rounded-full shadow-2xl">
            <Image
              src="/ghibli.jpg"
              alt="Your Profile"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-white opacity-10" />
              <div className="absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full bg-white opacity-5" />
              <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-[theme.highlight] opacity-10" />
            </div>
          </div>
          <div
            className={`absolute -inset-3 border-2 ${theme.border} rounded-full blur-sm opacity-50`}
          />
        </div>

        {/* Floating accents */}
        <motion.div
          className={`absolute -right-4 top-1/4 p-2 rounded-full ${theme.highlight} text-zinc-950 shadow-lg`}
          animate={{ y: [0, 10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap size={20} />
        </motion.div>
        <motion.div
          className="absolute -left-4 bottom-1/4 p-2 rounded-full bg-zinc-800 shadow-lg"
          animate={{ y: [0, -10, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={20} className={theme.accent} />
        </motion.div>
        <motion.div
          className={`absolute top-1/2 -right-2 w-4 h-4 rounded-full ${theme.highlight} opacity-70`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${theme.accent.replace(
            "text",
            "bg"
          )} opacity-70`}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default HeroImage;
