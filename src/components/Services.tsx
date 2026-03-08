import { useScrollAnimation } from "./useScrollAnimation";

const services = [
  {
    num: "01",
    name: "Product Design",
    desc: "UX research, interface design, and design systems built around how real users think and behave.",
  },
  {
    num: "02",
    name: "Full-Stack Development",
    desc: "Frontend and backend engineering that ships fast, scales cleanly, and doesn't need to be rebuilt in 6 months.",
  },
  {
    num: "03",
    name: "Product Strategy",
    desc: "Discovery and scoping before a line of code is written. We prevent expensive mistakes before they happen.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-[140px] bg-base">
      <div ref={ref} className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <span className="section-label block mb-3">What We Do</span>
          <h2
            className="font-display text-[36px] md:text-[54px] text-cream max-w-[560px] mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            Three ways we help you build.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="rounded-2xl p-9 transition-all duration-[250ms] ease-out hover:bg-surface-hover group cursor-default"
              style={{
                backgroundColor: "#1C2A1C",
                border: "1px solid rgba(255,255,255,0.07)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${(i + 1) * 80}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${(i + 1) * 80}ms, background-color 0.25s ease, border-color 0.25s ease`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(196,163,90,0.25)";
                e.currentTarget.style.backgroundColor = "#203020";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.backgroundColor = "#1C2A1C";
              }}
            >
              <span
                className="font-display text-[72px] leading-none block"
                style={{ color: "rgba(196,163,90,0.15)" }}
              >
                {s.num}
              </span>
              <h3 className="font-body text-[18px] font-medium text-cream mt-4">
                {s.name}
              </h3>
              <p className="font-body text-[15px] leading-[1.65] text-sage mt-2.5">
                {s.desc}
              </p>
              <div className="mt-5 pt-5" style={{ borderTop: "1px solid rgba(196,163,90,0.2)" }}>
                <span className="font-body text-[13px] text-gold group-hover:opacity-100 opacity-70 transition-opacity duration-200">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
