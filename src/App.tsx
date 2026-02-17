import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingShapes } from "./components/decorations/FloatingShapes";
import { CursorGlow } from "./components/decorations/CursorGlow";
import { SectionDivider } from "./components/decorations/SectionDivider";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-foreground">
      <CursorGlow />
      <FloatingShapes />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider variant={0} />
        <About />
        <SectionDivider variant={1} flip />
        <Skills />
        <SectionDivider variant={2} />
        <Projects />
        <SectionDivider variant={3} flip />
        <Experience />
        <SectionDivider variant={4} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
