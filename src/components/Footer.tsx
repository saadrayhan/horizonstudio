const Footer = () => {
  return (
    <footer className="py-12 md:py-16" style={{ backgroundColor: "var(--studio-text)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding */}
        <div>
          <span className="font-sans-body text-[15px] font-medium" style={{ color: "var(--studio-bg)" }}>
            [STUDIO NAME]
          </span>
          <p className="font-sans-body text-[13px] mt-2" style={{ color: "var(--studio-muted)" }}>
            Design-first. Built to last.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8">
          {["Work", "About", "Process", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-sans-body text-[14px] link-underline"
              style={{ color: "var(--studio-bg)" }}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="md:text-right">
          <p className="font-sans-body text-[13px]" style={{ color: "var(--studio-muted)" }}>
            © 2026 [STUDIO NAME]. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
