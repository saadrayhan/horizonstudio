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
    desc: "Workforce management platform for the EV industry.",
    challenge: "EV charging installation companies needed a way to manage field technicians, track certifications, and ensure compliance.",
    solution: "We built a clean, mobile-first platform with smart scheduling, certification tracking, and real-time job status updates.",
    result: "Adopted by 3 major EV installation companies within the first quarter of launch.",
    tags: ["Figma", "React Native", "Supabase"],
  },
  "ecommerce-app": {
    name: "E-Commerce Mobile App", category: "Design + Development", year: "2024",
    desc: "Full-stack mobile commerce experience for a direct-to-consumer fashion brand.",
    challenge: "A growing fashion brand needed a mobile app that could handle their catalog, personalized recommendations, and logistics integration.",
    solution: "We designed and built a React Native app with a custom recommendation engine, seamless checkout, and real-time order tracking.",
    result: "40% increase in mobile conversion rate within 3 months of launch.",
    tags: ["React Native", "TypeScript", "Stripe", "AWS"],
  },
  "project-alpha": {
    name: "Project Alpha", category: "Design + Development", year: "2026",
    desc: "A stealth project currently in development.",
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
        <section className="pt-[72px] py-28 px-6 max-w-[1240px] mx-auto text-center">
          <h1 className="font-serif text-4xl text-foreground italic">Project not found</h1>
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

      {/* Header */}
      <section className="pt-[72px] border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-16 md:py-20">
          <Link to="/work" className="text-[12px] font-mono text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider mb-8 inline-block">← Back</Link>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <h1 className="font-serif text-[40px] md:text-[52px] text-foreground leading-[1.06] animate-blur-in">
                {project.name}
              </h1>
              <p className="text-[14px] text-muted-foreground mt-4 max-w-[500px] leading-relaxed animate-blur-in" style={{ animationDelay: "150ms" }}>{project.desc}</p>
            </div>
            <div className="flex flex-wrap gap-4 animate-blur-in" style={{ animationDelay: "250ms" }}>
              <div>
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Category</p>
                <p className="text-[14px] font-medium text-foreground mt-0.5">{project.category}</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Year</p>
                <p className="text-[14px] font-medium text-foreground mt-0.5">{project.year}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-6 animate-blur-in" style={{ animationDelay: "300ms" }}>
            {project.tags.map((t) => (
              <span key={t} className="text-[11px] font-mono text-muted-foreground px-2.5 py-1 border border-border">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto">
          <div className="aspect-[16/9] bg-muted animate-blur-in" style={{ animationDelay: "350ms" }} />
        </div>
      </section>

      {/* Challenge / Solution / Result — grid with borders */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto">
          <div ref={detRef} className="grid grid-cols-1 md:grid-cols-3">
            {[
              { label: "The Challenge", text: project.challenge },
              { label: "Our Solution", text: project.solution },
              { label: "The Result", text: project.result },
            ].map((block, i) => (
              <div key={block.label} className={`px-6 lg:px-10 py-12 border-l border-border first:border-l-0 transition-all duration-500 ${detVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">{block.label}</p>
                <p className="text-[14px] leading-relaxed text-foreground/80">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — bordered grid */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto">
          <div ref={imgRef} className="grid grid-cols-1 md:grid-cols-2">
            {[0, 1, 2, 3].map((n) => (
              <div key={n} className={`aspect-[4/3] bg-muted border border-border -mt-px -ml-px transition-all duration-500 ${imgVis[n] ? "opacity-100" : "opacity-0"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-16">
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">Next project</p>
          <Link to={`/work/${nextSlug}`} className="group flex items-center justify-between">
            <h2 className="font-serif text-[28px] md:text-[36px] text-foreground group-hover:text-muted-foreground transition-colors">
              {nextProject.name}
            </h2>
            <span className="text-foreground group-hover:translate-x-2 transition-transform text-xl">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
