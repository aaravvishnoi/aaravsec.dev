import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { usePageMeta } from "@/hooks/usePageMeta";
import type { Severity } from "@/lib/severity";

interface Finding {
  title: string; description: string; tags: string[]; link: string; severity: Severity; date: string;
}

const findings: Finding[] = [
  { title: "Authentication bypass via SQL injection", description: "Unsanitized input in the login form let a crafted condition force the auth query true, granting access without valid credentials.", tags: ["SQLi", "Auth bypass"], link: "/portfolio/sql-injection-login-bypass", severity: "critical", date: "Mar 2026" },
  { title: "Oracle version disclosure via UNION-based SQLi", description: "UNION-based injection in a category filter exposed the Oracle version and patch level through v$version enumeration.", tags: ["SQLi", "UNION", "Oracle"], link: "/portfolio/sql-injection-oracle-version", severity: "medium", date: "Mar 2026" },
  { title: "Full DB enumeration on MS SQL Server", description: "UNION-based injection extracting server version, schema structure, and stored credentials from Microsoft SQL Server.", tags: ["SQLi", "UNION", "MS SQL"], link: "/portfolio/sql-injection-union-enumeration", severity: "critical", date: "Apr 2026" },
  { title: "Boolean-based blind SQLi credential extraction", description: "Character-by-character extraction of the admin password using conditional responses and Burp Intruder automation.", tags: ["Blind SQLi", "Boolean"], link: "/portfolio/blind-sql-injection-boolean", severity: "critical", date: "Apr 2026" },
  { title: "DOM XSS in jQuery selector sink", description: "Input from window.location.hash flowed into a jQuery selector via the hashchange event, enabling JavaScript execution.", tags: ["DOM XSS", "jQuery"], link: "/writeups/dom-xss-jquery-selector-sink", severity: "high", date: "May 2026" },
  { title: "DOM XSS via AngularJS expression injection", description: "Unsanitized search input was evaluated as an AngularJS expression, bypassing HTML encoding to run JavaScript.", tags: ["DOM XSS", "AngularJS"], link: "/writeups/dom-xss-angularjs-expression", severity: "high", date: "May 2026" },
  { title: "Reflected DOM XSS via eval() sink", description: "Server-reflected data was processed by a client-side eval() sink, allowing script execution and session theft.", tags: ["DOM XSS", "Reflected", "eval()"], link: "/writeups/reflected-dom-xss", severity: "high", date: "May 2026" },
];

const Writeups = () => {
  usePageMeta({
    title: "Findings",
    description: "Web exploitation findings and lab writeups — SQL injection and DOM XSS, each documented with root cause, reproduction, and impact.",
    path: "/writeups",
  });

  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="eyebrow mb-4">Catalogue</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Findings</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Web exploitation work, written up as advisories — each with root cause,
          reproduction steps, impact, and remediation.
        </p>

        <div className="mt-12 divide-y divide-border border-t border-border">
          {findings.map((f, i) => (
            <ProjectCard key={f.title} index={i + 1} {...f} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Writeups;
