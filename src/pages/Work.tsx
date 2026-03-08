import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  { slug: "branch-management", name: "Branch Management System", category: "Product Design", year: "2025", desc: "End-to-end product design for a multi-branch operations platform." },
  { slug: "evwork", name: "EVwork Platform", category: "UI/UX Design", year: "2025", desc: "Workforce management platform for the EV industry." },
  { slug: "ecommerce-app", name: "E-Commerce Mobile App", category: "Design + Development", year: "2024", desc: "Full-stack mobile commerce experience for a fashion brand." },
  { slug: "project-alpha", name: "Project Alpha", category: "Design + Development", year: "2026", desc: "A stealth project currently in development." },
  { slug: "project-beta", name: "Project Beta", category: "Development", year: "2026", desc: "Full-stack platform build for an early-stage startup." },
];

const ProjectRow = ({ p, i }: { p: typeof projects[0]; i: number }) => {
  const { ref, visible } = useReveal(0.1);
  return (
    <Link
      to={`/work/${p.slug}`}
      ref={ref}
      className="group grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 py-10 border-b border-border scroll-fade"
      style={{
        transitionDelay: `${i * 80}ms`,
        ...(visible ? { opacity: 1, transform: "translateY(0)" } : {}),
      }}
    >
      <div className="aspect-[16/10] bg-secondary rounded-lg overflow-hidden">
        <div className="w-full h-full bg-muted group-hover:scale-[1.02] transition-transform duration-500" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{p.category}</span>
        <h3 className="text-2xl md:text-3xl font-semibold mt-2 group-hover:underline">{p.name}</h3>
        <p className="text-[14px] text-muted-foreground mt-3">{p.desc}</p>
        <div className="flex items-center gap-4 mt-6">
          <span className="text-[13px] font-mono text-muted-foreground">{p.year}</span>
          <span className="text-[13px] text-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            View project →
          </span>
        </div>
      </div>
    </Link>
  );
};

const Work = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-8 px-6 lg:px-12 max-w-[1200px] mx-auto">
      <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">Our Work</p>
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight animate-blur-in">
        Selected projects.
      </h1>
      <p className="text-muted-foreground mt-4 max-w-[480px] animate-blur-in" style={{ animationDelay: "150ms" }}>
        A collection of products we've designed and built for startups and growing companies.
      </p>
    </section>
    <div className="border-t border-border" />
    <section className="py-8 px-6 lg:px-12 max-w-[1200px] mx-auto">
      {projects.map((p, i) => (
        <ProjectRow key={p.slug} p={p} i={i} />
      ))}
    </section>
    <Footer />
  </div>
);

export default Work;
