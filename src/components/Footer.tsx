import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Aarav Vishnoi
      </p>
      <div className="flex items-center gap-5">
        <a href="https://github.com/aaravvishnoi" target="_blank" rel="noopener noreferrer"
           className="text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
          <Github className="h-[18px] w-[18px]" />
        </a>
        <a href="https://linkedin.com/in/aarav-vishnoi" target="_blank" rel="noopener noreferrer"
           className="text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
          <Linkedin className="h-[18px] w-[18px]" />
        </a>
        <a href="mailto:aaravvishnoi764@gmail.com"
           className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Email">
          <Mail className="h-[18px] w-[18px]" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
