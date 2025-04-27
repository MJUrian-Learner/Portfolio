import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/hooks/useTheme";
import { Briefcase, CheckCircle } from "lucide-react";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

interface ExperienceItemProps {
  position: string;
  company: string;
  years: string;
  description: string;
  achievements: string[];
  index: number;
}

const ExperienceItem = ({ ...props }: ExperienceItemProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useTheme();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: props.index * 0.1 }}
      className="relative"
    >
      {/* Timeline connector */}
      {props.index < 2 && (
        <div
          className={`absolute left-6 top-[4.5rem] bottom-0 w-0.5 ${theme.highlight} opacity-30`}
        />
      )}

      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <div
            className={`w-12 h-12 rounded-full ${theme.highlight} flex items-center justify-center text-zinc-900 relative z-10`}
          >
            <Briefcase size={24} />
          </div>
        </div>
        <div className="flex-grow bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-zinc-200">
              {props.position}
            </h3>
            <Badge className={`mt-2 md:mt-0 ${theme.badge}`}>
              {props.years}
            </Badge>
          </div>
          <p className={`text-lg ${theme.accent} mb-2`}>{props.company}</p>
          <p className="text-zinc-400 mb-4">{props.description}</p>

          {props.achievements && props.achievements.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-zinc-500">
                Key Achievements
              </h4>
              <ul className="space-y-1">
                {props.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-zinc-300"
                  >
                    <CheckCircle size={16} className={theme.accent} />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
