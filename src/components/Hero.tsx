import { useEffect, useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ backgroundColor: "#1A1A18" }}
    >
      {/* Ambient light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.03), transparent)",
        }}
      />

      {/* Top right decorative */}
      <div
        className="absolute top-6 right-6 md:right-16"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.5s ease 1.2s",
        }}
      >
        <span className="font-geist text-[11px] uppercase tracking-[0.1em]" style={{ color: "#444440" }}>
          DHAKA, BD — GMT+6
        </span>
      </div>

      {/* Main content — massive headline, bottom-left like flabbergast */}
      <div className="px-6 md:px-12 lg:px-16 pb-12 md:pb-16 max-w-[1400px]">
        {/* Small descriptor */}
        <div
          className={loaded ? "hero-blur-in" : "opacity-0"}
          style={{ animationDelay: "200ms" }}
        >
          <span
            className="font-geist text-[11px] uppercase tracking-[0.14em] block mb-6"
            style={{ color: "#666660" }}
          >
            STUNNINGLY SIMPLE — OUR APPROACH IS FOCUSED ON 
            <br className="hidden md:block" />
            UNCOMPLICATED AND COMMON SENSE SOLUTIONS.
          </span>
        </div>

        {/* Headline — massive, Flabbergast-style */}
        <h1
          className={loaded ? "hero-blur-in" : "opacity-0"}
          style={{ animationDelay: "400ms" }}
        >
          <span
            className="font-satoshi text-[52px] md:text-[80px] lg:text-[110px] font-bold leading-[1.0] block"
            style={{ color: "#FFFFFF" }}
          >
            Building products
          </span>
          <span
            className="font-satoshi text-[52px] md:text-[80px] lg:text-[110px] font-bold leading-[1.0] block"
            style={{ color: "#FFFFFF" }}
          >
            worth being
          </span>
          <span
            className="font-satoshi text-[52px] md:text-[80px] lg:text-[110px] font-bold leading-[1.0] block"
            style={{ color: "#FFFFFF" }}
          >
            proud of.
          </span>
        </h1>

        {/* CTA row */}
        <div
          className={`flex items-center gap-6 mt-10 ${loaded ? "hero-blur-in" : "opacity-0"}`}
          style={{ animationDelay: "700ms" }}
        >
          <a
            href="#contact"
            className="magnetic-hover inline-flex items-center justify-center font-satoshi text-[13px] font-medium uppercase tracking-[0.06em] rounded-lg cursor-pointer"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#0A0A09",
              padding: "14px 32px",
            }}
          >
            LET'S TALK
          </a>
          <a
            href="#work"
            className="font-satoshi text-[13px] font-medium tracking-[0.02em] transition-colors duration-200"
            style={{ color: "#888880" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#888880")}
          >
            View our work →
          </a>
        </div>
      </div>

      {/* Bottom metadata line */}
      <div
        className="px-6 md:px-12 lg:px-16 py-5 flex items-center justify-between"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.2s ease 1s",
        }}
      >
        <span className="font-geist text-[11px] uppercase tracking-[0.1em]" style={{ color: "#444440" }}>
          EST. 2026
        </span>
        <span className="font-geist text-[11px] uppercase tracking-[0.1em]" style={{ color: "#444440" }}>
          DESIGN · DEVELOPMENT · STRATEGY
        </span>
        <span className="font-geist text-[11px] uppercase tracking-[0.1em] hidden md:block" style={{ color: "#444440" }}>
          SCROLL ↓
        </span>
      </div>
    </section>
  );
};

export default Hero;
