const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#1A1A18" }}
    >
      {/* Content */}
      <div className="text-center px-6 md:px-16 max-w-[900px]">
        <h1
          className="hero-animate font-satoshi text-[48px] md:text-[96px] font-bold leading-[1.0]"
          style={{ color: "#FFFFFF", animationDelay: "0ms" }}
        >
          Building products worth being proud of.
        </h1>
        <p
          className="hero-animate font-geist text-[12px] uppercase tracking-[0.1em] mt-8"
          style={{ color: "#888880", animationDelay: "150ms" }}
        >
          EST. 2026 · DHAKA, BD · WORLDWIDE
        </p>
      </div>

      {/* Bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      />
    </section>
  );
};

export default Hero;
