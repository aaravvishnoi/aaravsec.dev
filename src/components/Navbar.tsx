import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { name: "Findings", path: "/writeups" },
  { name: "Tooling", path: "/portfolio" },
  { name: "Notes", path: "/notes" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    if (path === "/writeups")
      return pathname.startsWith("/writeups") || pathname.startsWith("/portfolio/");
    if (path === "/portfolio") return pathname === "/portfolio";
    return pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors hover:text-foreground ${
                  isActive(link.path) ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            className="rounded-md p-1 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm transition-colors hover:text-foreground ${
                    isActive(link.path) ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
