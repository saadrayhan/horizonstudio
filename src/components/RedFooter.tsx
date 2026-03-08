import { useSectionReveal } from "@/hooks/useSectionReveal";

const gridWords = [
  { text: "DEVELOPERS", row: 1, col: "2 / 4", size: "text-[11px] md:text-[13px]", weight: "font-medium", isLabel: true },
  { text: "WHO", row: 1, col: "9 / 11", size: "text-[11px] md:text-[13px]", weight: "font-medium", isLabel: true },
  { text: "DESIGNERS", row: 2, col: "1 / 3", size: "text-[11px] md:text-[13px]", weight: "font-medium", isLabel: true },
  { text: "AND", row: 2, col: "2 / 3", size: "text-[11px] md:text-[13px]", weight: "font-medium", isLabel: true, extraClass: "mt-4" },
  { text: "BUILD", row: 2, col: "10 / 13", size: "text-[28px] md:text-[48px]", weight: "font-bold" },
  { text: "PRODUCTS", row: 2, col: "10 / 13", size: "text-[11px] md:text-[13px]", weight: "font-medium", isLabel: true, extraClass: "mt-16 md:mt-24" },
  { text: "THAT", row: 2, col: "10 / 13", size: "text-[11px] md:text-[13px]", weight: "font-medium", isLabel: true, extraClass: "mt-20 md:mt-28" },
  { text: "OUR CULTURE", row: 3, col: "4 / 6", size: "text-[9px] md:text-[11px]", weight: "font-medium", isLabel: true },
  { text: "IS A REFLECTION", row: 3, col: "4 / 6", size: "text-[9px] md:text-[11px]", weight: "font-medium", isLabel: true, extraClass: "mt-4" },
  { text: "OF OUR SHARED", row: 3, col: "4 / 6", size: "text-[9px] md:text-[11px]", weight: "font-medium", isLabel: true, extraClass: "mt-8" },
  { text: "VALUES.", row: 3, col: "4 / 6", size: "text-[9px] md:text-[11px]", weight: "font-medium", isLabel: true, extraClass: "mt-12" },
  { text: "GOOD IS NOT", row: 4, col: "1 / 3", size: "text-[9px] md:text-[11px]", weight: "font-medium", isLabel: true },
  { text: "WHERE WE STOP.", row: 4, col: "1 / 3", size: "text-[9px] md:text-[11px]", weight: "font-medium", isLabel: true, extraClass: "mt-4" },
  { text: "IT'S WHERE", row: 4, col: "1 / 3", size: "text-[9px] md:text-[11px]", weight: "font-medium", isLabel: true, extraClass: "mt-8" },
  { text: "WE BEGIN.", row: 4, col: "1 / 3", size: "text-[9px] md:text-[11px]", weight: "font-medium", isLabel: true, extraClass: "mt-12" },
];

// Bottom row words
const bottomWords = [
  { text: "WILL", col: "3 / 4" },
  { text: "YOUR USERS", col: "7 / 9" },
  { text: "LOVE!", col: "11 / 13" },
];

const RedFooter = () => {
  const { ref, isVisible } = useSectionReveal(0.05);

  const links = ["Work", "About", "Services", "Contact"];

  return (
    <section
      ref={ref}
      className="relative w-full"
      style={{ backgroundColor: "#D43B1A" }}
    >
      {/* Main grid */}
      <div className="relative min-h-screen">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 grid grid-cols-4 md:grid-cols-12"
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
        >
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                minHeight: "25vh",
              }}
            />
          ))}
        </div>

        {/* Scattered words */}
        <div className="relative z-10 grid grid-cols-4 md:grid-cols-12 min-h-screen">
          {gridWords.map((w, i) => (
            <div
              key={i}
              className={`px-3 md:px-4 pt-4 ${w.size} ${w.weight} font-geist uppercase tracking-[0.12em] leading-[1.2] ${w.extraClass || ""}`}
              style={{
                color: "rgba(255,255,255,0.5)",
                gridRow: w.row,
                gridColumn: w.col,
                opacity: isVisible ? 1 : 0,
                filter: isVisible ? "blur(0px)" : "blur(6px)",
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.92)",
                transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 50}ms`,
              }}
            >
              {w.text}
              {w.text === "WHO" && (
                <span className="animate-blink ml-1 text-white">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Bottom word row */}
        <div
          className="absolute bottom-16 left-0 right-0 grid grid-cols-4 md:grid-cols-12 px-3 md:px-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
        >
          {bottomWords.map((w, i) => (
            <div
              key={i}
              className="font-geist text-[11px] md:text-[13px] font-medium uppercase tracking-[0.12em] pt-4"
              style={{
                gridColumn: w.col,
                color: "rgba(255,255,255,0.5)",
                opacity: isVisible ? 1 : 0,
                transition: `opacity 0.6s ease ${800 + i * 100}ms`,
              }}
            >
              {w.text}
              {w.text === "YOUR USERS" && (
                <span className="animate-blink ml-1 text-white">|</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <div
        className="px-6 md:px-12 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
      >
        <span className="font-satoshi text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
          [STUDIO NAME]
        </span>
        <div className="flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-geist text-[11px] uppercase tracking-[0.1em] transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              {l}
            </a>
          ))}
        </div>
        <span className="font-geist text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
          © 2026 [STUDIO NAME]
        </span>
      </div>
    </section>
  );
};

export default RedFooter;
