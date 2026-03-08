import { Link } from "react-router-dom";
import { useStaggerReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  { slug: "branch-management", name: "Branch Management System", category: "Product Design", year: "2025", desc: "End-to-end product design for a multi-branch operations platform." },
  { slug: "evwork", name: "EVwork Platform", category: "UI/UX Design", year: "2025", desc: "Workforce management platform for the EV industry." },
  { slug: "ecommerce-app", name: "E-Commerce Mobile App", category: "Design + Development", year: "2024", desc: "Full-stack mobile commerce experience for a fashion brand." },
  { slug: "project-alpha", name: "Project Alpha", category: "Design + Development", year: "2026", desc: "A stealth project currently in development." },
  { slug: "project-beta", name: "Project Beta", category: "Development", year: "2026", desc: "Full-stack platform build for an early-stage startup." },
];

const Work = () => {
  const { ref, visibleItems } = useStaggerReveal(projects.length, 0.05, 140);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-10 px-6 lg:px-12 max-w-[1300px] mx-auto">
        <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Our Work</p>
        <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[1.05] animate-blur-in">
          Selected projects.
        </h1>
        <p className="text-[16px] text-muted-foreground mt-5 max-w-[480px] animate-blur-in leading-relaxed" style={{ animationDelay: "150ms" }}>
          Products we've designed and built for startups and growing companies.
        </p>
      </section>

      <div className="border-t border-border" />

      <section className="max-w-[1300px] mx-auto px-6 lg:px-12 py-10">
        <div ref={ref}>
          {projects.map((p, i) => (
            <Link
              to={`/work/${p.slug}`}
              key={p.slug}
              className={`group grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 py-12 border-b border-border transition-all duration-700 ${
                visibleItems[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="aspect-[16/10] bg-secondary rounded-2xl overflow-hidden relative border border-border">
                <div className="w-full h-full bg-muted group-hover:scale-[1.03] transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[13px] font-medium text-foreground bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg">
                    View project →
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{p.category}</span>
                <h3 className="font-serif text-3xl md:text-4xl mt-2 text-foreground">{p.name}</h3>
                <p className="text-[14px] text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
                <span className="text-[12px] font-mono text-muted-foreground mt-5 px-2.5 py-0.5 rounded border border-border inline-block w-fit">{p.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
