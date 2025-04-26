import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Credentials from "@/components/Credentials";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative z-10 text-zinc-200">
      <Hero />
      <About />
      <Credentials />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}
