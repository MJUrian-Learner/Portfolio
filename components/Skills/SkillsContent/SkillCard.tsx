"use client";

import { Skill } from "@/types/global";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="relative group bg-background backdrop-blur-sm border border-border rounded-xl overflow-hidden transition-all duration-300 gap-0">
      <CardHeader>
        <CardTitle className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-foreground font-bold bg-gradient-to-br from-primary to-primary-foreground"
              aria-label={`${skill.name} technology icon`}
            >
              <span>{skill.icon}</span>
            </div>
            <h3 className="tracking-wide text-foreground">{skill.name}</h3>
          </div>

          <Button
            size="sm"
            variant="ghost"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
            onClick={() => setIsExpanded((prev) => !prev)}
            className="p-1"
          >
            <span
              className="text-foregroundt"
              aria-label={`Confidence level: ${skill.confidence_level}`}
            >
              {skill.confidence_level}
            </span>

            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </Button>
        </CardTitle>

        <CardDescription hidden>
          {skill.name} skill card with confidence level {skill.confidence_level}
          . Click to view description and related projects.
        </CardDescription>
      </CardHeader>
      <motion.div
        animate={isExpanded ? "expanded" : "collapsed"}
        initial="collapsed"
        variants={{
          collapsed: { height: 0, opacity: 0, pointerEvents: "none" },
          expanded: { height: "auto", opacity: 1, pointerEvents: "auto" },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
        style={{ willChange: "height, opacity" }}
      >
        <CardContent>
          <p className="text-sm text-muted-foreground my-4">
            {skill.description}
          </p>
        </CardContent>
        <CardFooter className="space-y-2 flex flex-col items-start w-full">
          <h4 className="text-xs uppercase tracking-wider text-muted-foreground">
            Related Projects
          </h4>
          <div className="flex flex-wrap gap-2">
            {skill.projects.map((project: string) => (
              <Badge key={project}>{project}</Badge>
            ))}
          </div>
        </CardFooter>
      </motion.div>
    </Card>
  );
};

export default SkillCard;
