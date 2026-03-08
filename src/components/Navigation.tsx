import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#philosophy" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-150"
      style={{
        backgroundColor: scrolled ? "var(--studio-bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--studio-border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-sans-body text-[15px] font-medium" style={{ color: "var(--studio-text)" }}>
          [STUDIO NAME]
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="link-underline font-sans-body text-[14px]"
              style={{ color: "var(--studio-text)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-sans-body text-[14px] font-medium px-5 py-2 rounded-[6px] transition-transform duration-150 active:scale-[0.98]"
            style={{ backgroundColor: "var(--studio-accent)", color: "#fff" }}
          >
            Start a project
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: "var(--studio-text)" }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 pt-2" style={{ backgroundColor: "var(--studio-bg)" }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-sans-body text-[15px]"
              style={{ color: "var(--studio-text)", borderBottom: "1px solid var(--studio-border)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-block mt-4 font-sans-body text-[14px] font-medium px-5 py-2.5 rounded-[6px]"
            style={{ backgroundColor: "var(--studio-accent)", color: "#fff" }}
          >
            Start a project
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
