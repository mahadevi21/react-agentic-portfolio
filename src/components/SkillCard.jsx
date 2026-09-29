export default function SkillCard({ title, note, badge, items }) {
  return (
    <article className="card skill-card">
      <div className="skill-card__head">
        <h3>{title}</h3>
        {badge && <span className="pill">{badge}</span>}
      </div>
      {note && <p className="skill-card__note">{note}</p>}
      <ul className="chips" aria-label={`${title} skills`}>
        {items.map((item) => (
          <li key={item} className="chip">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
