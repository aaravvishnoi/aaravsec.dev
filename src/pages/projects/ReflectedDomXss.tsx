import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Terminal, Shield, AlertTriangle, Eye, Code, Zap } from "lucide-react";

const ReflectedDomXss = () => {
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
            Reflected DOM XSS
          </h1>
          <p className="text-lg text-muted-foreground">
            JavaScript execution via server-reflected data processed insecurely by client-side eval()
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              DOM XSS
            </span>
            <span className="rounded border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              Reflected
            </span>
            <span className="rounded border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              eval() Sink
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
                This vulnerability allows an attacker to execute arbitrary JavaScript in a victim's browser by influencing data that is reflected by the server and subsequently processed by client-side JavaScript. Although the server reflects the input as part of the response, the exploitation occurs entirely in the browser when the reflected data is handled insecurely. Successful exploitation can lead to:
              </p>
              <ul className="mt-4 space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  Session theft
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  Credential harvesting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  UI manipulation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  Other client-side attacks
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
                  <p className="font-medium">Client-side JavaScript processing server responses</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Page</p>
                  <p className="font-medium">Blog Home Page</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Source</p>
                  <p className="font-mono text-sm">XMLHttpRequest.responseText</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Sink</p>
                  <p className="font-mono text-sm">eval()</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground">Vulnerable JavaScript</p>
                  <div className="mt-2 rounded bg-muted p-3 font-mono text-sm">
                    eval('var searchResultsObj = ' + this.responseText);
                  </div>
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
                User-influenced data returned from the server is directly passed into the JavaScript <code className="bg-muted px-1 rounded">eval()</code> function without proper validation or parsing.
              </p>
              <p className="leading-relaxed">
                Although the application attempts to escape certain characters before evaluation, this approach is fundamentally unsafe, as <code className="bg-muted px-1 rounded">eval()</code> interprets the input as executable JavaScript rather than inert data. This results in attacker-controlled content being executed in the browser context, leading to a reflected DOM-based cross-site scripting vulnerability.
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
                <h3 className="mb-4 text-lg font-semibold">Step 2 — Submit a Search Query</h3>
                <p className="text-muted-foreground">
                  Submit a search query and observe that the server reflects the input within the response processed by client-side JavaScript.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold">Step 3 — Identify eval() Processing</h3>
                <p className="text-muted-foreground">
                  The reflected response is handled by a script that evaluates the response content as JavaScript using <code className="bg-muted px-1 rounded">eval()</code>.
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold">Step 4 — Manipulate Reflected Input</h3>
                <p className="text-muted-foreground">
                  By manipulating the reflected input, an attacker can cause malicious JavaScript to be executed during client-side processing.
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
                By influencing the data reflected in the server response, an attacker can inject content that is executed by the client-side <code className="bg-muted px-1 rounded">eval()</code> call. When the page processes the response, the injected content is interpreted as JavaScript and executed in the browser, confirming arbitrary JavaScript execution without requiring additional user interaction beyond loading the crafted request.
              </p>
              <p className="font-medium text-green-500">
                ✓ This confirms that attacker-controlled content in the server response is executed as JavaScript code.
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
                An attacker crafts a malicious URL containing a payload designed to be reflected in the server response. When a victim clicks the link, the server returns a response containing the attacker's input. The client-side JavaScript then passes this response to <code className="bg-muted px-1 rounded">eval()</code>, executing the attacker's JavaScript in the victim's browser context. This can be leveraged to steal session tokens, perform actions on behalf of the user, or redirect to phishing pages.
              </p>
            </div>
          </section>

          {/* Remediation */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">Remediation</h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <ol className="space-y-4">
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">1. Never use eval() with untrusted data</strong>
                  <span className="text-sm text-muted-foreground">Replace eval() with JSON.parse() for parsing JSON responses.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">2. Use JSON.parse() for data parsing</strong>
                  <span className="text-sm text-muted-foreground">JSON.parse() treats input as data, not executable code, preventing code injection.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">3. Validate server responses</strong>
                  <span className="text-sm text-muted-foreground">Ensure responses conform to expected structure before processing.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">4. Implement Content Security Policy (CSP)</strong>
                  <span className="text-sm text-muted-foreground">A strict CSP can prevent inline script execution and mitigate XSS impact.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">5. Encode output appropriately</strong>
                  <span className="text-sm text-muted-foreground">Server-side encoding alone is insufficient; avoid dangerous sinks entirely.</span>
                </li>
              </ol>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">Conclusion</h2>
            <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
              <p className="leading-relaxed">
                This reflected DOM XSS vulnerability demonstrates the critical danger of using eval() to process server responses containing user-influenced data. The combination of server-side reflection and client-side eval() creates a powerful attack vector. Remediation requires replacing eval() with safe parsing methods like JSON.parse() and implementing defense-in-depth through CSP.
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

export default ReflectedDomXss;
