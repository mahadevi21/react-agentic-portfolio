import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import Reveal from "../components/Reveal";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <Reveal className="container">
        <SectionHeading
          id="contact-title"
          title="Contact"
          intro="I am open to frontend and full-stack opportunities. Send a message or reach out directly."
        />
        <div className="contact__grid">
          <ContactForm />
          <div className="contact__side">
            <h3>Reach me directly</h3>
            <p>
              Email:{" "}
              <a href={`mailto:${profile.email}`} className="text-link">
                {profile.email}
              </a>
            </p>
            <SocialLinks />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
