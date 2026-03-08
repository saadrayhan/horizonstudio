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
    <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div>
          <Link to="/" className="text-sm font-semibold tracking-tight text-foreground">
            [STUDIO NAME]
          </Link>
          <p className="text-[13px] text-muted-foreground mt-3 max-w-[280px]">
            A design-first product studio. We design and build products founders are proud of.
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-4">Pages</p>
            <div className="flex flex-col gap-3">
              {footerLinks.map((l) => (
                <Link key={l.label} to={l.href} className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">Dribbble</a>
              <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-16 pt-8 border-t border-border">
        <p className="text-[12px] text-muted-foreground">© 2026 [STUDIO NAME]. All rights reserved.</p>
        <p className="text-[12px] text-muted-foreground mt-2 md:mt-0">Dhaka, Bangladesh · Worldwide</p>
      </div>
    </div>
  </footer>
);

export default Footer;
