"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { Bird, Code, Compass, Mail, Phone, Share2 } from "lucide-react";
import { useInView, motion } from "motion/react";
import React, { useRef } from "react";
import SocialLink from "./SocialLink";

const Form = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mt-8 sm:mt-12"
    >
      {/* Contact info */}
      <div className="space-y-8">
        <div>
          <h3 className={`text-xl font-semibold mb-4 ${theme.accent}`}>
            Let&apos;s Talk
          </h3>
          <p className="text-zinc-400">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
              <Mail size={18} className={theme.accent} />
            </div>
            <div>
              <p className="text-sm text-zinc-500">Email</p>
              <p className="text-zinc-300">hello@mjportfolio.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
              <Compass size={18} className={theme.accent} />
            </div>
            <div>
              <p className="text-sm text-zinc-500">Location</p>
              <p className="text-zinc-300">San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-zinc-300">Connect</h3>
          <div className="flex gap-3">
            <SocialLink icon={Code} href="https://github.com" />
            <SocialLink icon={Phone} href="https://linkedin.com" />
            <SocialLink icon={Bird} href="https://twitter.com" />
            <SocialLink icon={Share2} href="https://twitter.com/share" />
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-zinc-400">
              Name
            </label>
            <input
              id="name"
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-3 py-2 text-zinc-200 focus:outline-none focus:ring-1 "
              style={
                {
                  "--tw-ring-color": `var(--${theme.accent.split("-")[1]}-500)`,
                } as React.CSSProperties
              }
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-400"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-3 py-2 text-zinc-200 focus:outline-none focus:ring-1"
              style={
                {
                  "--tw-ring-color": `var(--${theme.accent.split("-")[1]}-500)`,
                } as React.CSSProperties
              }
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-zinc-400"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-3 py-2 text-zinc-200 focus:outline-none focus:ring-1"
              style={
                {
                  "--tw-ring-color": `var(--${theme.accent.split("-")[1]}-500)`,
                } as React.CSSProperties
              }
            />
          </div>

          <Button
            className={`w-full bg-gradient-to-r ${theme.secondary} text-zinc-950 hover:opacity-90`}
          >
            Send Message
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default Form;
