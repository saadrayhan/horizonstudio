import { useScrollAnimation } from "./useScrollAnimation";

const IntroCard = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 px-6 md:px-16"
      style={{ backgroundColor: "#F5F4F0" }}
    >
      <div
        className="max-w-[1100px] mx-auto rounded-3xl p-10 md:p-16"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left column */}
          <div className="md:w-[55%]">
            <span className="font-geist text-[11px] uppercase tracking-[0.12em] block mb-6" style={{ color: "#888880" }}>
              ABOUT US
            </span>
            <h2 className="font-satoshi text-[28px] md:text-[52px] font-medium leading-[1.15]" style={{ color: "#0A0A09" }}>
              It takes more than deliverables — you need a team that understands your product, challenges your assumptions, and ships work worth being proud of.
            </h2>
          </div>

          {/* Right column */}
          <div
            className="md:w-[45%] md:pl-16 mt-10 md:mt-0 pt-10 md:pt-0"
            style={{ borderLeft: "none", borderTop: "1px solid rgba(0,0,0,0.08)" }}
          >
            <div className="hidden md:block" style={{ borderLeft: "1px solid rgba(0,0,0,0.08)", paddingLeft: "64px", height: "100%" }}>
              <p className="font-satoshi text-[17px] leading-[1.7] mb-8" style={{ color: "#888880" }}>
                We're a design-first product studio. Five people. No middlemen. We design and build end-to-end — and we care deeply about the quality of everything we ship.
              </p>
              <a
                href="#contact"
                className="inline-block font-satoshi text-[13px] font-medium uppercase tracking-[0.06em] rounded-lg transition-colors duration-150 cursor-pointer"
                style={{
                  backgroundColor: "#0A0A09",
                  color: "#FFFFFF",
                  padding: "12px 28px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333330")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0A0A09")}
              >
                LET'S TALK
              </a>
            </div>
            {/* Mobile version without border-left */}
            <div className="md:hidden">
              <p className="font-satoshi text-[17px] leading-[1.7] mb-8" style={{ color: "#888880" }}>
                We're a design-first product studio. Five people. No middlemen. We design and build end-to-end — and we care deeply about the quality of everything we ship.
              </p>
              <a
                href="#contact"
                className="inline-block font-satoshi text-[13px] font-medium uppercase tracking-[0.06em] rounded-lg transition-colors duration-150 cursor-pointer"
                style={{
                  backgroundColor: "#0A0A09",
                  color: "#FFFFFF",
                  padding: "12px 28px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333330")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0A0A09")}
              >
                LET'S TALK
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroCard;
