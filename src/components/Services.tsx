import { useScrollAnimation } from "./useScrollAnimation";

const services = [
  {
    num: "01",
    total: "3",
    name: "Product Design",
    desc: "UX research, interface design, and design systems built around real user needs.",
  },
  {
    num: "02",
    total: "3",
    name: "Full-Stack Development",
    desc: "Frontend and backend engineering that ships fast and scales cleanly.",
  },
  {
    num: "03",
    total: "3",
    name: "Product Strategy",
    desc: "Discovery, scoping, and roadmap planning before a line of code is written.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-[140px] bg-studio-cream">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="section-label block mb-5">What We Do</span>
          <h2
            className="font-serif-display text-[36px] md:text-[52px] lg:text-[60px] text-studio-text"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            Three ways we help you build.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="relative py-10 px-8 md:px-10 border-t border-studio-border md:border-t-0 md:border-l first:border-l-0 first:border-t-0"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease-out ${(i + 1) * 120}ms, transform 0.6s ease-out ${(i + 1) * 120}ms`,
              }}
            >
              {/* Counter like Adaline */}
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-sans-body text-[32px] font-light text-studio-text">
                  {s.num}
                </span>
                <span className="font-sans-body text-[14px] text-studio-muted">
                  / {s.total}
                </span>
              </div>

              <h3 className="font-serif-display text-[24px] md:text-[28px] text-studio-text mb-4">
                {s.name}
              </h3>
              <p className="font-sans-body text-[14px] leading-[1.7] text-studio-muted">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
