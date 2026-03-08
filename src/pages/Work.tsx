import { Link } from "react-router-dom";
import { useStaggerReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  { slug: "branch-management", name: "Branch Management System", category: "Product Design", year: "2025", desc: "End-to-end product design for a multi-branch operations platform serving 200+ locations." },
  { slug: "evwork", name: "EVwork Platform", category: "UI/UX Design", year: "2025", desc: "Workforce management platform for the EV industry." },
  { slug: "ecommerce-app", name: "E-Commerce Mobile App", category: "Design + Development", year: "2024", desc: "Full-stack mobile commerce experience for a fashion brand." },
  { slug: "project-alpha", name: "Project Alpha", category: "Design + Development", year: "2026", desc: "A stealth project currently in development." },
  { slug: "project-beta", name: "Project Beta", category: "Development", year: "2026", desc: "Full-stack platform build for an early-stage startup." },
];

const Work = () => {
  const { ref, visibleItems } = useStaggerReveal(projects.length, 0.05, 120);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-[72px]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <h1 className="font-serif text-[44px] md:text-[56px] text-foreground leading-[1.08] animate-blur-in italic">
            Selected projects
          </h1>
          <p className="text-[15px] text-muted-foreground mt-4 max-w-[460px] leading-relaxed animate-blur-in" style={{ animationDelay: "150ms" }}>
            Products we've designed and built for startups and growing companies.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10" ref={ref}>
          {projects.map((p, i) => (
            <Link
              to={`/work/${p.slug}`}
              key={p.slug}
              className={`group grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 py-12 border-b border-border transition-all duration-600 ${
                visibleItems[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="aspect-[16/10] bg-muted rounded-xl overflow-hidden relative">
                <div className="w-full h-full bg-accent group-hover:scale-[1.02] transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[13px] font-medium bg-foreground text-primary-foreground px-5 py-2 rounded-full">
                    View project →
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{p.category}</span>
                <h3 className="font-serif text-2xl md:text-3xl mt-2 text-foreground italic">{p.name}</h3>
                <p className="text-[14px] text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
                <span className="text-[12px] font-mono text-muted-foreground mt-5">{p.year}</span>
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
