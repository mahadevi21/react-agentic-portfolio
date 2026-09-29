import Reveal from "../components/Reveal";

const practices = [
  { name: "WCAG awareness", text: "Checking interfaces against the guidelines while building and fixing them." },
  { name: "Semantic HTML", text: "Using the right element first, so structure and meaning come for free." },
  { name: "ARIA", text: "Adding roles and states only where native HTML cannot express them." },
  { name: "Keyboard navigation", text: "Every action reachable with a keyboard, with a focus indicator you can see." },
  { name: "Screen-reader testing", text: "Testing with NVDA and JAWS to hear what users actually hear." },
];

export default function Accessibility() {
  return (
    <section id="accessibility" className="section section--dark" aria-labelledby="a11y-title">
      <Reveal className="container a11y">
        <div>
          <h2 id="a11y-title">Accessibility is part of how I build</h2>
          <p className="a11y__lead">
            I do not treat accessibility as a final check. It shapes the markup, the interaction and the testing
            from the first component, and it is a large part of my professional frontend work.
          </p>
        </div>
        <dl className="a11y__list">
          {practices.map((p) => (
            <div key={p.name} className="a11y__item">
              <dt>{p.name}</dt>
              <dd>{p.text}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
