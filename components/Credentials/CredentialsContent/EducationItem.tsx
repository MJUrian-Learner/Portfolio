import { Badge } from "@/components/ui/badge";
import { CheckCircle, GraduationCap } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface EducationItemProps {
  degree: string;
  institution: string;
  years: string;
  description: string;
  achievements: string[];
  index: number;
}

const EducationItem = ({ ...props }: EducationItemProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      key={props.index}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: props.index * 0.1 }}
      className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="flex-shrink-0">
          <div
            className={`w-12 h-12 rounded-full bg-primary flex items-center justify-center text-foreground`}
          >
            <GraduationCap size={24} />
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-foreground">
              {props.degree}
            </h3>
            <Badge className={`mt-2 md:mt-0 `}>{props.years}</Badge>
          </div>
          <p className={`text-lg text-primary mb-2`}>{props.institution}</p>
          <p className="text-muted-foreground mb-4">{props.description}</p>

          {props.achievements && props.achievements.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">
                Key Achievements
              </h4>
              <ul className="space-y-1">
                {props.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <CheckCircle size={16} className="text-primary" />
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

export default EducationItem;
