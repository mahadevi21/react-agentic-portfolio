import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import Reveal from "../components/Reveal";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section section--tint" aria-labelledby="skills-title">
      <Reveal className="container">
        <SectionHeading
          id="skills-title"
          title="Skills"
          intro="Grouped by how I use them. Backend skills are marked as learning because I have built them in personal projects, not in a professional role."
        />
        <div className="grid grid--2">
          {skillGroups.map((g) => (
            <SkillCard key={g.title} {...g} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
