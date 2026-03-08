import { useSectionReveal } from "@/hooks/useSectionReveal";
import { useState, useEffect, useRef } from "react";

const projects = [
  { name: "Branch Management System", category: "Design", year: "2025", color: "#1C2E3A" },
  { name: "EVwork Platform", category: "Design", year: "2025", color: "#1C3A28" },
  { name: "E-Commerce App", category: "Design | Development", year: "2024", color: "#2E1C2E" },
  { name: "Coming Soon", category: "Design | Development", year: "2026", color: "#3A2E1C" },
  { name: "Coming Soon", category: "Development", year: "2026", color: "#1C1C3A" },
];

// Individual project with its own intersection observer
const ProjectEntry = ({ p, i }: { p: typeof projects[0]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div
        className="project-entry relative group cursor-pointer w-full overflow-hidden"
        style={{
          height: "85vh",
          backgroundColor: p.color,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.98)",
          transition: "all 1s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Grid overlay lines — like flabbergast */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 bottom-0 left-1/3 w-px hidden md:block" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
          <div className="absolute top-0 bottom-0 left-2/3 w-px hidden md:block" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
          <div className="absolute top-0 bottom-0 left-1/2 w-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
        </div>

        {/* Hover pill */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span
            className="project-pill font-satoshi text-[13px] font-medium rounded-lg"
            style={{
              backgroundColor: "#0A0A09",
              color: "#FFFFFF",
              padding: "12px 28px",
            }}
          >
            View project →
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-16 py-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <span
              className="font-geist text-[11px] uppercase tracking-[0.12em] block mb-3 transition-colors duration-300"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {p.category}
            </span>
            <h3
              className="font-satoshi text-[28px] md:text-[36px] font-bold leading-[1.05] group-hover:translate-x-2 transition-transform duration-300"
              style={{ color: "#FFFFFF" }}
            >
              {p.name}
            </h3>
          </div>
          <div className="flex items-center gap-12">
            <span className="font-geist text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
              {p.year}
            </span>
            <span className="font-geist text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
              {i + 1}/{projects.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref: labelRef, isVisible: labelVisible } = useSectionReveal(0.3);

  return (
    <section id="work" className="pt-24 md:pt-32" style={{ backgroundColor: "#F5F4F0" }}>
      {/* Section label */}
      <div
        ref={labelRef}
        className="px-6 md:px-12 lg:px-16 mb-12"
        style={{
          opacity: labelVisible ? 1 : 0,
          transform: labelVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <span className="font-geist text-[11px] uppercase tracking-[0.14em]" style={{ color: "#888880" }}>
          SELECTED WORK
        </span>
      </div>

      {/* Projects */}
      {projects.map((p, i) => (
        <ProjectEntry key={i} p={p} i={i} />
      ))}

      {/* Bottom bar */}
      <div
        className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-10"
        style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
      >
        <span className="font-geist text-[11px] uppercase tracking-[0.1em]" style={{ color: "#888880" }}>
          05 PROJECTS
        </span>
        <a
          href="#work"
          className="font-satoshi text-[14px] font-medium transition-all duration-200 hover:translate-x-1"
          style={{ color: "#0A0A09" }}
        >
          View all work →
        </a>
      </div>
    </section>
  );
};

export default Projects;
