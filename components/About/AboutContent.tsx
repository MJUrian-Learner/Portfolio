"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import SectionHeading from "../SectionHeading";
import { Button } from "../ui/button";

const AboutContent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="space-y-4">
        <p className="text-lg text-zinc-300">
          I&apos;m a creative developer who thrives at the intersection of
          design and technology. With a passion for building immersive digital
          experiences, I blend technical expertise with artistic vision to
          create memorable and functional web solutions.
        </p>
        <p className="text-zinc-400">
          My journey began with a fascination for both visual arts and logical
          problem-solving, which naturally led me to web development. Today, I
          specialize in crafting unique digital experiences that push creative
          boundaries while maintaining technical excellence.
        </p>
        <p className="text-zinc-400">
          When I&apos;m not coding, you&apos;ll find me exploring new design
          trends, experimenting with digital art, or seeking inspiration in
          nature and architecture.
        </p>
      </div>

      <div className="pt-4">
        <Button
          size="lg"
          variant="outline"
          className={`border-primary/30 text-primary`}
        >
          Download CV
        </Button>
      </div>
    </motion.div>
  );
};

export default AboutContent;
