import { SERVICES } from "@/constants";
import { useState } from "react";
import { ServiceCard } from "./ServiceCard";

const ServicesContent = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICES.map((service, index) => (
        <ServiceCard
          key={index}
          service={service}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </div>
  );
};

export default ServicesContent;
