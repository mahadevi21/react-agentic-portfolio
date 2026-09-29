// Renders a link (when href is given) or a button, with consistent styling.
export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim();
  if (href) {
    const extra = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} className={classes} {...extra} {...rest}>
        {children}
        {external && <span className="visually-hidden"> (opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
