import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Severity } from "@/lib/severity";

interface FindingCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  severity: Severity;
  date: string;
}

const ProjectCard = ({ id, title, description, tags, link, severity, date }: FindingCardProps) => (
  <Link to={link} className="group block h-full">
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:bg-secondary/30">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-dim">{id}</span>
        <span className={`sev sev-${severity}`}>{severity}</span>
      </div>

      <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
        {title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-border pt-3">
        <span className="font-mono text-xs text-dim">{date}</span>
        <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Read <ArrowUpRight className="h-3 w-3" />
        </span>
      </div>
    </article>
  </Link>
);

export default ProjectCard;
