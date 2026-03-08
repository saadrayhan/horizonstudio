import { Link } from "react-router-dom";

const footerCols = [
  {
    title: "Studio",
    links: [
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

const Footer = () => (
  <footer className="border-t border-border">
    {/* CTA band */}
    <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        <div>
          <p className="text-[13px] text-muted-foreground mb-3">Ready to start?</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] italic">
            Let's build something worth shipping.
          </h2>
        </div>
        <div className="md:text-right">
          <Link
            to="/contact"
            className="inline-flex text-[13px] font-medium bg-foreground text-primary-foreground px-7 py-3 rounded-full hover:bg-foreground/90 transition-colors"
          >
            Talk to us →
          </Link>
        </div>
      </div>
    </div>

    <div className="border-t border-border">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center">
              <span className="text-[10px] font-bold text-primary-foreground">S</span>
            </div>
            <span className="text-[14px] font-semibold text-foreground">[STUDIO]</span>
          </div>
          <p className="text-[13px] text-muted-foreground max-w-[260px] leading-relaxed">
            A design-first product studio. We help startups design, build, and ship products that solve real problems.
          </p>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">{col.title}</p>
            <div className="flex flex-col gap-2.5">
              {col.links.map((l) => (
                <Link key={l.label} to={l.href} className="text-[13px] text-foreground/70 hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="border-t border-border">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <p className="text-[11px] text-muted-foreground">© 2026 [STUDIO]. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">Dribbble</a>
          <a href="#" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
