import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "WORK", href: "#work" },
    { label: "PROCESS", href: "#philosophy" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out"
      style={{
        backgroundColor: scrolled ? "#0F180F" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="#" className="font-body text-[15px] font-medium text-cream">
          [STUDIO NAME]
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-[11px] tracking-[0.12em] font-medium text-sage hover:text-cream transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="font-body text-[13px] font-medium px-5 py-2.5 rounded-[6px] transition-opacity duration-150 hover:opacity-[0.88] active:scale-[0.97]"
            style={{ backgroundColor: "#C4A35A", color: "#141F14" }}
          >
            Start a project
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 top-[68px] flex flex-col px-8 pt-8"
          style={{ backgroundColor: "#0F180F" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-5 font-body text-[14px] tracking-[0.1em] font-medium text-cream"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-block mt-8 font-body text-[13px] font-medium px-5 py-3 rounded-[6px] w-fit"
            style={{ backgroundColor: "#C4A35A", color: "#141F14" }}
          >
            Start a project
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
