import SectionHeading from "../components/SectionHeading";
import ExperienceCard from "../components/ExperienceCard";
import Reveal from "../components/Reveal";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <Reveal className="container">
        <SectionHeading id="experience-title" title="Experience" />
        <div className="stack">
          {experience.map((e) => (
            <ExperienceCard key={e.role + e.company} {...e} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
