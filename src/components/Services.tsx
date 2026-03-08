import { useScrollAnimation } from "./useScrollAnimation";

const services = [
  {
    num: "01",
    name: "Product Design",
    desc: "UX research, interface design, and design systems built around real user needs.",
  },
  {
    num: "02",
    name: "Full-Stack Development",
    desc: "Frontend and backend engineering that ships fast and scales cleanly.",
  },
  {
    num: "03",
    name: "Product Strategy",
    desc: "Discovery, scoping, and roadmap planning before a line of code is written.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-[120px]" style={{ backgroundColor: "#fff" }}>
      <div ref={ref} className="max-w-[1200px] mx-auto px-6 md:px-8">
        <span className="section-label block mb-4">What We Do</span>
        <h2
          className="font-serif-display text-[36px] md:text-[52px] mb-16"
          style={{
            color: "var(--studio-text)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          }}
        >
          Three ways we help you build.
        </h2>

        <div>
          {services.map((s, i) => (
            <div
              key={s.num}
              className="relative py-12 md:flex md:items-center md:justify-between"
              style={{
                borderTop: "1px solid var(--studio-border)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease-out ${(i + 1) * 100}ms, transform 0.5s ease-out ${(i + 1) * 100}ms`,
              }}
            >
              {/* Large faint number */}
              <span
                className="absolute left-0 top-4 font-serif-display text-[100px] md:text-[120px] leading-none select-none pointer-events-none"
                style={{ color: "var(--studio-accent-light)" }}
              >
                {s.num}
              </span>
              <div className="relative z-10 pl-2 md:pl-20">
                <h3
                  className="font-sans-body text-[18px] md:text-[20px] font-medium mb-1"
                  style={{ color: "var(--studio-text)" }}
                >
                  {s.name}
                </h3>
              </div>
              <p
                className="relative z-10 font-sans-body text-[14px] md:text-[15px] leading-[1.7] max-w-[420px] mt-2 md:mt-0 md:text-right"
                style={{ color: "var(--studio-muted)" }}
              >
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
