import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { ExternalLink, Medal } from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";

interface CertificationItemProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  index: number;
}
const CertificationItem = ({ ...props }: CertificationItemProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useTheme();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: props.index * 0.1 }}
      className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 flex items-start gap-4 hover:bg-zinc-800/30 transition-colors"
    >
      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-zinc-700">
        <Image
          src={props.image}
          alt={props.issuer}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="text-lg font-medium text-zinc-200">{props.title}</h3>
        <p className={`text-sm ${theme.accent} mb-1`}>{props.issuer}</p>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Medal size={12} />
          <span>Issued {props.date}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className={`mt-2 p-0 ${theme.accent} hover:bg-transparent`}
        >
          <span className="flex items-center gap-1">
            Verify <ExternalLink size={12} />
          </span>
        </Button>
      </div>
    </motion.div>
  );
};

export default CertificationItem;
