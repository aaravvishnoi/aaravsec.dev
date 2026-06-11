import Layout from "@/components/Layout";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const EMAIL = "aaravvishnoi764@gmail.com";

const channels = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Github, label: "GitHub", value: "github.com/aaravvishnoi", href: "https://github.com/aaravvishnoi" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/aarav-vishnoi", href: "https://linkedin.com/in/aarav-vishnoi" },
];

const Contact = () => {
  usePageMeta({ title: "Contact", description: "Get in touch with Aarav Vishnoi about security work, internships, or collaboration.", path: "/contact" });

  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-xl">
          <p className="eyebrow mb-4">Get in touch</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Contact</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            For security work, internships, or collaboration — email is best.
          </p>

          <div className="mt-12 divide-y divide-border border-t border-border">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 py-5"
              >
                <Icon className="h-[18px] w-[18px] text-dim transition-colors group-hover:text-foreground" />
                <span className="w-20 text-sm text-muted-foreground">{label}</span>
                <span className="flex-1 font-mono text-sm text-foreground transition-colors group-hover:text-[hsl(var(--brand))]">{value}</span>
                <ArrowUpRight className="h-4 w-4 text-dim transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>

          <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
            I usually reply within a day or two. For anything time-sensitive, note the
            priority in the subject line.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
