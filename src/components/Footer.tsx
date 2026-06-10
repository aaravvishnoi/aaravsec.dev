import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-dim">
            © {new Date().getFullYear()} Aarav Vishnoi
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Offensive security — findings, tooling &amp; notes.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://github.com/aaravvishnoi" target="_blank" rel="noopener noreferrer"
             className="text-muted-foreground transition-colors hover:text-primary" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/aarav-vishnoi" target="_blank" rel="noopener noreferrer"
             className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:aaravvishnoi764@gmail.com"
             className="text-muted-foreground transition-colors hover:text-primary" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
