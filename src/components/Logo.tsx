import { Link } from "react-router-dom";

/**
 * Brand mark. A monospace monogram framed like a terminal prompt — the
 * site's signature, tying the "operator session" idea to the amber accent.
 */
const Logo = ({ withWordmark = true }: { withWordmark?: boolean }) => (
  <Link
    to="/"
    className="group inline-flex items-center gap-2.5 rounded-md"
    aria-label="Aarav Vishnoi — home"
  >
    <span className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/40 bg-primary/10 font-mono text-sm font-semibold text-primary transition-colors group-hover:bg-primary/20">
      A
    </span>
    {withWordmark && (
      <span className="font-display text-base font-semibold tracking-tight text-foreground">
        aarav<span className="text-primary">sec</span>
      </span>
    )}
  </Link>
);

export default Logo;
