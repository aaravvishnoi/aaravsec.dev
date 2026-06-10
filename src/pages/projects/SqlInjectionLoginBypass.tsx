import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Terminal, Shield, AlertTriangle } from "lucide-react";

const SqlInjectionLoginBypass = () => {
  usePageMeta({ title: "Login Bypass using SQL Injection", description: "Authentication bypass through unsanitized user input leading to full application compromise", path: "/portfolio/sql-injection-login-bypass" });

  return (
    <Layout>
      <article className="container mx-auto px-4 py-16">
        <Link to="/writeups">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Writeups
          </Button>
        </Link>

        <header className="mb-12 border-b border-operator-border pb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Login Bypass using SQL Injection
          </h1>
          <p className="text-lg text-muted-foreground">
            Authentication bypass through unsanitized user input leading to full application compromise
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="tag">SQL Injection</span>
            <span className="tag">Auth Bypass</span>
            <span className="sev sev-critical">Critical</span>
          </div>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <Shield className="h-6 w-6 text-accent" />
              Overview
            </h2>
            <div className="rounded-lg border border-operator-border bg-operator-surface p-6">
              <p className="mb-4 leading-relaxed text-foreground">
                The login functionality failed to properly sanitize user-controlled input, allowing
                an attacker to manipulate the SQL query used for authentication. By injecting a
                crafted condition into the password field, the attacker can force the database to
                evaluate the query as true and gain unauthorized access to restricted areas of the
                application.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                This is a classic but critical vulnerability that directly compromises access
                control.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Attack Surface</h2>
            <div className="rounded-lg border border-operator-border bg-operator-surface p-6">
              <p className="mb-4 leading-relaxed text-foreground">
                The vulnerability exists in the login page, specifically within:
              </p>
              <ul className="ml-6 space-y-2 text-foreground">
                <li className="list-disc">
                  <strong>Username field:</strong> vulnerable but not required for exploitation
                </li>
                <li className="list-disc">
                  <strong>Password field:</strong> user input is concatenated directly into an SQL
                  query without validation or parameterization
                </li>
              </ul>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                This allows attackers to inject SQL logic and alter the intended behavior of the
                authentication query.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Exploitation Steps</h2>
            <div className="rounded-lg border border-operator-border bg-operator-surface p-6">
              <ol className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="font-mono text-accent">1.</span>
                  <span>
                    Navigate to the login page and intercept the request using Burp Suite (optional
                    but recommended).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-accent">2.</span>
                  <span>Enter any value in the username field (or leave it blank).</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-accent">3.</span>
                  <span>
                    Inject a malicious payload in the password field designed to alter the SQL query
                    logic.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-accent">4.</span>
                  <span>Submit the form.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-accent">5.</span>
                  <span>
                    The backend SQL query becomes logically true (1=1) and grants access without
                    verifying valid credentials.
                  </span>
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <Terminal className="h-6 w-6 text-accent" />
              Payload Used
            </h2>
            <div className="rounded-lg border border-operator-border bg-black p-6">
              <pre className="overflow-x-auto">
                <code className="font-mono text-sm text-foreground">'or'1'='1'--</code>
              </pre>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <AlertTriangle className="h-6 w-6 text-accent" />
              Impact
            </h2>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <p className="mb-4 leading-relaxed text-foreground">
                This vulnerability completely breaks authentication and results in:
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">Full account takeover</strong>
                  <span className="text-sm text-muted-foreground">
                    Attackers can log in as any user, including administrators.
                  </span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">Unauthorized access to all restricted pages</strong>
                  <span className="text-sm text-muted-foreground">
                    All user data, admin dashboards, and sensitive operations become accessible.
                  </span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">Compromise of confidential information</strong>
                  <span className="text-sm text-muted-foreground">
                    Personal data, internal content, and sensitive files are exposed.
                  </span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">Privilege escalation</strong>
                  <span className="text-sm text-muted-foreground">
                    If the first user returned by the query is an admin, the attacker immediately
                    gains full system control.
                  </span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">Regulatory and compliance failure</strong>
                  <span className="text-sm text-muted-foreground">
                    Violates OWASP ASVS, PCI-DSS, and general best practices for authentication and
                    input handling.
                  </span>
                </li>
              </ul>
              <p className="mt-6 font-bold text-destructive">
                This is a critical severity (High/Critical) vulnerability.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Remediation</h2>
            <div className="rounded-lg border border-operator-border bg-operator-surface p-6">
              <ol className="space-y-4 text-foreground">
                <li className="flex flex-col gap-2">
                  <strong className="text-accent">1. Use parameterized queries (prepared statements)</strong>
                  <span className="text-sm text-muted-foreground">
                    Never concatenate user input directly into SQL queries. Use bind parameters.
                  </span>
                </li>
                <li className="flex flex-col gap-2">
                  <strong className="text-accent">2. Implement strong server-side validation</strong>
                  <span className="text-sm text-muted-foreground">
                    Reject or sanitize unexpected characters before executing database queries.
                  </span>
                </li>
                <li className="flex flex-col gap-2">
                  <strong className="text-accent">3. Enforce secure password handling</strong>
                  <span className="text-sm text-muted-foreground">
                    Passwords should be hashed and never compared directly in SQL.
                  </span>
                </li>
                <li className="flex flex-col gap-2">
                  <strong className="text-accent">4. Apply least privilege to database accounts</strong>
                  <span className="text-sm text-muted-foreground">
                    The application user should have limited SQL permissions.
                  </span>
                </li>
                <li className="flex flex-col gap-2">
                  <strong className="text-accent">5. Implement WAF signatures / IDS detection</strong>
                  <span className="text-sm text-muted-foreground">
                    As a compensating control.
                  </span>
                </li>
              </ol>
            </div>
          </section>
        </div>

        <div className="mt-12 border-t border-operator-border pt-8">
          <Link to="/writeups">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Writeups
            </Button>
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default SqlInjectionLoginBypass;
