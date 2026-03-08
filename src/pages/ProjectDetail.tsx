import { useParams, Link } from "react-router-dom";
import { useStaggerReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projectsData: Record<string, { name: string; category: string; year: string; desc: string; challenge: string; solution: string; result: string; tags: string[] }> = {
  "branch-management": {
    name: "Branch Management System", category: "Product Design", year: "2025",
    desc: "End-to-end product design for a multi-branch operations platform serving 200+ locations.",
    challenge: "The client needed to manage inventory, staff scheduling, and reporting across 200+ retail branches — but their existing tools were fragmented and manual.",
    solution: "We designed a unified dashboard with role-based views, real-time inventory sync, and automated reporting. Every screen was prototyped and tested with actual branch managers.",
    result: "50% reduction in manual reporting time. The platform now manages operations for 200+ branches with a team of 3 admins.",
    tags: ["Figma", "React", "Node.js", "PostgreSQL"],
  },
  evwork: {
    name: "EVwork Platform", category: "UI/UX Design", year: "2025",
    desc: "Workforce management platform for the EV industry, handling scheduling, certifications, and compliance.",
    challenge: "EV charging installation companies needed a way to manage field technicians, track certifications, and ensure compliance.",
    solution: "We built a clean, mobile-first platform with smart scheduling, certification tracking, and real-time job status updates.",
    result: "Adopted by 3 major EV installation companies within the first quarter of launch.",
    tags: ["Figma", "React Native", "Supabase"],
  },
  "ecommerce-app": {
    name: "E-Commerce Mobile App", category: "Design + Development", year: "2024",
    desc: "Full-stack mobile commerce experience for a direct-to-consumer fashion brand.",
    challenge: "A growing fashion brand needed a mobile app that could handle their catalog, provide personalized recommendations, and integrate with existing logistics.",
    solution: "We designed and built a React Native app with a custom recommendation engine, seamless checkout, and real-time order tracking.",
    result: "40% increase in mobile conversion rate within 3 months of launch.",
    tags: ["React Native", "TypeScript", "Stripe", "AWS"],
  },
  "project-alpha": {
    name: "Project Alpha", category: "Design + Development", year: "2026",
    desc: "A stealth project currently in development. Details coming soon.",
    challenge: "Details under NDA.", solution: "Full design and development engagement.", result: "Launching Q3 2026.",
    tags: ["React", "TypeScript", "Supabase"],
  },
  "project-beta": {
    name: "Project Beta", category: "Development", year: "2026",
    desc: "Full-stack platform build for an early-stage startup.",
    challenge: "Details under NDA.", solution: "Full-stack development with modern tooling.", result: "Launching Q4 2026.",
    tags: ["Next.js", "PostgreSQL", "Vercel"],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData[slug || ""];
  const { ref: detRef, visibleItems: detVis } = useStaggerReveal(3, 0.1, 150);
  const { ref: imgRef, visibleItems: imgVis } = useStaggerReveal(4, 0.1, 120);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20 px-6 lg:px-12 max-w-[1300px] mx-auto text-center">
          <h1 className="font-serif text-4xl text-foreground">Project not found</h1>
          <Link to="/work" className="text-muted-foreground mt-4 inline-block hover:text-foreground transition-colors">← Back to work</Link>
        </section>
        <Footer />
      </div>
    );
  }

  const allSlugs = Object.keys(projectsData);
  const nextSlug = allSlugs[(allSlugs.indexOf(slug || "") + 1) % allSlugs.length];
  const nextProject = projectsData[nextSlug];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-10 px-6 lg:px-12 max-w-[1300px] mx-auto">
        <Link to="/work" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mb-8">← Back to work</Link>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{project.category}</span>
          <span className="text-muted-foreground/30">·</span>
          <span className="text-[12px] font-mono text-muted-foreground px-2 py-0.5 rounded border border-border">{project.year}</span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-[1.05] animate-blur-in">{project.name}</h1>
        <p className="text-[16px] text-muted-foreground mt-5 max-w-[600px] leading-relaxed animate-blur-in" style={{ animationDelay: "150ms" }}>{project.desc}</p>
        <div className="flex flex-wrap gap-2 mt-6 animate-blur-in" style={{ animationDelay: "250ms" }}>
          {project.tags.map((t) => (
            <span key={t} className="text-[11px] font-mono text-muted-foreground px-2.5 py-1 rounded-md border border-border bg-secondary/50">{t}</span>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-12 max-w-[1300px] mx-auto pb-10">
        <div className="aspect-[16/9] bg-secondary rounded-2xl border border-border animate-blur-in" style={{ animationDelay: "350ms" }} />
      </section>

      <div className="border-t border-border" />

      <section className="max-w-[1300px] mx-auto px-6 lg:px-12 py-20">
        <div ref={detRef} className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { label: "The Challenge", text: project.challenge },
            { label: "Our Solution", text: project.solution },
            { label: "The Result", text: project.result },
          ].map((block, i) => (
            <div key={block.label} className={`transition-all duration-600 ${detVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">{block.label}</p>
              <p className="text-[15px] leading-relaxed text-foreground/80">{block.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      <section className="max-w-[1300px] mx-auto px-6 lg:px-12 py-20">
        <div ref={imgRef} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[0, 1, 2, 3].map((n) => (
            <div key={n} className={`aspect-[4/3] bg-secondary rounded-2xl border border-border transition-all duration-500 ${imgVis[n] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} />
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      <section className="max-w-[1300px] mx-auto px-6 lg:px-12 py-20">
        <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">Next project</p>
        <Link to={`/work/${nextSlug}`} className="group block">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground group-hover:text-muted-foreground transition-colors">
            {nextProject.name} →
          </h2>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
