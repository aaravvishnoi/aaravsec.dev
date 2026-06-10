import Layout from "@/components/Layout";
import { Mail, Github, Linkedin } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const EMAIL = "aaravvishnoi764@gmail.com";

const channels = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Github, label: "GitHub", value: "github.com/aaravvishnoi", href: "https://github.com/aaravvishnoi" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/aarav-vishnoi", href: "https://linkedin.com/in/aarav-vishnoi" },
];

const Contact = () => {
  usePageMeta({
    title: "Contact",
    description: "Get in touch with Aarav Vishnoi about offensive security work, internships, or collaboration.",
    path: "/contact",
  });

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow mb-3">Get in touch</p>
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight">Contact</h1>
          <p className="mb-12 text-lg text-muted-foreground">
            For security work, internships, or collaboration, email is best — the other
            channels work too.
          </p>

          <div className="space-y-4">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <Icon className="h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h2 className="font-display text-sm font-semibold">{label}</h2>
                  <span className="font-mono text-sm text-muted-foreground">{value}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-primary/25 bg-primary/[0.04] p-6">
            <h2 className="mb-2 font-display font-semibold">Response time</h2>
            <p className="text-sm text-muted-foreground">
              I usually reply within a day or two. For anything time-sensitive, note the
              priority in the subject line.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
