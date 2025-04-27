import React from "react";
import DiagonalBackground from "../DiagonalBackground";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-20"
    >
      <DiagonalBackground clip="polygon(0 0, 100% 0, 70% 100%, 0 100%)" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="sm:col-span-1 md:col-span-2 md:order-1 order-2">
            <AboutImage />
          </div>
          <div className="sm:col-span-2 md:col-span-3 md:order-2 order-1">
            <AboutContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
