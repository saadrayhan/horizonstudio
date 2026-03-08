import { useScrollAnimation } from "./useScrollAnimation";

const projects = [
  {
    num: "01",
    name: "Branch Management System",
    category: "Product Design",
    year: "2025",
    color: "#1A1A2E",
  },
  {
    num: "02",
    name: "EVwork Platform",
    category: "UI/UX Design",
    year: "2025",
    color: "#1A2E1A",
  },
  {
    num: "03",
    name: "E-Commerce Mobile App",
    category: "Mobile Design",
    year: "2024",
    color: "#2E1A1A",
  },
  {
    num: "04",
    name: "Coming Soon",
    category: "Full-Stack + Design",
    year: "2026",
    color: "#2E2A1A",
  },
];

const Work = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="work" ref={ref} style={{ backgroundColor: "#000000" }}>
      {projects.map((p, i) => (
        <div key={i}>
          {/* Divider */}
          <div className="w-full h-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />

          {/* Project entry */}
          <div
            className="group grid grid-cols-1 md:grid-cols-[35%_65%] cursor-pointer"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`,
            }}
          >
            {/* Left metadata */}
            <div className="px-6 md:px-10 py-8 md:py-12 flex flex-col justify-center">
              <span className="font-geist text-[11px] uppercase tracking-[0.1em]" style={{ color: "#333330" }}>
                {p.num}
              </span>
              <h3
                className="font-satoshi text-[22px] md:text-[28px] font-medium mt-3 leading-[1.2] transition-colors duration-200"
                style={{ color: "#FFFFFF" }}
              >
                {p.name}
              </h3>
              <span
                className="font-geist text-[11px] uppercase tracking-[0.1em] mt-2 transition-colors duration-200"
                style={{ color: "#666660" }}
              >
                {p.category}
              </span>
              <span className="font-geist text-[11px] mt-1" style={{ color: "#333330" }}>
                {p.year}
              </span>
              <span
                className="font-satoshi text-[13px] mt-6 md:mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: "#FFFFFF" }}
              >
                View project →
              </span>
            </div>

            {/* Right image */}
            <div
              className="relative aspect-[4/3] md:aspect-auto"
              style={{ backgroundColor: p.color }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              />
            </div>
          </div>
        </div>
      ))}

      {/* Bottom row */}
      <div
        className="w-full flex items-center justify-between px-6 md:px-16 py-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <span className="font-geist text-[11px] uppercase tracking-[0.1em]" style={{ color: "#666660" }}>
          04 Projects
        </span>
        <a
          href="#work"
          className="font-satoshi text-[13px] hover:underline transition-colors duration-150"
          style={{ color: "#FFFFFF" }}
        >
          View all work →
        </a>
      </div>
    </section>
  );
};

export default Work;
