import { useScrollAnimation } from "./useScrollAnimation";

const projects = [
  {
    category: "Product Design + Dev",
    name: "Branch Management System",
    desc: "End-to-end product design for a multi-branch operations platform.",
    year: "2025",
  },
  {
    category: "UI/UX Design",
    name: "EVwork Platform",
    desc: "Workforce management platform for the EV industry.",
    year: "2024",
  },
];

const Work = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="work" className="py-[140px] bg-base">
      <div ref={ref} className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <span className="section-label block mb-3">Selected Work</span>
          <h2
            className="font-display text-[36px] md:text-[54px] text-cream"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            A few things we've built.
          </h2>
        </div>

        <div className="space-y-5 mt-14">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-[20px] p-8 md:p-12 grid grid-cols-1 md:grid-cols-[42%_58%] gap-8 items-center transition-all duration-[250ms] ease-out cursor-pointer group"
              style={{
                backgroundColor: "#1C2A1C",
                border: "1px solid rgba(255,255,255,0.07)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${(i + 1) * 150}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${(i + 1) * 150}ms, border-color 0.25s ease`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(196,163,90,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              {/* Left */}
              <div>
                <span
                  className="inline-block font-body text-[11px] uppercase tracking-[0.1em] font-medium px-3 py-1.5 rounded-2xl text-gold"
                  style={{ backgroundColor: "rgba(196,163,90,0.12)" }}
                >
                  {p.category}
                </span>
                <h3 className="font-display text-[28px] md:text-[36px] text-cream mt-4">
                  {p.name}
                </h3>
                <p className="font-body text-[16px] leading-[1.65] text-sage mt-3">
                  {p.desc}
                </p>
                <span className="font-body text-[12px] text-sage mt-2 block">{p.year}</span>
                <span className="inline-block font-body text-[14px] text-gold mt-8 group-hover:translate-x-1 transition-transform duration-200">
                  View project →
                </span>
              </div>

              {/* Right - placeholder screenshot */}
              <div
                className="rounded-xl aspect-[16/10]"
                style={{ backgroundColor: "#111A11" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
