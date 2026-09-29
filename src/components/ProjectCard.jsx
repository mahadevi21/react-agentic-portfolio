import Button from "./Button";

export default function ProjectCard({ title, description, features, tech, githubUrl, liveUrl }) {
  return (
    <article className="card project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <ul className="project-card__features">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <ul className="chips" aria-label="Technologies used">
        {tech.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>

      {(githubUrl || liveUrl) && (
        <div className="project-card__links">
          {githubUrl && (
            <Button href={githubUrl} variant="ghost" external aria-label={`${title} source code on GitHub`}>
              GitHub
            </Button>
          )}
          {liveUrl && (
            <Button href={liveUrl} variant="ghost" external aria-label={`${title} live demo`}>
              Live demo
            </Button>
          )}
        </div>
      )}
    </article>
  );
}
