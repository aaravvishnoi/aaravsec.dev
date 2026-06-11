import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";

const focus = [
  { k: "Web exploitation", v: "XSS, CSRF, SQLi, IDOR, authentication bypasses, and business logic flaws." },
  { k: "API security", v: "REST and GraphQL testing — broken authorization, mass assignment, rate limiting." },
  { k: "Methodology", v: "Systematic enumeration, recon, and detailed notes on every engagement." },
  { k: "Tooling & scripting", v: "Burp Suite workflows, Python automation, Bash, and recon scripting." },
];

const About = () => {
  usePageMeta({ title: "About", description: "Aarav Vishnoi — an aspiring offensive security practitioner focused on web exploitation.", path: "/about" });

  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Profile</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">About</h1>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            I&apos;m an aspiring offensive security practitioner working toward red team
            operations. My current focus is web exploitation — the findings here come from
            PortSwigger Academy labs and hands-on practice, with API security and privilege
            escalation next.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            My approach is methodology-driven and documentation-heavy. I treat every lab like
            a real engagement: systematic enumeration, thorough recon, and notes detailed
            enough that the work is repeatable by anyone reading it.
          </p>

          <h2 className="mt-16 font-display text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Focus areas
          </h2>
          <dl className="mt-6 divide-y divide-border border-t border-border">
            {focus.map((f) => (
              <div key={f.k} className="grid gap-1 py-5 sm:grid-cols-[200px_1fr] sm:gap-6">
                <dt className="font-display font-medium text-foreground">{f.k}</dt>
                <dd className="text-muted-foreground">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Layout>
  );
};

export default About;
