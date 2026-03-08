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
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
              <span className="text-[11px] font-bold text-primary-foreground">S</span>
            </div>
            <span className="text-[15px] font-semibold text-foreground tracking-tight hidden sm:block">[STUDIO]</span>
          </Link>

          {/* Desktop nav — pill style */}
          <div className="hidden md:flex items-center gap-1 bg-secondary/80 backdrop-blur-sm rounded-full px-1.5 py-1 border border-border">
            {navLinks.map((l) => {
              const active = location.pathname.startsWith(l.href);
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  className={`text-[13px] px-4 py-1.5 rounded-full transition-all duration-200 ${
                    active
                      ? "bg-foreground text-primary-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-flex text-[13px] font-medium bg-foreground text-primary-foreground px-5 py-2 rounded-full hover:bg-foreground/90 transition-colors"
          >
            Talk to us
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="7" x2="19" y2="7" />
              <line x1="3" y1="15" x2="19" y2="15" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-background transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-[72px]">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
              <span className="text-[11px] font-bold text-primary-foreground">S</span>
            </div>
          </Link>
          <button onClick={() => setMenuOpen(false)} className="p-2 text-foreground">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="5" y1="5" x2="17" y2="17" />
              <line x1="17" y1="5" x2="5" y2="17" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col px-8 pt-8 gap-1">
          {[...navLinks, { label: "Contact", href: "/contact" }].map((l, i) => (
            <Link
              key={l.label}
              to={l.href}
              className="text-[32px] font-serif text-foreground py-4 border-b border-border hover:text-muted-foreground transition-colors animate-slide-in"
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
