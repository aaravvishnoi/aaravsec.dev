import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, ExternalLink } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const ledger = [
  { id: "AV-007", sev: "high", title: "Reflected DOM XSS via eval() sink", date: "2026-05" },
  { id: "AV-004", sev: "critical", title: "Boolean-based blind SQLi credential extraction", date: "2026-04" },
  { id: "AV-001", sev: "critical", title: "Authentication bypass via SQL injection", date: "2026-03" },
];

const profiles = [
  { label: "GitHub", href: "https://github.com/aaravvishnoi", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/aarav-vishnoi", icon: Linkedin },
];

const capabilities = [
  {
    k: "Web exploitation",
    v: "Authentication bypasses, injection flaws, and client-side vulnerabilities — the focus of my current lab work.",
  },
  {
    k: "Methodology & notes",
    v: "Systematic enumeration and Burp-driven testing, documented step by step so the work is repeatable.",
  },
  {
    k: "Tooling & scripting",
    v: "Python and Bash automation for recon and reporting — turning manual checks into reusable scripts.",
  },
];

const Index = () => {
  usePageMeta({
    title: "",
    description:
      "Aarav Vishnoi — an offensive security practitioner documenting web exploitation findings, lab writeups, and tooling.",
    path: "/",
  });

  return (
    <Layout>
      <div className="container mx-auto px-6">
        {/* Hero */}
        <section className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20">
          <p className="eyebrow boot boot-1 mb-5">Offensive security · advisory ledger</p>
          <h1 className="boot boot-1 font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Aarav Vishnoi
          </h1>
          <div className="divider-animate mt-5 h-1 w-24 bg-primary" />

          <p className="boot boot-2 mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I&apos;m learning offensive security in the open. This is a working record of
            the web exploitation I&apos;ve pulled apart — each one written up like a
            finding, with the steps that got me there.
          </p>

          <p className="boot boot-3 mt-6 font-mono text-sm text-dim">
            <span className="text-primary">aarav@sec</span>:~$ status{" "}
            <span className="text-foreground">7 findings logged · learning API exploitation</span>
            <span className="caret">&nbsp;</span>
          </p>

          <div className="boot boot-3 mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="group">
              <Link to="/writeups">
                View findings
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            {profiles.map((p) => (
              <Button key={p.label} asChild size="lg" variant="outline">
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  <p.icon className="mr-2 h-4 w-4" />
                  {p.label}
                </a>
              </Button>
            ))}
          </div>
        </section>

        {/* Recent ledger entries */}
        <section className="border-t border-border py-16">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-semibold">Recent findings</h2>
            <Link to="/writeups" className="font-mono text-xs uppercase tracking-wider text-primary hover:underline">
              All findings →
            </Link>
          </div>
          <div className="divide-y divide-border rounded-lg border border-border bg-card">
            {ledger.map((row) => (
              <Link
                key={row.id}
                to="/writeups"
                className="flex flex-col gap-2 p-5 transition-colors hover:bg-secondary/40 sm:flex-row sm:items-center sm:gap-5"
              >
                <span className="font-mono text-xs text-dim">{row.id}</span>
                <span className={`sev sev-${row.sev}`}>{row.sev}</span>
                <span className="flex-1 text-sm text-foreground">{row.title}</span>
                <span className="font-mono text-xs text-dim">{row.date}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Capabilities — scoped honestly to what's evidenced */}
        <section className="border-t border-border py-16">
          <h2 className="mb-10 font-display text-2xl font-semibold">What I work on</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.k} className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-3 font-display text-lg font-semibold text-primary">{c.k}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border py-16 pb-24">
          <div className="rounded-lg border border-primary/25 bg-primary/[0.04] p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold">Open to security work</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Looking for internships, junior pentest roles, or collaboration on
              vulnerability research. The fastest way to reach me is email.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Get in touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://github.com/aaravvishnoi" target="_blank" rel="noopener noreferrer">
                  GitHub
                  <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
