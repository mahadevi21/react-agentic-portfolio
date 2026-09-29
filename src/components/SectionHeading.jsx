export default function SectionHeading({ id, title, intro }) {
  return (
    <header className="section-heading">
      <h2 id={id}>{title}</h2>
      {intro && <p>{intro}</p>}
    </header>
  );
}
