import { Link } from "react-router-dom";
import { useStaggerReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  { title: "Product Design", href: "/work" },
  { title: "UI/UX Design", href: "/work" },
  { title: "Full-Stack Development", href: "/work" },
  { title: "Branding & Identity", href: "/work" },
  { title: "Product Strategy", href: "/work" },
];

const projects = [
  { slug: "branch-management", name: "Branch Management System", category: "Product Design", year: "2025", desc: "End-to-end product design for a multi-branch operations platform serving 200+ locations." },
  { slug: "evwork", name: "EVwork Platform", category: "UI/UX Design", year: "2025", desc: "Workforce management platform for the EV industry." },
  { slug: "ecommerce-app", name: "E-Commerce Mobile App", category: "Design + Development", year: "2024", desc: "Full-stack mobile commerce experience for a fashion brand." },
  { slug: "project-alpha", name: "Project Alpha", category: "Design + Development", year: "2026", desc: "A stealth project currently in development." },
  { slug: "project-beta", name: "Project Beta", category: "Development", year: "2026", desc: "Full-stack platform build for an early-stage startup." },
];

const Work = () => {
  const { ref: svcRef, visibleItems: svcVis } = useStaggerReveal(services.length, 0.08, 80);
  const { ref: projRef, visibleItems: projVis } = useStaggerReveal(projects.length, 0.05, 100);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — Split like Titan offerings */}
      <section className="pt-[72px] border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">All Work</p>
          <h1 className="font-serif text-[42px] md:text-[52px] text-foreground leading-[1.06] animate-blur-in">
            Here's what we <span className="italic">do</span>
          </h1>
        </div>
      </section>

      {/* Services — Two column list with arrows like Titan Offerings */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <div>
              <h2 className="font-serif text-[22px] text-foreground mb-6">Services we offer</h2>
              <div ref={svcRef}>
                {services.map((s, i) => (
                  <Link
                    to={s.href}
                    key={s.title}
                    className={`list-row group flex items-center justify-between py-4 border-t border-border transition-all duration-400 ${
                      svcVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    }`}
                  >
                    <span className="text-[15px] text-foreground group-hover:text-muted-foreground transition-colors">{s.title}</span>
                    <span className="text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects — list rows */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-16">
          <h2 className="font-serif text-[22px] text-foreground mb-6">All projects</h2>
          <div ref={projRef}>
            {projects.map((p, i) => (
              <Link
                to={`/work/${p.slug}`}
                key={p.slug}
                className={`list-row group grid grid-cols-[60px_1fr_auto] md:grid-cols-[80px_1fr_180px_auto] items-center gap-4 py-5 border-t border-border transition-all duration-400 ${
                  projVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                <span className="text-[12px] font-mono text-muted-foreground">{p.year}</span>
                <h3 className="text-[15px] font-semibold text-foreground group-hover:text-muted-foreground transition-colors">{p.name}</h3>
                <span className="text-[12px] text-muted-foreground hidden md:block">{p.category}</span>
                <span className="text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
