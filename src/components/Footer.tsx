const Footer = () => {
  return (
    <footer className="py-14 md:py-20 bg-studio-text">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding */}
        <div>
          <span className="font-sans-body text-[14px] font-semibold tracking-[0.06em] uppercase text-studio-cream">
            [STUDIO NAME]
          </span>
          <p className="font-sans-body text-[13px] mt-3 text-studio-muted">
            Design-first. Built to last.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8">
          {["Work", "About", "Process", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-sans-body text-[13px] tracking-[0.04em] link-underline text-studio-cream/80 hover:text-studio-cream transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="md:text-right">
          <p className="font-sans-body text-[12px] text-studio-muted">
            © 2026 [STUDIO NAME]. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
