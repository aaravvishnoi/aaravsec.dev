import Layout from "@/components/Layout";
import { ExternalLink, Github } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const projects = [
  {
    title: "Automated Vulnerability Scanner",
    description:
      "A Python-based recon and scanning tool that automates the early stages of a pentest. Given a target domain it runs port discovery via Nmap, fingerprints services, enumerates DNS, tests credentials against common protocols, and analyses HTTP security headers — compiling the results into a structured HTML report.",
    stack: ["Python", "Nmap", "Requests"],
    features: [
      "Port scanning & service fingerprinting",
      "DNS enumeration",
      "HTTP security header analysis",
      "Credential testing against services",
      "Automated HTML report generation",
    ],
    github: "https://github.com/aaravvishnoi/vuln-scanner",
  },
];

const Portfolio = () => {
  usePageMeta({ title: "Tooling", description: "Security tooling built by Aarav Vishnoi — including a modular Python vulnerability scanner.", path: "/portfolio" });

  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="eyebrow mb-4">Built tools</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Tooling</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Tools I&apos;ve built for offensive security workflows.
        </p>

        <div className="mt-12 divide-y divide-border border-t border-border">
          {projects.map((project) => (
            <article key={project.title} className="py-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="font-display text-2xl font-semibold tracking-tight">{project.title}</h2>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" /> Source <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>

              <ul className="mt-6 grid max-w-2xl gap-2.5 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--brand))]" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
