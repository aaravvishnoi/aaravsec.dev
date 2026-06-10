import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Terminal, Shield, AlertTriangle, Eye, Code, Zap } from "lucide-react";

const DomXssJquerySelectorSink = () => {
  usePageMeta({ title: "DOM XSS in jQuery Selector Sink Using a hashchange Event", description: "JavaScript execution via malicious input injected into a jQuery selector through window.location.hash", path: "/writeups/dom-xss-jquery-selector-sink" });

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
            DOM XSS in jQuery Selector Sink Using a hashchange Event
          </h1>
          <p className="text-lg text-muted-foreground">
            JavaScript execution via malicious input injected into a jQuery selector through window.location.hash
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="tag">DOM XSS</span>
            <span className="tag">jQuery</span>
            <span className="tag">hashchange</span>
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
                This vulnerability allows an attacker to execute JavaScript in a victim's browser by injecting malicious input into a jQuery selector. Successful exploitation enables DOM manipulation and JavaScript execution in the context of the vulnerable page, which can be leveraged for:
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
                  UI redressing attacks against users who visit a crafted URL
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
                  <p className="text-sm text-muted-foreground">Page</p>
                  <p className="font-medium">Blog Home Page</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Source</p>
                  <p className="font-mono text-sm">window.location.hash</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Sink</p>
                  <p className="font-mono text-sm">jQuery selector (:contains())</p>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-2">Vulnerable JavaScript:</p>
                <div className="rounded border border-border bg-black p-4 overflow-x-auto">
                  <pre className="font-mono text-sm text-foreground">
{`var post = $('section.blog-list h2:contains(' +
    decodeURIComponent(window.location.hash.slice(1)) + ')');`}
                  </pre>
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
                User-controlled data from <code className="bg-muted px-1 rounded">window.location.hash</code> is passed directly into a jQuery selector without sanitization or validation.
              </p>
              <p className="leading-relaxed">
                When special characters are supplied, jQuery interprets the input as HTML rather than treating it as a plain text comparison. This results in the creation of detached DOM elements that are not initially part of the document tree. These elements can later be attached to the DOM, enabling attacker-controlled DOM injection and DOM-based cross-site scripting.
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
                <div className="rounded border border-border bg-black p-4">
                  <code className="font-mono text-sm text-foreground break-all">
                    https://0a7e00610476429880a5265a004300d7.web-security-academy.net
                  </code>
                </div>
              </div>

              {/* Step 2 */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold">Step 2 — Supply a Crafted Hash Value</h3>
                <p className="mb-4 text-muted-foreground">
                  Supply a crafted hash value in the URL containing HTML markup:
                </p>
                <div className="rounded border border-border bg-black p-4 overflow-x-auto">
                  <pre className="font-mono text-sm text-foreground">
{`<iframe src="https://attacklab.net/#"
  onload="this.src+='<img src=x onerror=print()>'"></iframe>`}
                  </pre>
                </div>
              </div>

              {/* Step 3 */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold">Step 3 — Observe the Injection</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    The page processes the input through <code className="bg-muted px-1 rounded">location.hash</code> and passes it without sanitization to a jQuery selector.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    jQuery treats the supplied value as an HTML snippet, resulting in injected DOM elements.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    The injected content renders a copy of the page and triggers JavaScript execution (e.g., the browser print dialog), demonstrating attacker-controlled DOM manipulation.
                  </li>
                </ul>
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
                By injecting HTML into the selector argument, jQuery creates detached DOM nodes instead of performing a string comparison. Once these nodes are attached to the document, the injected elements can execute JavaScript through event handlers or malicious attributes, demonstrating arbitrary DOM injection and script execution.
              </p>
              <p className="font-medium text-green-500">
                ✓ This behavior confirms that attacker-controlled input is interpreted as HTML rather than treated as inert text.
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
                An attacker could send a crafted link containing a malicious hash payload to a victim. When the victim visits the link, the injected content is processed by the page's JavaScript logic, resulting in attacker-controlled DOM manipulation. This can be escalated to execute malicious scripts, steal session data, or perform actions on behalf of the victim without user interaction.
              </p>
            </div>
          </section>

          {/* Remediation */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">Remediation</h2>
            <div className="rounded-lg border border-border bg-card p-6">
              <ol className="space-y-4">
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">1. Avoid using user-controlled input inside jQuery selectors</strong>
                  <span className="text-sm text-muted-foreground">Never pass untrusted data into selector-based APIs.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">2. Do not pass untrusted data into :contains()</strong>
                  <span className="text-sm text-muted-foreground">The :contains() pseudo-selector can interpret input as HTML.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">3. Treat hash values as untrusted input</strong>
                  <span className="text-sm text-muted-foreground">Apply strict validation and sanitization to all URL fragment data.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">4. Use safer DOM APIs</strong>
                  <span className="text-sm text-muted-foreground">Where possible, use DOM APIs that do not interpret input as HTML.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-accent">5. Refactor logic</strong>
                  <span className="text-sm text-muted-foreground">Compare text values without dynamic selector construction.</span>
                </li>
              </ol>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">Conclusion</h2>
            <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
              <p className="leading-relaxed">
                The vulnerability arises from unsafe use of attacker-controlled input within a jQuery selector, leading to unintended DOM creation and potential JavaScript execution. Proper input handling and safer DOM manipulation practices are required to prevent exploitation.
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

export default DomXssJquerySelectorSink;
