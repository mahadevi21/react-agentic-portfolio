import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { highlights } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <Reveal className="container">
        <SectionHeading id="about-title" title="About me" />
        <div className="about__grid">
          <div className="about__text">
            <p>
              I am a frontend developer with around four years of experience building and improving web interfaces.
              Most of that time has gone into fixing and extending eLearning applications, mainly in Vue.js and
              JavaScript, and making them work for people who use keyboards and screen readers.
            </p>
            <p>
              Right now I am learning React and full-stack development by building projects: React apps on the
              front, and Node.js, Express and MongoDB behind them. I am being deliberate about what is professional
              experience and what is still practice.
            </p>
            <p>
              I care about interfaces that are usable and accessible from the start, and I want my next role to let
              me build complete features across the stack.
            </p>
          </div>

          <ul className="highlights">
            {highlights.map((h) => (
              <li key={h.value} className="card highlight">
                <p className="highlight__value">{h.value}</p>
                <p className="highlight__label">{h.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
