import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { ChevronRight, LucideIcon } from "lucide-react";
import { useRef } from "react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

export const ServiceCard = ({
  service,
  index,
  hoveredIndex,
  setHoveredIndex,
}: ServiceCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <Card className="bg-background/30 hover:bg-primary/10 transition-all duration-300 overflow-hidden group">
        <CardHeader>
          <div className="mb-2">
            <service.icon className="text-primary" />
          </div>
          <CardTitle className="text-xl font-bold text-foreground">
            {service.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mt-2">
            {service.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex}>{tag}</Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter>
          <Button
            variant="ghost"
            className="p-1 hover:bg-transparent group text-primary"
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
  );
};
