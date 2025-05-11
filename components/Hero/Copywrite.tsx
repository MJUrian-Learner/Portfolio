import { Rocket } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Copywrite = () => {
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
        <Badge className={`rounded-full px-3 py-1 text-sm `}>
          Full-Stack Developer
        </Badge>
      </motion.div>

      <motion.h1
        className={`text-4xl md:text-6xl font-bold mb-2 md:mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Transforming <span className="text-foreground/80">Ideas</span> Into
        Digital <span className="text-foreground/80">Reality</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl dark:text-zinc-400 mb-4 md:mb-8"
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
        className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center md:justify-start"
      >
        <Link href="#projects">
          <Button
            className={`bg-primary hover:opacity-90 dark:text-background group relative overflow-hidden`}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Portfolio{" "}
              <Rocket
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
            <span
              className={`absolute inset-0 bg-gradient-to-r from-primary to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity`}
            />
          </Button>
        </Link>
        <Link href="#contact">
          <Button
            variant="outline"
            className={`border-primary/30 text-primary`}
          >
            Let&apos;s Collaborate
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Copywrite;
