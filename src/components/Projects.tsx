import { useScrollAnimation } from "./useScrollAnimation";

const projects = [
  { name: "Branch Management System", category: "Design", year: "2025", color: "#1C2E3A", counter: "1/5" },
  { name: "EVwork Platform", category: "Design", year: "2025", color: "#1C3A28", counter: "2/5" },
  { name: "E-Commerce App", category: "Design | Development", year: "2024", color: "#2E1C2E", counter: "3/5" },
  { name: "Coming Soon", category: "Design | Development", year: "2026", color: "#3A2E1C", counter: "4/5" },
  { name: "Coming Soon", category: "Development", year: "2026", color: "#1C1C3A", counter: "5/5" },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="work" ref={ref} className="py-20" style={{ backgroundColor: "#F5F4F0" }}>
      {/* Section label */}
      <div className="px-6 md:px-16 mb-10">
        <span className="font-geist text-[11px] uppercase tracking-[0.12em]" style={{ color: "#888880" }}>
          SELECTED WORK
        </span>
      </div>

      {/* Project entries */}
      {projects.map((p, i) => (
        <div key={i}>
          <div
            className="relative group cursor-pointer w-full"
            style={{
              height: "90vh",
              backgroundColor: p.color,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`,
            }}
          >
            {/* Center vertical line */}
            <div
              className="absolute top-0 bottom-0 left-1/2 w-px hidden md:block"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            />

            {/* Hover pill */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <span
                className="font-satoshi text-[13px] font-medium rounded-full"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#0A0A09",
                  padding: "12px 24px",
                }}
              >
                VIEW PROJECT →
              </span>
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
              <div>
                <h3 className="font-satoshi text-[24px] md:text-[28px] font-medium" style={{ color: "#FFFFFF" }}>
                  {p.name}
                </h3>
                <span className="font-geist text-[11px] block mt-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {p.category}
                </span>
              </div>
              <div className="flex items-center gap-8 md:gap-16">
                <span className="font-geist text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {p.year}
                </span>
                <span className="font-geist text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {p.counter}
                </span>
              </div>
            </div>
          </div>
          {i < projects.length - 1 && (
            <div className="w-full h-px" style={{ backgroundColor: "rgba(0,0,0,0.06)" }} />
          )}
        </div>
      ))}

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-6 md:px-16 py-12">
        <span className="font-geist text-[11px]" style={{ color: "#888880" }}>
          05 PROJECTS
        </span>
        <a
          href="#work"
          className="font-satoshi text-[14px] transition-all duration-150 hover:underline"
          style={{ color: "#0A0A09" }}
        >
          View all →
        </a>
      </div>
    </section>
  );
};

export default Projects;
