"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const AboutImage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative aspect-square max-w-md mx-auto ">
        {/* Decorative elements */}
        <div
          className={`absolute inset-0 border-2 bg-primary/20 text-primary border-primary/30 rounded-lg transform rotate-3`}
        />
        <div
          className={`absolute inset-0 border-2 bg-primary/20 text-primary border-primary/30 rounded-lg transform -rotate-3`}
        />

        {/* Main image */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <Image
            src="/about-me.jpg"
            alt="MJ Portrait"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t // from-primary to-primary/70 opacity-20 mix-blend-multiply`}
          />
        </div>

        {/* Floating badges */}
        <motion.div
          className="absolute -right-5 top-10 bg-zinc-800 rounded-full px-3 py-1 text-sm border border-zinc-700"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          Creative
        </motion.div>

        <motion.div
          className="absolute -left-5 bottom-10 bg-zinc-800 rounded-full px-3 py-1 text-sm border border-zinc-700"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          Innovative
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutImage;
