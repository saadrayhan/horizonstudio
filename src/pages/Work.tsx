import { Link } from "react-router-dom";
import { useStaggerReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  { slug: "branch-management", name: "Branch Management System", category: "Product Design", year: "2025", desc: "End-to-end product design for a multi-branch operations platform.", color: "from-[hsl(258,50%,20%)] to-[hsl(258,30%,12%)]" },
  { slug: "evwork", name: "EVwork Platform", category: "UI/UX Design", year: "2025", desc: "Workforce management platform for the EV industry.", color: "from-[hsl(210,50%,18%)] to-[hsl(210,30%,10%)]" },
  { slug: "ecommerce-app", name: "E-Commerce Mobile App", category: "Design + Development", year: "2024", desc: "Full-stack mobile commerce experience for a fashion brand.", color: "from-[hsl(170,40%,16%)] to-[hsl(170,25%,9%)]" },
  { slug: "project-alpha", name: "Project Alpha", category: "Design + Development", year: "2026", desc: "A stealth project currently in development.", color: "from-[hsl(30,40%,16%)] to-[hsl(30,25%,9%)]" },
  { slug: "project-beta", name: "Project Beta", category: "Development", year: "2026", desc: "Full-stack platform build for an early-stage startup.", color: "from-[hsl(280,40%,16%)] to-[hsl(280,25%,9%)]" },
];

const Work = () => {
  const { ref, visibleItems } = useStaggerReveal(projects.length, 0.05, 120);

  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />

      <section className="pt-32 pb-8 px-6 lg:px-10 max-w-[1200px] mx-auto">
        <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Our Work</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] animate-blur-in gradient-text-subtle">
          Selected projects.
        </h1>
        <p className="text-muted-foreground mt-4 max-w-[480px] text-[15px] animate-blur-in" style={{ animationDelay: "150ms" }}>
          Products we've designed and built for startups and growing companies.
        </p>
      </section>

      <section className="border-t border-border">
        <div ref={ref} className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12">
          {projects.map((p, i) => (
            <Link
              to={`/work/${p.slug}`}
              key={p.slug}
              className={`group grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 py-10 border-b border-border transition-all duration-600 ${
                visibleItems[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className={`aspect-[16/10] bg-gradient-to-br ${p.color} rounded-xl overflow-hidden relative border border-border/50 group-hover:border-border transition-colors`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[13px] font-medium text-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                    View project →
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{p.category}</span>
                <h3 className="text-2xl md:text-3xl font-semibold mt-2 text-foreground">{p.name}</h3>
                <p className="text-[14px] text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
                <div className="flex items-center gap-4 mt-6">
                  <span className="text-[12px] font-mono text-muted-foreground px-2 py-0.5 rounded border border-border">{p.year}</span>
                  <span className="text-[13px] text-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    View details →
                  </span>
                </div>
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
