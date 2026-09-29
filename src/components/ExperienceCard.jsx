export default function ExperienceCard({ role, company, summary, points, tags }) {
  return (
    <article className="card experience-card">
      <header>
        <h3>{role}</h3>
        <p className="experience-card__company">{company}</p>
      </header>
      <p>{summary}</p>
      <ul className="experience-card__points">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <ul className="chips" aria-label="Focus areas">
        {tags.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
