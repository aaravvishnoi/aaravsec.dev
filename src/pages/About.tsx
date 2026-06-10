import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";

const focus = [
  { k: "Web exploitation", v: "XSS, CSRF, SQLi, IDOR, authentication bypasses, and business logic flaws." },
  { k: "API security", v: "REST and GraphQL testing — broken authorization, mass assignment, rate limiting." },
  { k: "Methodology", v: "Systematic enumeration, recon, and detailed note-taking on every engagement." },
  { k: "Tooling & scripting", v: "Burp Suite workflows, Python automation, Bash, and recon scripting." },
];

const About = () => {
  usePageMeta({
    title: "About",
    description:
      "Aarav Vishnoi — an aspiring offensive security practitioner focused on web exploitation, documented methodically.",
    path: "/about",
  });

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-3">Profile</p>
          <h1 className="mb-10 font-display text-4xl font-bold tracking-tight">About</h1>

          <div className="space-y-10">
            <section>
              <h2 className="mb-4 font-display text-xl font-semibold">Who I am</h2>
              <p className="leading-relaxed text-muted-foreground">
                I&apos;m an aspiring offensive security practitioner working toward red team
                operations. My current focus is web exploitation — the findings on this site
                come from PortSwigger Academy labs and hands-on practice, with API security
                and privilege escalation next on the list.
              </p>
            </section>

            <section>
              <h2 className="mb-5 font-display text-xl font-semibold">Focus areas</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {focus.map((f) => (
                  <div key={f.k} className="rounded-lg border border-border bg-card p-5">
                    <h3 className="mb-2 font-display font-semibold text-primary">{f.k}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.v}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-display text-xl font-semibold">How I work</h2>
              <p className="leading-relaxed text-muted-foreground">
                Methodology-driven and documentation-heavy. I treat every lab like a real
                engagement: systematic enumeration, thorough recon, and notes detailed enough
                that the work is repeatable by anyone reading it.
              </p>
            </section>

            <section className="rounded-lg border border-primary/25 bg-primary/[0.04] p-6">
              <h2 className="mb-2 font-display text-lg font-semibold">
                <span className="text-primary">Proof over talk.</span>
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                This site is a living record of what I can actually do. Every finding, tool,
                and note is real work — not a list of buzzwords.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
