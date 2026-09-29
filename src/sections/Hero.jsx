import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";
import { profile } from "../data/profile";

// The panel on the right shows how a screen reader is offered this page.
// It is decorative, so it is hidden from assistive technology.
const tree = [
  { depth: 0, role: "document", text: "Mahadevi S." },
  { depth: 1, role: "navigation", text: "Primary" },
  { depth: 1, role: "main" },
  { depth: 2, role: "heading, level 1", text: "Mahadevi S." },
  { depth: 2, role: "link", text: "View projects" },
  { depth: 2, role: "link", text: "Download resume" },
  { depth: 2, role: "link", text: "Contact me" },
  { depth: 1, role: "contentinfo" },
];

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 id="hero-title">
            <span className="hero__name">Mahadevi S.</span>
            <span className="hero__role">Frontend developer, growing into full stack</span>
          </h1>
          <p className="hero__titles">{profile.title}</p>
          <p className="hero__lead">{profile.tagline}</p>

          <div className="hero__actions">
            <Button href="#projects">View projects</Button>
            <Button href={profile.resumeUrl} variant="secondary" download>
              Download resume
            </Button>
            <Button href="#contact" variant="ghost">
              Contact me
            </Button>
          </div>

          <SocialLinks className="hero__social" />
        </div>

        <figure className="hero__panel" aria-hidden="true">
          <div className="tree">
            <div className="tree__bar">
              <span />
              <span />
              <span />
              <b>accessibility tree</b>
            </div>
            <ul className="tree__body">
              {tree.map((row, i) => (
                <li key={i} style={{ paddingLeft: `${row.depth * 1.25}rem` }}>
                  <span className="tree__role">{row.role}</span>
                  {row.text && <span className="tree__text"> "{row.text}"</span>}
                </li>
              ))}
            </ul>
          </div>
          <figcaption>How a screen reader is offered a page. Building for it is part of how I work.</figcaption>
        </figure>
      </div>
    </section>
  );
}
