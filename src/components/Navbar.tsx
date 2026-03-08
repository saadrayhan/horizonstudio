import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

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
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 lg:px-12 transition-all duration-200"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid hsl(0 0% 90%)" : "1px solid transparent",
        }}
      >
        <Link to="/" className="text-sm font-semibold tracking-tight text-foreground">
          [STUDIO NAME]
        </Link>

        <div className="flex-1" />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`text-[13px] transition-colors duration-150 ${
                location.pathname.startsWith(l.href)
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block ml-8">
          <Link
            to="/contact"
            className="text-[13px] font-medium bg-foreground text-background px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(true)}>
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-background flex flex-col">
          <div className="flex items-center justify-between px-6 h-16">
            <Link to="/" className="text-sm font-semibold tracking-tight">
              [STUDIO NAME]
            </Link>
            <button onClick={() => setMenuOpen(false)} className="p-2">
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center px-6 gap-6">
            {[...navLinks, { label: "Contact", href: "/contact" }].map((l, i) => (
              <Link
                key={l.label}
                to={l.href}
                className="text-3xl font-semibold text-foreground animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
