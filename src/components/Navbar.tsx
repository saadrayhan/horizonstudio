import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const Navbar = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isDark = variant === "dark" && !scrolled;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 lg:px-12 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "hsla(0, 0%, 100%, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid hsl(40 5% 90%)" : "1px solid transparent",
        }}
      >
        <Link to="/" className={`text-[15px] font-semibold tracking-tight transition-colors duration-300 ${isDark ? "text-white" : "text-foreground"}`}>
          [STUDIO NAME]
        </Link>

        <div className="flex-1" />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`text-[13px] transition-colors duration-200 ${
                location.pathname.startsWith(l.href)
                  ? isDark ? "text-white font-medium" : "text-foreground font-medium"
                  : isDark ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block ml-8">
          <Link
            to="/contact"
            className={`text-[13px] font-medium px-5 py-2 rounded-full transition-all duration-200 ${
              isDark
                ? "bg-white text-foreground hover:bg-white/90"
                : "bg-foreground text-primary-foreground hover:bg-foreground/90"
            }`}
          >
            Talk to us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 transition-colors ${isDark ? "text-white" : "text-foreground"}`}
          onClick={() => setMenuOpen(true)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="6" x2="17" y2="6" />
            <line x1="3" y1="14" x2="17" y2="14" />
          </svg>
        </button>
      </nav>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-[100] section-dark transition-all duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16">
          <Link to="/" className="text-[15px] font-semibold tracking-tight text-white">
            [STUDIO NAME]
          </Link>
          <button onClick={() => setMenuOpen(false)} className="p-2 text-white/60 hover:text-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-center h-[calc(100%-64px)] px-8 gap-1">
          {[...navLinks, { label: "Contact", href: "/contact" }].map((l, i) => (
            <Link
              key={l.label}
              to={l.href}
              className="text-4xl font-serif text-white py-4 border-b border-white/10 hover:text-white/60 transition-colors animate-slide-in"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
