const Hero = () => {
  return (
    <section className="min-h-screen flex items-center" style={{ backgroundColor: "var(--studio-bg)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-20">
        {/* Left content */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <div
            className="flex items-center gap-3 mb-8"
          >
            <span
              className="block w-[2px] h-4"
              style={{ backgroundColor: "var(--studio-accent)" }}
            />
            <span
              className="font-sans-body text-[11px] uppercase tracking-[0.12em] font-medium"
              style={{ color: "var(--studio-accent)" }}
            >
              Design Studio — Est. 2026
            </span>
          </div>

          <h1
            className="font-serif-display text-[48px] sm:text-[64px] md:text-[80px] lg:text-[88px] leading-[1.05] mb-6"
            style={{ color: "var(--studio-text)" }}
          >
            Products built to think and feel right.
          </h1>

          <p
            className="font-sans-body text-[16px] md:text-[17px] leading-[1.7] max-w-[460px] mb-10"
            style={{ color: "var(--studio-muted)" }}
          >
            We're a design-first studio helping early-stage startups go from idea to shipped product. We design and build — end to end.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="font-sans-body text-[14px] font-medium px-6 py-3 rounded-[6px] transition-transform duration-150 active:scale-[0.98]"
              style={{ backgroundColor: "var(--studio-accent)", color: "#fff" }}
            >
              Start a project
            </a>
            <a
              href="#work"
              className="font-sans-body text-[14px] font-medium px-6 py-3 rounded-[6px] transition-transform duration-150 active:scale-[0.98] border"
              style={{ borderColor: "var(--studio-text)", color: "var(--studio-text)" }}
            >
              See our work
            </a>
          </div>
        </div>

        {/* Right floating mockup */}
        <div className="md:col-span-5 flex items-center justify-center">
          <div
            className="animate-float w-full max-w-[380px] rounded-2xl p-6"
            style={{
              backgroundColor: "#fff",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
            }}
          >
            {/* Fake app UI */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#E8E5E0" }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#E8E5E0" }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#E8E5E0" }} />
            </div>
            <div className="rounded-lg p-4 mb-4" style={{ backgroundColor: "var(--studio-accent-light)" }}>
              <div className="h-3 w-3/4 rounded mb-2" style={{ backgroundColor: "var(--studio-accent)", opacity: 0.3 }} />
              <div className="h-3 w-1/2 rounded" style={{ backgroundColor: "var(--studio-accent)", opacity: 0.2 }} />
            </div>
            <div className="space-y-3">
              <div className="h-10 rounded-lg" style={{ backgroundColor: "var(--studio-card-bg)" }} />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-20 rounded-lg" style={{ backgroundColor: "var(--studio-card-bg)" }} />
                <div className="h-20 rounded-lg" style={{ backgroundColor: "var(--studio-accent-light)" }} />
              </div>
              <div className="h-8 w-1/3 rounded-md" style={{ backgroundColor: "var(--studio-accent)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
