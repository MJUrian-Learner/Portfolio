"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Rocket, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

const Hero = () => {
  return (
    <div className="relative z-10 min-h-screen  text-zinc-200 pt-16">
      <section
        id="hero"
        className="relative min-h-lvh flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-zinc-950 bg-opacity-95" />

          {/* Simple diagonal gradient accent */}
          <div className="absolute inset-0 opacity-10" />

          {/* Minimal grid lines */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-px w-full bg-zinc-400 absolute top-1/4" />
            <div className="h-px w-full bg-zinc-400 absolute top-2/4" />
            <div className="h-px w-full bg-zinc-400 absolute top-3/4" />
            <div className="w-px h-full bg-zinc-400 absolute left-1/4" />
            <div className="w-px h-full bg-zinc-400 absolute left-2/4" />
            <div className="w-px h-full bg-zinc-400 absolute left-3/4" />
          </div>

          {/* Subtle accent shapes */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border  opacity-5" />
          <div
            className={`absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full border opacity-5`}
          />
          <div className={`absolute top-1/3 left-1/3 w-32 h-32 `} />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid sm:grid-cols-5 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Hero content with improved copywriting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="sm:col-span-3 md:col-span-1 text-center sm:text-left"
            >
              <motion.div
                className="mb-6 inline-block"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <Badge className={`px-3 py-1 text-sm `}>
                  Full-Stack Developer & Designer
                </Badge>
              </motion.div>

              <motion.h1
                className={`text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r `}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Transforming <span className="text-zinc-200">Ideas</span> Into
                Digital <span className="text-zinc-200">Reality</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-zinc-400 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                I craft exceptional digital experiences that blend cutting-edge
                technology with intuitive design. Specializing in creating
                solutions that not only look stunning but deliver measurable
                results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Button
                  className={`hover:opacity-90 text-zinc-950 group relative overflow-hidden`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Portfolio{" "}
                    <Rocket
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                  <span
                    className={`absolute inset-0 bg-gradient-to-r  opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                </Button>

                <Button variant="outline">Let&apos;s Collaborate</Button>
              </motion.div>
            </motion.div>

            {/* Hero image - 3D effect with interactive elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative mx-auto sm:col-span-2 md:col-span-1 md:ml-auto md:mr-0 max-w-[280px] sm:max-w-[320px] md:max-w-sm"
            >
              <div className="relative aspect-square perspective">
                {/* 3D rotating container that follows mouse */}
                <motion.div
                  className="relative w-full h-full transform-3d"
                  style={{}}
                >
                  {/* Profile image container */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="Your Profile"
                      fill
                      className="object-cover"
                      priority
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-tl  mix-blend-overlay opacity-40`}
                    />
                  </div>

                  {/* Decorative elements */}
                  <div
                    className={`absolute -inset-4 border-2  rounded-2xl -z-10 transform-3d translate-z-[-20px]`}
                  />
                  <div
                    className={`absolute -inset-8 border rounded-2xl -z-20 transform-3d translate-z-[-40px] opacity-30`}
                  />
                </motion.div>

                {/* Floating elements - simplified to just two */}
                <motion.div
                  className={`absolute -right-4 top-1/4 p-2 rounded-lg  text-zinc-950 shadow-lg`}
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Zap size={20} />
                </motion.div>

                <motion.div
                  className={`absolute -left-4 bottom-1/4 p-2 rounded-lg bg-zinc-800 shadow-lg`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles size={20} />
                </motion.div>
              </div>

              {/* Image replacement instructions */}
              <div className="mt-4 text-center text-xs text-zinc-500">
                <p>
                  Replace with your photo by updating the Image src in
                  app/page.tsx
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-3 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <Button
            variant="ghost"
            size="sm"
            className="text-zinc-500 hover:text-zinc-300"
          >
            Scroll Down
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
