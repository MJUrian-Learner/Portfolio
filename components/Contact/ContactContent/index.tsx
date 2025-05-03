import React from "react";
import { Bird, Code, Compass, Mail, Phone, Share2 } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import SocialButton from "./SocialButton";
import ContactForm from "./ContactForm";

const ContactContent = () => {
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
      <div className="space-y-8">
        <div>
          <h3 className={`text-xl font-semibold mb-4 text-primary`}>
            Let&apos;s Talk
          </h3>
          <p className="text-muted-foreground">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
              <Mail size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-foreground">Email</p>
              <p className="text-muted-foreground">hello@mjportfolio.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
              <Compass size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-foreground">Location</p>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-primary/80">Connect</h3>
          <div className="flex gap-3">
            <SocialButton icon={Code} href="https://github.com" />
            <SocialButton icon={Phone} href="https://linkedin.com" />
            <SocialButton icon={Bird} href="https://twitter.com" />
            <SocialButton icon={Share2} href="https://twitter.com/share" />
          </div>
        </div>
      </div>
      <ContactForm />
    </motion.div>
  );
};

export default ContactContent;
