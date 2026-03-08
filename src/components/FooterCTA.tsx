import { useScrollAnimation } from "./useScrollAnimation";

const FooterCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-[140px] px-6 md:px-16" style={{ backgroundColor: "#000000" }}>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Left */}
        <div>
          <span className="font-geist text-[11px] uppercase tracking-[0.1em]" style={{ color: "#333330" }}>
            CONTACT
          </span>
          <h2
            className="font-satoshi text-[36px] md:text-[64px] font-bold leading-[1.0] mt-6"
            style={{ color: "#FFFFFF" }}
          >
            Have something worth building?
          </h2>
          <p
            className="font-satoshi text-[17px] leading-[1.6] mt-6 max-w-[400px]"
            style={{ color: "#666660" }}
          >
            Tell us about your project. We'll tell you honestly if we're the right team for it.
          </p>
          <a
            href="mailto:hello@studio.dev"
            className="inline-block font-satoshi text-[14px] font-medium px-[28px] py-[10px] rounded mt-10 transition-colors duration-150"
            style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F0F0E8")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
          >
            Start a project →
          </a>
        </div>

        {/* Right — contact details */}
        <div className="flex flex-col justify-end">
          {[
            { label: "EMAIL", value: "hello@[studio].dev" },
            { label: "BASED IN", value: "Dhaka, Bangladesh" },
            { label: "AVAILABLE FOR", value: "Projects worldwide" },
          ].map((row, i) => (
            <div
              key={i}
              className="py-5"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="font-geist text-[11px] uppercase tracking-[0.1em] block" style={{ color: "#333330" }}>
                {row.label}
              </span>
              <span className="font-satoshi text-[15px] block mt-1" style={{ color: "#FFFFFF" }}>
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
