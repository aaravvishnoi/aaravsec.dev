import { Link } from "react-router-dom";

/** Minimal wordmark — the mono "/" reads as a path/prompt without shouting. */
const Logo = () => (
  <Link
    to="/"
    className="group inline-flex items-baseline gap-0.5 rounded-md font-display text-[15px] font-semibold tracking-tight text-foreground"
    aria-label="Aarav Vishnoi — home"
  >
    <span className="font-mono text-[hsl(var(--brand))]">/</span>
    aarav
    <span className="text-muted-foreground transition-colors group-hover:text-foreground">vishnoi</span>
  </Link>
);

export default Logo;
