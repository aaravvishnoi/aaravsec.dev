import Layout from "@/components/Layout";
import { ExternalLink, Github, Terminal, Shield, Network, FileText } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const projects = [
  {
    title: "Automated Vulnerability Scanner",
    description:
      "A Python-based recon and scanning tool that automates the early stages of a pentest. Given a target domain it runs port discovery via Nmap, fingerprints services, enumerates DNS, tests credentials against common protocols, and analyses HTTP security headers — compiling the results into a structured HTML report.",
    stack: ["Python", "Nmap", "Requests"],
    features: [
      { icon: Terminal, text: "Port scanning & service fingerprinting" },
      { icon: Network, text: "DNS enumeration" },
      { icon: Shield, text: "HTTP security header analysis" },
      { icon: Terminal, text: "Credential testing against services" },
      { icon: FileText, text: "Automated HTML report generation" },
    ],
    github: "https://github.com/aaravvishnoi/vuln-scanner",
    architecture:
      "Built as modular components — port scanner, service detector, DNS enumerator, web scanner, credential tester, and report generator — mirroring a real recon workflow rather than a single script.",
  },
];

const Portfolio = () => {
  usePageMeta({
    title: "Tooling",
    description: "Security tooling built by Aarav Vishnoi — including a modular Python vulnerability scanner.",
    path: "/portfolio",
  });

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <p className="eyebrow mb-3">Built tools</p>
        <h1 className="mb-4 font-display text-4xl font-bold tracking-tight">Tooling</h1>
        <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
          Tools I&apos;ve built for offensive security workflows.
        </p>

        <div className="space-y-8">
          {projects.map((project) => (
            <article key={project.title} className="rounded-lg border border-border bg-card p-7 sm:p-8">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <h2 className="font-display text-2xl font-semibold">{project.title}</h2>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-primary transition-colors hover:bg-primary/20"
                >
                  <Github className="h-4 w-4" />
                  Source
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <p className="mb-4 leading-relaxed text-muted-foreground">{project.description}</p>
              <p className="mb-6 text-sm italic leading-relaxed text-dim">{project.architecture}</p>

              <div className="mb-6 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>

              <h3 className="eyebrow mb-3">Key features</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3 text-sm text-foreground">
                    <feature.icon className="h-4 w-4 shrink-0 text-primary" />
                    {feature.text}
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
