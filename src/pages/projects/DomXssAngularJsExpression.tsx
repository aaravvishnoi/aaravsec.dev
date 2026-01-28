import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Terminal, Shield, AlertTriangle, Eye, Code, Zap } from "lucide-react";

const DomXssAngularJsExpression = () => {
  return (
    <Layout>
      <article className="container mx-auto px-4 py-16">
        <Link to="/writeups">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Writeups
          </Button>
        </Link>

        <header className="mb-12 border-b border-border pb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            DOM XSS in AngularJS Expression with Angle Brackets and Double Quotes HTML-Encoded
          </h1>
          <p className="text-lg text-muted-foreground">
            JavaScript execution via malicious AngularJS expression injection through unsanitized user input
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              DOM XSS
            </span>
            <span className="rounded border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              AngularJS
            </span>
            <span className="rounded border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              Expression Injection
            </span>
            <span className="rounded border border-destructive/50 bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive">
              High
            </span>
          </div>
        </header>

        <div className="space-y-12">
          {/* Severity and Impact */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              Severity and Impact
            </h2>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <p className="leading-relaxed">
                This vulnerability allows an attacker to execute JavaScript in the victim's browser by injecting malicious input into the search functionality. When user-controlled input is processed within an AngularJS template, an attacker can execute arbitrary AngularJS expressions inside double curly braces ({"{{ }}"}). This can be leveraged for:
              </p>
              <ul className="mt-4 space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  Session token theft
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  Credential harvesting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  UI redressing attacks against users who visit a crafted URL or submit malicious input
                </li>
              </ul>
            </div>
          </section>

          {/* Affected Component */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <Eye className="h-6 w-6 text-accent" />
              Affected Component
            </h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">Component</p>
                  <p className="font-medium">Client-side AngularJS template rendering logic</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Page</p>
                  <p className="font-medium">Blog Home Page</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Source</p>
                  <p className="font-mono text-sm">User-controlled input (search parameter)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Processing</p>
                  <p className="font-mono text-sm">AngularJS expression parsing ({"{{ }}"})</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground">Sink</p>
                  <p className="font-mono text-sm">AngularJS expression evaluator ($parse, interpolation engine)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Root Cause Analysis */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <Code className="h-6 w-6 text-accent" />
              Root Cause Analysis
            </h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="leading-relaxed mb-4">
                User-controlled input entered into the search bar is rendered within an AngularJS template without proper sanitization or restriction.
              </p>
              <p className="leading-relaxed">
                AngularJS evaluates expressions enclosed within double curly braces ({"{{ }}"}), allowing attackers to inject malicious expressions that can invoke JavaScript through AngularJS's expression evaluation mechanisms. This unsafe binding of untrusted input enables attackers to escape the intended text context and achieve DOM-based cross-site scripting.
              </p>
            </div>
          </section>

          {/* Steps to Reproduce */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <Terminal className="h-6 w-6 text-accent" />
              Steps to Reproduce
            </h2>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold">Step 1 — Navigate to the Vulnerable Page</h3>
                <p className="text-muted-foreground">
                  Access the Blog Home Page containing the search functionality.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold">Step 2 — Identify AngularJS Context</h3>
                <p className="text-muted-foreground">
                  Enter arbitrary text into the search box and observe that the input is processed within an AngularJS context (for example, within an element controlled by <code className="bg-muted px-1 rounded">ng-app</code>).
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold">Step 3 — Test for Expression Evaluation</h3>
                <p className="text-muted-foreground">
                  Test for AngularJS expression evaluation by submitting a simple arithmetic expression. If the application reflects the evaluated result (e.g., a calculated value instead of the raw input), expression injection is possible.
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold">Step 4 — Execute Malicious Expression</h3>
                <p className="text-muted-foreground">
                  Submit a malicious AngularJS expression capable of invoking JavaScript execution.
                </p>
              </div>
            </div>
          </section>

          {/* Proof of Exploitation */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <Zap className="h-6 w-6 text-accent" />
              Proof of Exploitation
            </h2>
            <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-6">
              <p className="leading-relaxed mb-4">
                By injecting a malicious AngularJS expression into the search input, the application evaluates attacker-controlled expressions during template rendering. This results in arbitrary JavaScript execution in the context of the vulnerable page, confirming the presence of a DOM-based cross-site scripting vulnerability.
              </p>
              <p className="font-medium text-green-500">
                ✓ This behavior confirms that attacker-controlled expressions are evaluated by AngularJS rather than treated as inert text.
              </p>
              <p className="mt-4 text-sm text-muted-foreground italic">
                Note: Specific exploit payloads have been intentionally omitted to prevent misuse.
              </p>
            </div>
          </section>

          {/* Attack Scenario */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <Shield className="h-6 w-6 text-accent" />
              Attack Scenario
            </h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="leading-relaxed">
                An attacker could craft a malicious URL containing an AngularJS expression payload in the search parameter. When a victim visits the link, the injected expression is evaluated by AngularJS during template rendering, resulting in JavaScript execution. This can be escalated to steal session tokens, harvest credentials, or perform actions on behalf of the victim.
              </p>
            </div>
          </section>

          {/* Remediation */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">Remediation</h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <ol className="space-y-4">
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">1. Avoid rendering user input within AngularJS templates</strong>
                  <span className="text-sm text-muted-foreground">Never bind untrusted data directly into AngularJS expressions.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">2. Use ng-bind instead of interpolation</strong>
                  <span className="text-sm text-muted-foreground">The ng-bind directive is safer than double curly brace interpolation for displaying user input.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">3. Implement strict Content Security Policy (CSP)</strong>
                  <span className="text-sm text-muted-foreground">A properly configured CSP can prevent inline script execution even if XSS occurs.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">4. Sanitize user input server-side</strong>
                  <span className="text-sm text-muted-foreground">Apply strict validation and encoding before reflecting user input in responses.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">5. Consider migrating from AngularJS</strong>
                  <span className="text-sm text-muted-foreground">AngularJS is end-of-life; migrate to modern frameworks with better security defaults.</span>
                </li>
              </ol>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">Conclusion</h2>
            <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
              <p className="leading-relaxed">
                The vulnerability arises from unsafe rendering of user-controlled input within AngularJS templates, enabling expression injection and subsequent JavaScript execution. Proper input handling, secure binding practices, and Content Security Policy implementation are required to prevent exploitation.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 border-t border-border pt-8">
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

export default DomXssAngularJsExpression;
