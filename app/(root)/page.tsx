import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Credentials from "@/components/Credentials";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative z-10 text-foreground">
      <Hero />
      <About />
      <Services />
      <Credentials />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}
