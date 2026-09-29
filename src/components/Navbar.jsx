import { useEffect, useRef, useState } from "react";

export default function Navbar({ links, activeId, name }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  // Close the mobile menu with Escape and return focus to the toggle button.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <a className="navbar__brand" href="#home" onClick={() => setOpen(false)}>
          {name}
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="navbar__toggle-icon" aria-hidden="true" />
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
        </button>

        <nav aria-label="Primary">
          <ul id="primary-navigation" className={`navbar__list ${open ? "is-open" : ""}`}>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="navbar__link"
                  aria-current={activeId === link.id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
