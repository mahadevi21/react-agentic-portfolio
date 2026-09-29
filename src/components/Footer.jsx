import SocialLinks from "./SocialLinks";

export default function Footer({ name, title }) {
  const backToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.getElementById("home")?.focus({ preventScroll: true });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{name}</p>
          <p className="footer__title">Software Developer and Frontend Developer</p>
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
        <div className="footer__actions">
          <SocialLinks />
          <button type="button" className="btn btn--ghost" onClick={backToTop}>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
