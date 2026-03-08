import { useScrollAnimation } from "./useScrollAnimation";

const gridWords = [
  { text: "We design.", row: 1, colStart: 1, colEnd: 3, size: "text-[20px] md:text-[24px]", weight: "font-medium" },
  { text: "We build.", row: 1, colStart: 9, colEnd: 11, size: "text-[20px] md:text-[24px]", weight: "font-medium" },
  { text: "WE GIVE", row: 2, colStart: 1, colEnd: 4, size: "text-[40px] md:text-[72px]", weight: "font-bold", uppercase: true },
  { text: "A DAMN", row: 2, colStart: 4, colEnd: 7, size: "text-[40px] md:text-[72px]", weight: "font-bold", uppercase: true },
  { text: "about every", row: 3, colStart: 3, colEnd: 5, size: "text-[16px] md:text-[18px]", weight: "font-medium" },
  { text: "PIXEL", row: 3, colStart: 5, colEnd: 8, size: "text-[56px] md:text-[96px]", weight: "font-bold", uppercase: true },
  { text: "LINE", row: 4, colStart: 9, colEnd: 12, size: "text-[56px] md:text-[96px]", weight: "font-bold", uppercase: true },
  { text: "of code.", row: 4, colStart: 11, colEnd: 13, size: "text-[16px] md:text-[18px]", weight: "font-medium" },
];

const RedFooter = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const links = ["Work", "About", "Services", "Contact"];

  return (
    <>
      {/* Red kinetic grid */}
      <section
        ref={ref}
        className="relative min-h-screen w-full"
        style={{ backgroundColor: "#D43B1A" }}
      >
        {/* Grid structure */}
        <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-12 grid-rows-4" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            />
          ))}
        </div>

        {/* Words */}
        <div className="relative z-10 grid grid-cols-4 md:grid-cols-12 grid-rows-4 min-h-screen items-center">
          {gridWords.map((w, i) => (
            <div
              key={i}
              className={`px-4 md:px-6 ${w.size} ${w.weight} font-satoshi leading-[1.0]`}
              style={{
                color: "#FFFFFF",
                gridRow: w.row,
                gridColumn: `${w.colStart} / ${w.colEnd}`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(8px)",
                transition: `opacity 0.3s ease-out ${i * 60}ms, transform 0.3s ease-out ${i * 60}ms`,
              }}
            >
              {w.text}
              {w.text === "PIXEL" && (
                <span className="animate-blink ml-1" style={{ fontSize: "48px" }}>|</span>
              )}
            </div>
          ))}
        </div>

        {/* Footer bar inside red */}
        <div
          className="absolute bottom-0 left-0 right-0 px-6 md:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ backgroundColor: "rgba(0,0,0,0.15)" }}
        >
          <span className="font-satoshi text-[13px]" style={{ color: "rgba(255,255,255,0.7)" }}>
            [STUDIO NAME]
          </span>
          <div className="flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-geist text-[11px] uppercase tracking-[0.1em] transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                {l}
              </a>
            ))}
          </div>
          <span className="font-geist text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            © 2026
          </span>
        </div>
      </section>
    </>
  );
};

export default RedFooter;
