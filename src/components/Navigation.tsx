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
    { label: "ABOUT", href: "#about" },
    { label: "PROCESS", href: "#process" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out"
      style={{
        backgroundColor: "#000000",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="w-full px-6 md:px-16 flex items-center justify-between h-[48px]">
        {/* Logo */}
        <a href="#" className="font-satoshi text-[14px] font-medium tracking-[0.02em]" style={{ color: "#FFFFFF" }}>
          [STUDIO NAME]
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-geist text-[11px] uppercase tracking-[0.1em] transition-colors duration-150"
              style={{ color: "#666660" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666660")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-6">
          <span className="font-geist text-[11px]" style={{ color: "#333330" }}>
            GMT+6
          </span>
          <a
            href="#contact"
            className="font-satoshi text-[13px] font-medium px-[18px] py-[8px] rounded transition-colors duration-150"
            style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F0F0E8")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
          >
            Start a project →
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: "#FFFFFF" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 top-[48px] flex flex-col px-6 pt-12"
          style={{ backgroundColor: "#000000" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-5 font-satoshi text-[16px] font-medium"
              style={{ color: "#FFFFFF", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-block mt-10 font-satoshi text-[14px] font-medium px-[28px] py-[10px] rounded w-fit"
            style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
          >
            Start a project →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
