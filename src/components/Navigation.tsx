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
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#philosophy" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-studio-bg/90 backdrop-blur-md border-b border-studio-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
        {/* Logo - centered on desktop like Adaline */}
        <a href="#" className="font-sans-body text-[13px] font-semibold tracking-[0.08em] uppercase text-studio-text">
          [STUDIO NAME]
        </a>

        {/* Desktop links left */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="link-underline font-sans-body text-[12px] tracking-[0.1em] font-medium text-studio-text"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="font-sans-body text-[12px] tracking-[0.08em] font-semibold uppercase px-6 py-3 rounded-full transition-all duration-200 active:scale-[0.97] bg-studio-green text-studio-cream hover:opacity-90"
          >
            Start a project
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-studio-text"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-8 pt-2 bg-studio-bg">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-4 font-sans-body text-[13px] tracking-[0.1em] font-medium text-studio-text border-b border-studio-border"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-block mt-6 font-sans-body text-[12px] tracking-[0.08em] font-semibold uppercase px-6 py-3 rounded-full bg-studio-green text-studio-cream"
          >
            Start a project
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
