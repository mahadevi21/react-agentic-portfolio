// Ordered list, because the learning path is a real sequence.
export default function Timeline({ steps, statusLabels }) {
  return (
    <ol className="timeline">
      {steps.map((step) => (
        <li key={step.title} className={`timeline__item timeline__item--${step.status}`}>
          <span className="timeline__marker" aria-hidden="true" />
          <div>
            <p className="timeline__title">{step.title}</p>
            <p className="timeline__status">{statusLabels[step.status]}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
