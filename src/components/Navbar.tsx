import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-6 lg:px-10 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "hsla(225, 6%, 4%, 0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid hsl(225 6% 12%)" : "1px solid transparent",
        }}
      >
        <Link to="/" className="text-[14px] font-semibold tracking-tight text-foreground flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[hsl(258,90%,66%)] to-[hsl(210,100%,60%)] flex items-center justify-center">
            <span className="text-[10px] font-bold text-primary-foreground">S</span>
          </div>
          [STUDIO NAME]
        </Link>

        <div className="flex-1" />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`text-[13px] px-3 py-1.5 rounded-md transition-colors duration-150 ${
                location.pathname.startsWith(l.href)
                  ? "text-foreground bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block ml-4">
          <Link
            to="/contact"
            className="text-[13px] font-medium text-primary-foreground bg-foreground/90 px-4 py-1.5 rounded-md hover:bg-foreground transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 text-muted-foreground hover:text-foreground" onClick={() => setMenuOpen(true)}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="2" y1="5" x2="16" y2="5" />
            <line x1="2" y1="13" x2="16" y2="13" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-background transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-14">
          <Link to="/" className="text-[14px] font-semibold tracking-tight text-foreground flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[hsl(258,90%,66%)] to-[hsl(210,100%,60%)] flex items-center justify-center">
              <span className="text-[10px] font-bold text-primary-foreground">S</span>
            </div>
            [STUDIO NAME]
          </Link>
          <button onClick={() => setMenuOpen(false)} className="p-2 text-muted-foreground hover:text-foreground">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="3" x2="15" y2="15" />
              <line x1="15" y1="3" x2="3" y2="15" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-center h-[calc(100%-56px)] px-8 gap-2">
          {[...navLinks, { label: "Contact", href: "/contact" }].map((l, i) => (
            <Link
              key={l.label}
              to={l.href}
              className="text-3xl font-semibold text-foreground py-3 animate-slide-in border-b border-border hover:text-muted-foreground transition-colors"
              style={{ animationDelay: `${i * 60}ms` }}
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
