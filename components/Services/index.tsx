"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Code,
  Layers,
  Palette,
  Smartphone,
  Globe,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: <Code className="h-10 w-10 text-emerald-500" />,
    title: "Web Development",
    description:
      "Custom websites built with modern frameworks and technologies that deliver exceptional user experiences.",
    tags: ["React", "Next.js", "TypeScript"],
    link: "#",
  },
  {
    icon: <Palette className="h-10 w-10 text-emerald-500" />,
    title: "UI/UX Design",
    description:
      "Intuitive and visually appealing interfaces that enhance user engagement and satisfaction.",
    tags: ["Figma", "Adobe XD", "Prototyping"],
    link: "#",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-emerald-500" />,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that provide seamless experiences across devices.",
    tags: ["React Native", "Flutter", "iOS/Android"],
    link: "#",
  },
  {
    icon: <Globe className="h-10 w-10 text-emerald-500" />,
    title: "Digital Strategy",
    description:
      "Comprehensive digital strategies that align with your business goals and drive meaningful results.",
    tags: ["SEO", "Analytics", "Growth"],
    link: "#",
  },
  {
    icon: <Layers className="h-10 w-10 text-emerald-500" />,
    title: "Full-Stack Solutions",
    description:
      "End-to-end development services that cover both frontend and backend requirements.",
    tags: ["Node.js", "MongoDB", "AWS"],
    link: "#",
  },
  {
    icon: <Zap className="h-10 w-10 text-emerald-500" />,
    title: "Performance Optimization",
    description:
      "Enhance your existing digital products with improved speed, efficiency, and user experience.",
    tags: ["Core Web Vitals", "Caching", "Optimization"],
    link: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500 mb-4"
          >
            SERVICES I OFFER
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4"
          >
            Transforming Your Digital Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-gray-400 md:text-xl"
          >
            Comprehensive digital services tailored to elevate your brand and
            create meaningful user experiences.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="h-full"
            >
              <Card className="h-full border-0 bg-zinc-900/60 backdrop-blur-sm hover:bg-zinc-800/80 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle className="text-xl font-bold text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="bg-black/30 text-emerald-400 border-emerald-500/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/10 p-0 group"
                  >
                    <span>Learn more</span>
                    <motion.div
                      animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </motion.div>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
