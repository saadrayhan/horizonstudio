const Footer = () => {
  const links = ["Work", "About", "Process", "Contact"];

  return (
    <footer
      className="px-6 md:px-16 py-6"
      style={{
        backgroundColor: "#000000",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <span className="font-geist text-[11px]" style={{ color: "#333330" }}>
          © 2026 [STUDIO NAME]
        </span>

        {/* Center links */}
        <div className="flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-geist text-[11px] uppercase tracking-[0.1em] transition-colors duration-150"
              style={{ color: "#333330" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#333330")}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Right */}
        <span className="font-geist text-[11px]" style={{ color: "#333330" }}>
          DHAKA · WORLDWIDE
        </span>
      </div>
    </footer>
  );
};

export default Footer;
