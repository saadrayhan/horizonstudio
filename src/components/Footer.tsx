const Footer = () => {
  const links = ["Work", "Process", "About", "Contact"];

  return (
    <footer
      className="py-7"
      style={{
        backgroundColor: "#0C140C",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <span className="font-body text-[13px] text-sage">
          [STUDIO NAME]
        </span>

        {/* Center links */}
        <div className="flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-body text-[12px] uppercase tracking-[0.1em] text-sage hover:text-cream transition-colors duration-150"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Right */}
        <span className="font-body text-[12px]" style={{ color: "#4A5A44" }}>
          © 2026 [STUDIO NAME]
        </span>
      </div>
    </footer>
  );
};

export default Footer;
