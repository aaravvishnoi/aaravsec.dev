import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Terminal, Shield, Network, FileText } from "lucide-react";

const projects = [
  {
    title: "Automated Vulnerability Scanner",
    description:
      "A Python-based reconnaissance and vulnerability scanning tool built to automate the early stages of a penetration test. Given a target domain, the scanner runs port discovery via Nmap, identifies running services, performs DNS enumeration, tests credentials against common protocols, and analyses HTTP security headers for misconfigurations. Results are compiled into a structured HTML report.",
    stack: ["Python", "Nmap", "Requests"],
    features: [
      { icon: Terminal, text: "Port scanning and service fingerprinting" },
      { icon: Network, text: "DNS enumeration" },
      { icon: Shield, text: "HTTP security header analysis" },
      { icon: Terminal, text: "Credential testing against network services" },
      { icon: FileText, text: "Automated HTML vulnerability report generation" },
    ],
    github: "https://github.com/aaravvishnoi/vuln-scanner",
    architecture:
      "Built across modular components including a port scanner, service detector, DNS enumerator, web scanner, credential tester, and report generator — reflecting a real-world recon workflow rather than a single-script approach.",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Portfolio</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Major projects and tools built for offensive security workflows.
        </p>

        <div className="space-y-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-lg border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  {project.title}
                </h2>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <p className="mb-4 text-muted-foreground">{project.description}</p>

              <p className="mb-6 text-sm italic text-muted-foreground">
                {project.architecture}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="border border-accent/20 bg-accent/10 text-accent hover:bg-accent/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Key Features
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <feature.icon className="h-4 w-4 shrink-0 text-accent" />
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
