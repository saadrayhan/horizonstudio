import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHero, setIsHero] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setIsHero(window.scrollY < window.innerHeight - 100);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: "Work", desc: "Selected projects", href: "#work" },
    { label: "About", desc: "Who we are", href: "#about" },
    { label: "Services", desc: "What we do", href: "#services" },
    { label: "Contact", desc: "Get in touch", href: "#contact" },
  ];

  const textColor = isHero ? "#FFFFFF" : "#0A0A09";
  const pillBg = isHero ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)";
  const pillText = isHero ? "rgba(255,255,255,0.6)" : "#888880";
  const lineColor = isHero ? "rgba(255,255,255,0.5)" : "#888880";

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[60]"
        style={{
          width: `${scrollProgress * 100}%`,
          backgroundColor: "#D43B1A",
          transition: "width 0.1s linear",
        }}
      />

      <nav className="fixed top-[2px] left-0 right-0 z-50 h-[52px] flex items-center px-6 md:px-12 lg:px-16">
        {/* Logo */}
        <a
          href="#"
          className="font-satoshi text-[14px] font-bold tracking-[0.04em] uppercase transition-colors duration-300"
          style={{ color: textColor }}
        >
          [STUDIO NAME]
        </a>

        {/* Center pill */}
        <div className="flex-1 flex justify-center">
          <button
            onClick={() => setMenuOpen(true)}
            className="hidden md:flex items-center gap-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-[0.97] active:scale-[0.94]"
            style={{ background: pillBg, padding: "8px 24px" }}
          >
            <span
              className="font-geist text-[11px] uppercase tracking-[0.12em] transition-colors duration-300"
              style={{ color: pillText }}
            >
              MENU
            </span>
            <div className="flex flex-col gap-[3px]">
              <div className="w-[16px] h-[1.5px] rounded-full transition-colors duration-300" style={{ backgroundColor: lineColor }} />
              <div className="w-[16px] h-[1.5px] rounded-full transition-colors duration-300" style={{ backgroundColor: lineColor }} />
            </div>
          </button>
        </div>

        {/* Right contact */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="font-satoshi text-[12px] font-medium uppercase tracking-[0.08em] transition-colors duration-200"
            style={{ color: textColor }}
          >
            CONTACT
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto flex flex-col gap-[3px] cursor-pointer p-2"
          onClick={() => setMenuOpen(true)}
        >
          <div className="w-[20px] h-[1.5px] rounded-full transition-colors duration-300" style={{ backgroundColor: textColor }} />
          <div className="w-[20px] h-[1.5px] rounded-full transition-colors duration-300" style={{ backgroundColor: textColor }} />
        </button>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        className="fixed inset-0 z-[100] flex flex-col"
        style={{
          backgroundColor: "#0A0A09",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Menu header */}
        <div className="flex items-center justify-between px-6 md:px-16 h-[52px]">
          <span className="font-satoshi text-[14px] font-bold tracking-[0.04em] uppercase" style={{ color: "#FFFFFF" }}>
            [STUDIO NAME]
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:scale-[0.9] transition-transform duration-200 p-2"
          >
            <X size={24} strokeWidth={1.5} color="#FFFFFF" />
          </button>
        </div>

        {/* Menu content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-start gap-1">
            {links.map((l, i) => (
              <div
                key={l.label}
                className={menuOpen ? "menu-link-animate" : ""}
                style={{ animationDelay: `${i * 80 + 100}ms` }}
              >
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-satoshi text-[56px] md:text-[80px] font-bold leading-[1.05] block transition-all duration-200"
                  style={{ color: "#FFFFFF" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#666660";
                    e.currentTarget.style.transform = "translateX(12px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {l.label}
                </a>
                <span className="font-geist text-[11px] uppercase tracking-[0.1em] block mt-1 mb-4" style={{ color: "#666660" }}>
                  {l.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Menu footer */}
        <div className="px-6 md:px-16 py-6 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <span className="font-geist text-[11px]" style={{ color: "#444440" }}>© 2026 [STUDIO NAME]</span>
          <span className="font-geist text-[11px]" style={{ color: "#444440" }}>DHAKA, BD</span>
        </div>
      </div>
    </>
  );
};

export default Navigation;
