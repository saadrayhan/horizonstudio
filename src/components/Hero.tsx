const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-end overflow-hidden" style={{ backgroundColor: "#000000" }}>
      {/* Play button — top right */}
      <button
        className="absolute top-[72px] right-16 font-geist text-[11px] tracking-[0.1em] transition-colors duration-150 hidden md:block"
        style={{ color: "#666660", background: "none", border: "none" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#666660")}
      >
        PLAY ▶
      </button>

      {/* Content — bottom left */}
      <div className="px-6 md:px-16 pb-12 md:pb-12">
        <h1
          className="hero-animate font-satoshi text-[40px] md:text-[72px] font-bold leading-[1.0]"
          style={{ color: "#FFFFFF", animationDelay: "0ms" }}
        >
          [STUDIO NAME]
        </h1>
        <p
          className="hero-animate font-satoshi text-[40px] md:text-[72px] font-light leading-[1.0]"
          style={{ color: "#666660", animationDelay: "100ms" }}
        >
          The Product Studio
        </p>

        {/* Divider + metadata */}
        <div className="hero-animate mt-6" style={{ animationDelay: "250ms" }}>
          <div className="w-[160px] md:w-[240px] h-px" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
          <span className="block mt-4 font-geist text-[11px] tracking-[0.1em]" style={{ color: "#333330" }}>
            EST. 2026 — DHAKA, BD
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
