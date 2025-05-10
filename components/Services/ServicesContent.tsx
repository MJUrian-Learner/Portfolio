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
import { SERVICES } from "@/constants";
import { ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ServicesContent = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

//   const handleLearnMore = (index: number) => {

//   }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICES.map((service, index) => (
        <motion.div
          key={index}
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
      ))}
    </div>
  );
};

export default ServicesContent;
