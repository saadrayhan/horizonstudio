const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Atmospheric gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(196,163,90,0.07), transparent)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 50% 80%, rgba(30,60,30,0.6), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[700px]">
        {/* Pill badge */}
        <div
          className="hero-animate inline-block font-body text-[11px] uppercase tracking-[0.1em] font-medium px-3.5 py-1.5 rounded-[20px] text-gold"
          style={{
            backgroundColor: "rgba(196,163,90,0.12)",
            animationDelay: "0ms",
          }}
        >
          Design-first product studio
        </div>

        {/* Headline */}
        <h1
          className="hero-animate font-display text-[44px] md:text-[64px] lg:text-[80px] leading-[1.08] text-cream mt-4"
          style={{ animationDelay: "100ms" }}
        >
          We build products founders are proud of.
        </h1>

        {/* Subline */}
        <p
          className="hero-animate font-body text-[16px] md:text-[18px] leading-[1.65] text-sage max-w-[460px] mx-auto mt-5"
          style={{ animationDelay: "200ms" }}
        >
          A design-first studio for early-stage startups. We handle design and development — end to end, with craft and honesty.
        </p>

        {/* CTAs */}
        <div
          className="hero-animate flex items-center justify-center gap-3 mt-9"
          style={{ animationDelay: "340ms" }}
        >
          <a
            href="#contact"
            className="font-body text-[14px] font-medium px-6 py-3 rounded-lg transition-opacity duration-150 hover:opacity-[0.88] active:scale-[0.97]"
            style={{ backgroundColor: "#C4A35A", color: "#141F14" }}
          >
            Start a project →
          </a>
          <a
            href="#work"
            className="font-body text-[14px] px-6 py-3 rounded-lg text-cream transition-opacity duration-150 hover:opacity-[0.85]"
            style={{ border: "1px solid rgba(245,242,235,0.2)" }}
          >
            See our work
          </a>
        </div>

        {/* Trusted by */}
        <div
          className="hero-animate mt-[72px]"
          style={{ animationDelay: "500ms" }}
        >
          <div
            className="inline-flex items-center gap-8 px-8 py-[18px] rounded-full"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span className="font-body text-[11px] uppercase tracking-[0.1em] text-sage">
              Trusted by founders in
            </span>
            <div className="flex items-center gap-8">
              <div className="w-[80px] h-[20px] rounded" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />
              <div className="w-[80px] h-[20px] rounded" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />
              <div className="hidden sm:block w-[80px] h-[20px] rounded" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
