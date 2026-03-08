import { useScrollAnimation } from "./useScrollAnimation";

const services = [
  {
    num: "01",
    name: "Product Design",
    desc: "UX research, interface design, and design systems. Built around how real people think — not how designers imagine they do.",
  },
  {
    num: "02",
    name: "Full-Stack Development",
    desc: "Frontend and backend engineering. Ships fast, scales cleanly, and doesn't need rebuilding in six months.",
  },
  {
    num: "03",
    name: "Product Strategy",
    desc: "Discovery and scoping before a single line of code is written. We prevent expensive mistakes before they happen.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-[140px] px-6 md:px-16" style={{ backgroundColor: "#000000" }} ref={ref}>
      <div className="mb-14">
        <span className="font-geist text-[11px] uppercase tracking-[0.1em]" style={{ color: "#666660" }}>
          WHAT WE DO
        </span>
      </div>

      <div>
        {services.map((s, i) => (
          <div
            key={i}
            className="group grid grid-cols-1 md:grid-cols-[10%_45%_45%] py-12 items-start"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`,
            }}
          >
            <span className="font-geist text-[11px]" style={{ color: "#333330" }}>
              {s.num}
            </span>
            <h3
              className="font-satoshi text-[24px] md:text-[32px] font-medium leading-[1.2] transition-colors duration-150 mt-2 md:mt-0 group-hover:text-[#F0F0E8]"
              style={{ color: "#FFFFFF" }}
            >
              {s.name}
            </h3>
            <p
              className="font-satoshi text-[15px] leading-[1.65] mt-3 md:mt-0"
              style={{ color: "#666660" }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
