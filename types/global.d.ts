import { LucideIcon } from "lucide-react";

type ConfidenceLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

interface Skill {
  name: string;
  icon: string;
  confidence_level: ConfidenceLevel;
  description: string;
  projects: string[];
}

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: Skill[];
}

interface SkillCategoryRecord {
  [key: string]: SkillCategory;
}
