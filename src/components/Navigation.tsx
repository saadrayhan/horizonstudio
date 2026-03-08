import { useState, useEffect } from "react";
import { X } from "lucide-react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsHero(window.scrollY < window.innerHeight - 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: "Work", desc: "Our projects", href: "#work" },
    { label: "About", desc: "Who we are", href: "#about" },
    { label: "Services", desc: "What we do", href: "#services" },
    { label: "Contact", desc: "Get in touch", href: "#contact" },
  ];

  const textColor = isHero ? "#FFFFFF" : "#0A0A09";
  const pillBg = isHero ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.06)";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[52px] flex items-center px-6 md:px-16">
        {/* Logo */}
        <a
          href="#"
          className="font-satoshi text-[14px] font-medium tracking-[0.02em] transition-colors duration-200"
          style={{ color: textColor }}
        >
          [STUDIO NAME]
        </a>

        {/* Center pill */}
        <div className="flex-1 flex justify-center">
          <button
            onClick={() => setMenuOpen(true)}
            className="hidden md:flex items-center gap-3 rounded-full transition-colors duration-200 cursor-pointer"
            style={{ background: pillBg, padding: "8px 20px" }}
          >
            <span
              className="font-geist text-[11px] uppercase tracking-[0.1em] transition-colors duration-200"
              style={{ color: isHero ? "rgba(255,255,255,0.7)" : "#888880" }}
            >
              MENU
            </span>
            <div className="flex flex-col gap-[4px]">
              <div className="w-[16px] h-[1.5px] rounded-full transition-colors duration-200" style={{ backgroundColor: isHero ? "rgba(255,255,255,0.7)" : "#888880" }} />
              <div className="w-[16px] h-[1.5px] rounded-full transition-colors duration-200" style={{ backgroundColor: isHero ? "rgba(255,255,255,0.7)" : "#888880" }} />
            </div>
          </button>
        </div>

        {/* Right */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="font-satoshi text-[13px] font-medium transition-colors duration-150"
            style={{ color: textColor }}
          >
            CONTACT
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto flex flex-col gap-[4px] cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <div className="w-[20px] h-[1.5px] rounded-full" style={{ backgroundColor: textColor }} />
          <div className="w-[20px] h-[1.5px] rounded-full" style={{ backgroundColor: textColor }} />
        </button>
      </nav>

      {/* Full-screen menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#0A0A09" }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-6 md:right-16 cursor-pointer"
          >
            <X size={24} strokeWidth={1.5} color="#FFFFFF" />
          </button>
          <div className="flex flex-col items-center gap-2">
            {links.map((l, i) => (
              <div key={l.label} className="text-center">
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-satoshi text-[48px] md:text-[64px] font-bold transition-colors duration-150 block"
                  style={{ color: "#FFFFFF" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#888880")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  {l.label}
                </a>
                <span className="font-geist text-[11px] block mt-1" style={{ color: "#888880" }}>
                  {l.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
