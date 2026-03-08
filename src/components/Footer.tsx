import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => (
  <footer className="border-t border-border">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div>
          <Link to="/" className="text-[14px] font-semibold tracking-tight text-foreground flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[hsl(258,90%,66%)] to-[hsl(210,100%,60%)] flex items-center justify-center">
              <span className="text-[10px] font-bold text-primary-foreground">S</span>
            </div>
            [STUDIO NAME]
          </Link>
          <p className="text-[13px] text-muted-foreground mt-4 max-w-[300px] leading-relaxed">
            A design-first product studio. We design and build products that ship.
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">Navigate</p>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map((l) => (
                <Link key={l.label} to={l.href} className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">Connect</p>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">Twitter / X</a>
              <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
              <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">Dribbble</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-12 pt-6 border-t border-border">
        <p className="text-[12px] text-muted-foreground">© 2026 [STUDIO NAME]. All rights reserved.</p>
        <p className="text-[12px] font-mono text-muted-foreground mt-2 md:mt-0">Dhaka, Bangladesh · Remote worldwide</p>
      </div>
    </div>
  </footer>
);

export default Footer;
