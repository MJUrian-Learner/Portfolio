import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Skill } from "./SkillsContent";

interface SkillCardProps {
  skill: Skill;
  hoveredSkill: string | null;
  setHoveredSkill: (name: string | null) => void;
}

const SkillCard = ({
  skill,
  hoveredSkill,
  setHoveredSkill,
}: SkillCardProps) => (
  <motion.div
    className="relative group bg-background backdrop-blur-sm border border-border rounded-xl overflow-hidden transition-all duration-300"
    onMouseEnter={() => setHoveredSkill(skill.name)}
    onMouseLeave={() => setHoveredSkill(null)}
  >
    {/* Collapsed view (always visible) */}
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-foreground font-bold`}
          >
            <span>{skill.icon}</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            {skill.name}
          </h3>
        </div>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={14}
              className={
                star <= Math.round(skill.level / 20)
                  ? "text-primary"
                  : "text-muted-foreground"
              }
              fill={
                star <= Math.round(skill.level / 20) ? "currentColor" : "none"
              }
            />
          ))}
        </div>
      </div>
      {/* Expanded content (hidden by default, shown on hover) */}
      <motion.div
        animate={hoveredSkill === skill.name ? "expanded" : "collapsed"}
        initial="collapsed"
        variants={{
          collapsed: { height: 0, opacity: 0, pointerEvents: "none" },
          expanded: { height: "auto", opacity: 1, pointerEvents: "auto" },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
        style={{ willChange: "height, opacity" }}
      >
        <p className="text-sm text-muted-foreground mb-4">
          {skill.description}
        </p>
        <div className="space-y-2">
          <h4 className="text-xs uppercase tracking-wider text-muted-foreground">
            Related Projects
          </h4>
          <div className="flex flex-wrap gap-2">
            {skill.projects.map((project: string) => (
              <Badge key={project}>{project}</Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export default SkillCard;
