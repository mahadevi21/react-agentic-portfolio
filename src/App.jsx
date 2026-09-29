import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Learning from "./sections/Learning";
import Accessibility from "./sections/Accessibility";
import Contact from "./sections/Contact";
import useActiveSection from "./hooks/useActiveSection";
import { navLinks, profile } from "./data/profile";

const navIds = navLinks.map((l) => l.id);

export default function App() {
  const activeId = useActiveSection(navIds);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Navbar links={navLinks} activeId={activeId} name={profile.name} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Learning />
        <Accessibility />
        <Contact />
      </main>
      <Footer name={profile.name} title={profile.title} />
    </>
  );
}
