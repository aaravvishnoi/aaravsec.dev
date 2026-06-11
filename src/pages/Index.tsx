import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const recent = [
  { n: "07", sev: "high", title: "Reflected DOM XSS via eval() sink", date: "May 2026", link: "/writeups/reflected-dom-xss" },
  { n: "04", sev: "critical", title: "Boolean-based blind SQLi credential extraction", date: "Apr 2026", link: "/portfolio/blind-sql-injection-boolean" },
  { n: "01", sev: "critical", title: "Authentication bypass via SQL injection", date: "Mar 2026", link: "/portfolio/sql-injection-login-bypass" },
];

const focus = ["Web exploitation", "API security", "Recon tooling"];

const Index = () => {
  usePageMeta({
    title: "",
    description:
      "Aarav Vishnoi — an offensive security practitioner documenting web exploitation findings, lab writeups, and tooling.",
    path: "/",
  });

  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="flex min-h-[78vh] flex-col justify-center py-24">
          <p className="eyebrow rise rise-1 mb-6">Offensive security</p>
          <h1 className="rise rise-1 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Aarav Vishnoi
          </h1>
          <p className="rise rise-2 mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I break web applications and write up what I find. A working record of
            the exploitation I&apos;ve worked through — root cause, reproduction, impact.
          </p>

          <div className="rise rise-3 mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="group">
              <Link to="/writeups">
                View findings
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="https://github.com/aaravvishnoi" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="https://linkedin.com/in/aarav-vishnoi" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>

          <div className="rise rise-4 mt-12 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-dim">
            {focus.map((f, i) => (
              <span key={f} className="flex items-center gap-2">
                {i > 0 && <span className="text-border">·</span>}
                {f}
              </span>
            ))}
          </div>
        </section>

        {/* Recent findings — numbered index */}
        <section className="border-t border-border py-16">
          <div className="mb-2 flex items-baseline justify-between">
            <h2 className="font-display text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Recent findings
            </h2>
            <Link to="/writeups" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              All findings →
            </Link>
          </div>
          <div className="divide-y divide-border">
            {recent.map((r) => (
              <Link key={r.n} to={r.link} className="group flex items-center gap-5 py-5">
                <span className="font-mono text-xs text-dim">{r.n}</span>
                <span className={`sev sev-${r.sev} w-24 shrink-0`}>{r.sev}</span>
                <span className="flex-1 text-[15px] text-foreground transition-colors group-hover:text-[hsl(var(--brand))]">
                  {r.title}
                </span>
                <span className="hidden font-mono text-xs text-dim sm:inline">{r.date}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-t border-border py-20">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight">Open to security work</h2>
              <p className="mt-2 max-w-md text-muted-foreground">
                Internships, junior pentest roles, or vulnerability research. Email is best.
              </p>
            </div>
            <Button asChild size="lg">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
