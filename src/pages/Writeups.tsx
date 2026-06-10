import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { usePageMeta } from "@/hooks/usePageMeta";
import type { Severity } from "@/lib/severity";

interface Finding {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  severity: Severity;
  date: string;
}

const findings: Finding[] = [
  {
    id: "AV-001",
    title: "Authentication bypass via SQL injection",
    description:
      "Unsanitized input in the login form let a crafted condition force the auth query true, granting access without valid credentials.",
    tags: ["SQLi", "Auth bypass"],
    link: "/portfolio/sql-injection-login-bypass",
    severity: "critical",
    date: "2026-03",
  },
  {
    id: "AV-002",
    title: "Oracle version disclosure via UNION-based SQLi",
    description:
      "UNION-based injection in a category filter exposed the Oracle version and patch level through v$version enumeration.",
    tags: ["SQLi", "UNION", "Oracle"],
    link: "/portfolio/sql-injection-oracle-version",
    severity: "medium",
    date: "2026-03",
  },
  {
    id: "AV-003",
    title: "Full DB enumeration on MS SQL Server",
    description:
      "UNION-based injection extracting server version, schema structure, and stored credentials from Microsoft SQL Server.",
    tags: ["SQLi", "UNION", "MS SQL"],
    link: "/portfolio/sql-injection-union-enumeration",
    severity: "critical",
    date: "2026-04",
  },
  {
    id: "AV-004",
    title: "Boolean-based blind SQLi credential extraction",
    description:
      "Character-by-character extraction of the admin password using conditional responses and Burp Intruder automation.",
    tags: ["Blind SQLi", "Boolean"],
    link: "/portfolio/blind-sql-injection-boolean",
    severity: "critical",
    date: "2026-04",
  },
  {
    id: "AV-005",
    title: "DOM XSS in jQuery selector sink",
    description:
      "Input from window.location.hash flowed into a jQuery selector via the hashchange event, enabling JavaScript execution.",
    tags: ["DOM XSS", "jQuery"],
    link: "/writeups/dom-xss-jquery-selector-sink",
    severity: "high",
    date: "2026-05",
  },
  {
    id: "AV-006",
    title: "DOM XSS via AngularJS expression injection",
    description:
      "Unsanitized search input was evaluated as an AngularJS expression, bypassing HTML encoding to run JavaScript.",
    tags: ["DOM XSS", "AngularJS"],
    link: "/writeups/dom-xss-angularjs-expression",
    severity: "high",
    date: "2026-05",
  },
  {
    id: "AV-007",
    title: "Reflected DOM XSS via eval() sink",
    description:
      "Server-reflected data was processed by a client-side eval() sink, allowing script execution and session theft.",
    tags: ["DOM XSS", "Reflected", "eval()"],
    link: "/writeups/reflected-dom-xss",
    severity: "high",
    date: "2026-05",
  },
];

const Writeups = () => {
  usePageMeta({
    title: "Findings",
    description:
      "A catalogue of web exploitation findings and lab writeups — SQL injection and DOM XSS, each documented as a security advisory.",
    path: "/writeups",
  });

  const counts = findings.reduce<Record<string, number>>((acc, f) => {
    acc[f.severity] = (acc[f.severity] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <p className="eyebrow mb-3">Advisory ledger</p>
        <h1 className="mb-4 font-display text-4xl font-bold tracking-tight">Findings</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Web exploitation work, written up as advisories. Each entry covers the root
          cause, reproduction steps, impact, and remediation.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {(["critical", "high", "medium"] as Severity[]).map(
            (s) => counts[s] && (
              <span key={s} className={`sev sev-${s}`}>
                {counts[s]} {s}
              </span>
            )
          )}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {findings.map((f) => (
            <ProjectCard key={f.id} {...f} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Writeups;
