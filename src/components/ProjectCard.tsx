import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Severity } from "@/lib/severity";

interface FindingRowProps {
  index: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  severity: Severity;
  date: string;
}

/** A finding as a quiet, editorial list row — numbered, hairline-separated. */
const ProjectCard = ({ index, title, description, tags, link, severity, date }: FindingRowProps) => (
  <Link to={link} className="group block">
    <article className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 gap-y-2 py-6">
      <span className="font-mono text-xs text-dim">{String(index).padStart(2, "0")}</span>

      <div>
        <div className="mb-1.5 flex items-center gap-3">
          <span className={`sev sev-${severity}`}>{severity}</span>
        </div>
        <h3 className="font-display text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-[hsl(var(--brand))]">
          {title}
        </h3>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 justify-self-end">
        <span className="hidden font-mono text-xs text-dim sm:inline">{date}</span>
        <ArrowUpRight className="h-4 w-4 text-dim transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </article>
  </Link>
);

export default ProjectCard;
