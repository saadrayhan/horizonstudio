import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projectsData: Record<string, { name: string; category: string; year: string; desc: string; challenge: string; solution: string; result: string }> = {
  "branch-management": {
    name: "Branch Management System",
    category: "Product Design",
    year: "2025",
    desc: "End-to-end product design for a multi-branch operations platform serving 200+ locations.",
    challenge: "The client needed to manage inventory, staff scheduling, and reporting across 200+ retail branches — but their existing tools were fragmented and manual.",
    solution: "We designed a unified dashboard with role-based views, real-time inventory sync, and automated reporting. Every screen was prototyped and tested with actual branch managers.",
    result: "50% reduction in manual reporting time. The platform now manages operations for 200+ branches with a team of 3 admins.",
  },
  "evwork": {
    name: "EVwork Platform",
    category: "UI/UX Design",
    year: "2025",
    desc: "Workforce management platform for the EV industry, handling scheduling, certifications, and compliance.",
    challenge: "EV charging installation companies needed a way to manage field technicians, track certifications, and ensure compliance across multiple jurisdictions.",
    solution: "We built a clean, mobile-first platform with smart scheduling, certification tracking, and real-time job status updates. The design prioritized speed for field workers.",
    result: "Adopted by 3 major EV installation companies within the first quarter of launch.",
  },
  "ecommerce-app": {
    name: "E-Commerce Mobile App",
    category: "Design + Development",
    year: "2024",
    desc: "Full-stack mobile commerce experience for a direct-to-consumer fashion brand.",
    challenge: "A growing fashion brand needed a mobile app that could handle their catalog, provide personalized recommendations, and integrate with their existing logistics.",
    solution: "We designed and built a React Native app with a custom product recommendation engine, seamless checkout, and real-time order tracking.",
    result: "40% increase in mobile conversion rate within 3 months of launch.",
  },
  "project-alpha": {
    name: "Project Alpha",
    category: "Design + Development",
    year: "2026",
    desc: "A stealth project currently in development. Details coming soon.",
    challenge: "Details under NDA.",
    solution: "Full design and development engagement.",
    result: "Launching Q3 2026.",
  },
  "project-beta": {
    name: "Project Beta",
    category: "Development",
    year: "2026",
    desc: "Full-stack platform build for an early-stage startup.",
    challenge: "Details under NDA.",
    solution: "Full-stack development with modern tooling.",
    result: "Launching Q4 2026.",
  },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData[slug || ""];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20 px-6 lg:px-12 max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl font-semibold">Project not found</h1>
          <Link to="/work" className="text-muted-foreground mt-4 inline-block hover:underline">← Back to work</Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <Link to="/work" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mb-8">
          ← Back to work
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{project.category}</span>
          <span className="text-muted-foreground">·</span>
          <span className="text-[11px] font-mono text-muted-foreground">{project.year}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight animate-blur-in">{project.name}</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-[600px] animate-blur-in" style={{ animationDelay: "150ms" }}>
          {project.desc}
        </p>
      </section>

      {/* Hero image placeholder */}
      <section className="px-6 lg:px-12 max-w-[1200px] mx-auto pb-16">
        <div className="aspect-[16/9] bg-secondary rounded-xl overflow-hidden animate-blur-in" style={{ animationDelay: "300ms" }}>
          <div className="w-full h-full bg-muted" />
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Details */}
      <section className="py-20 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { label: "The Challenge", text: project.challenge },
            { label: "Our Solution", text: project.solution },
            { label: "The Result", text: project.result },
          ].map((block) => (
            <div key={block.label}>
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">{block.label}</p>
              <p className="text-[15px] leading-relaxed">{block.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* More images placeholders */}
      <section className="py-20 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden">
              <div className="w-full h-full bg-muted" />
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Next project CTA */}
      <section className="py-24 px-6 lg:px-12 max-w-[1200px] mx-auto text-center">
        <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">Next project</p>
        <h2 className="text-3xl font-semibold">Want to see more?</h2>
        <Link to="/work" className="inline-block mt-6 text-[14px] font-medium border border-border px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
          View all projects →
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
