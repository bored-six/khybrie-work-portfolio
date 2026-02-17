import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingShapes } from "./components/decorations/FloatingShapes";
import { CursorGlow } from "./components/decorations/CursorGlow";
import { BackToTop } from "./components/ui/BackToTop";
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-foreground">
      <LoadingSkeleton />
      <CursorGlow />
      <FloatingShapes />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
