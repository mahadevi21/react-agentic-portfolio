import { profile } from "../data/profile";

const icons = {
  GitHub: (
    <svg viewBox="0 0 16 16" width="20" height="20" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M7 10v7M7 7v.01M11 17v-7m0 3c0-2 1.5-3 3-3s3 1 3 3v4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <rect x="2.5" y="4.5" width="19" height="15" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
};

export default function SocialLinks({ className = "" }) {
  const links = [
    { label: "GitHub", href: profile.github, external: true },
    { label: "LinkedIn", href: profile.linkedin, external: true },
    { label: "Email", href: `mailto:${profile.email}`, external: false },
  ].filter((l) => l.href && !l.href.endsWith(":"));

  return (
    <ul className={`social ${className}`.trim()} aria-label="Social links">
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            className="social__link"
            {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {icons[l.label]}
            <span>{l.label}</span>
            {l.external && <span className="visually-hidden"> (opens in a new tab)</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
