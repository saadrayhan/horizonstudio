import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => (
  <footer className="section-dark">
    <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
      {/* CTA row */}
      <div className="py-20 md:py-28 border-b border-white/10">
        <p className="text-[11px] font-mono text-white/40 uppercase tracking-wider mb-4">Get in touch</p>
        <h2 className="font-serif text-4xl md:text-6xl text-white leading-[1.1] max-w-[600px]">
          Ready to build something great?
        </h2>
        <p className="text-white/50 mt-5 max-w-[420px] text-[15px] leading-relaxed">
          We help startups design, build, and ship products that solve real problems. Let's talk.
        </p>
        <Link
          to="/contact"
          className="inline-block mt-8 text-[13px] font-medium bg-white text-foreground px-7 py-3 rounded-full hover:bg-white/90 transition-colors"
        >
          Talk to us
        </Link>
      </div>

      {/* Links row */}
      <div className="py-10 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-[15px] font-semibold text-white">[STUDIO NAME]</p>
          <p className="text-[13px] text-white/40 mt-2 max-w-[280px]">
            A design-first product studio based in Dhaka, working worldwide.
          </p>
        </div>
        <div className="flex gap-14">
          <div>
            <p className="text-[11px] font-mono text-white/30 uppercase tracking-wider mb-3">Pages</p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((l) => (
                <Link key={l.label} to={l.href} className="text-[13px] text-white/50 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-mono text-white/30 uppercase tracking-wider mb-3">Social</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-[13px] text-white/50 hover:text-white transition-colors">Twitter / X</a>
              <a href="#" className="text-[13px] text-white/50 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-[13px] text-white/50 hover:text-white transition-colors">Dribbble</a>
              <a href="#" className="text-[13px] text-white/50 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <p className="text-[11px] text-white/30">© 2026 [STUDIO NAME]. All rights reserved.</p>
        <p className="text-[11px] font-mono text-white/30">Dhaka, Bangladesh · Worldwide</p>
      </div>
    </div>
  </footer>
);

export default Footer;
