import SectionHeading from "../components/SectionHeading";
import Timeline from "../components/Timeline";
import Reveal from "../components/Reveal";
import { learningSteps, statusLabels } from "../data/learning";

export default function Learning() {
  return (
    <section id="learning" className="section" aria-labelledby="learning-title">
      <Reveal className="container">
        <SectionHeading
          id="learning-title"
          title="Learning journey: frontend to full stack"
          intro="The path I am following, in order. The labels show where each topic stands today."
        />
        <Timeline steps={learningSteps} statusLabels={statusLabels} />
      </Reveal>
    </section>
  );
}
