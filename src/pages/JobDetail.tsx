import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobsData: Record<string, { title: string; type: string; location: string; team: string; about: string; responsibilities: string[]; requirements: string[]; niceToHave: string[] }> = {
  "senior-product-designer": {
    title: "Senior Product Designer", type: "Full-time", location: "Remote / Dhaka", team: "Design",
    about: "We're looking for a Senior Product Designer who can own end-to-end design for client projects.",
    responsibilities: ["Lead product design for 1-2 client projects", "Conduct user research and usability testing", "Create wireframes, prototypes, and high-fidelity designs", "Build and maintain design systems", "Collaborate closely with developers"],
    requirements: ["4+ years of product design experience", "Strong portfolio with end-to-end product thinking", "Proficiency in Figma", "Experience with startups", "Excellent communication"],
    niceToHave: ["Frontend development experience", "Design systems at scale", "User research methodologies"],
  },
  "frontend-engineer": {
    title: "Frontend Engineer", type: "Full-time", location: "Remote", team: "Engineering",
    about: "We need a frontend engineer who cares about design quality as much as code quality.",
    responsibilities: ["Build responsive web apps with React and TypeScript", "Implement pixel-perfect UIs", "Write clean, maintainable code", "Optimize performance and accessibility", "Participate in code reviews"],
    requirements: ["3+ years frontend experience", "React, TypeScript, modern CSS", "Eye for design", "Testing and CI/CD experience", "Good communication"],
    niceToHave: ["Next.js experience", "Figma familiarity", "Animation libraries"],
  },
  "fullstack-developer": {
    title: "Full-Stack Developer", type: "Full-time", location: "Remote / Dhaka", team: "Engineering",
    about: "We're looking for a full-stack developer who can handle both frontend and backend.",
    responsibilities: ["Build full-stack apps with React, Node.js, PostgreSQL", "Design APIs and database schemas", "Deploy and maintain production apps", "Write technical documentation", "Mentor junior developers"],
    requirements: ["4+ years full-stack experience", "React, Node.js, SQL", "Cloud platform experience", "Security best practices", "Strong problem-solving"],
    niceToHave: ["Supabase or Firebase", "DevOps background", "Open source contributions"],
  },
  "design-intern": {
    title: "Design Intern", type: "Internship", location: "Dhaka", team: "Design",
    about: "A 3-month internship for aspiring product designers working on real client projects.",
    responsibilities: ["Assist with UI design tasks", "Help maintain design systems", "Conduct competitive research", "Create design assets", "Participate in design critiques"],
    requirements: ["Studying or recently graduated in design", "Basic Figma proficiency", "Interest in product design", "Willingness to learn", "Available 3+ months"],
    niceToHave: ["Personal design projects", "HTML/CSS knowledge", "Design systems interest"],
  },
};

const JobDetail = () => {
  const { slug } = useParams();
  const job = jobsData[slug || ""];

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-[72px] py-28 px-6 max-w-[800px] mx-auto text-center">
          <h1 className="font-serif text-4xl text-foreground italic">Job not found</h1>
          <Link to="/careers" className="text-muted-foreground mt-4 inline-block hover:text-foreground transition-colors">← Back to careers</Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-[72px] border-b border-border">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10 py-16 md:py-20">
          <Link to="/careers" className="text-[12px] font-mono text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider mb-8 inline-block">← Back</Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{job.team}</span>
            <span className="text-muted-foreground/30">·</span>
            <span className="text-[11px] font-mono text-muted-foreground px-2 py-0.5 border border-border">{job.type}</span>
          </div>

          <h1 className="font-serif text-[36px] md:text-[48px] text-foreground leading-[1.08] animate-blur-in">{job.title}</h1>

          <div className="flex items-center gap-2 mt-5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-[13px] text-muted-foreground">{job.location}</span>
          </div>
        </div>
      </section>

      {/* Content — two column layout */}
      <section className="border-b border-border">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10 py-12 md:py-16">
          <div className="mb-10">
            <h2 className="text-[15px] font-semibold text-foreground mb-3">About this role</h2>
            <p className="text-[14px] text-foreground/75 leading-relaxed">{job.about}</p>
          </div>

          {[
            { title: "Responsibilities", items: job.responsibilities },
            { title: "Requirements", items: job.requirements },
            { title: "Nice to have", items: job.niceToHave },
          ].map((section) => (
            <div key={section.title} className="mb-10">
              <h2 className="text-[15px] font-semibold text-foreground mb-3">{section.title}</h2>
              <ul className="space-y-2.5">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-foreground/75">
                    <span className="text-muted-foreground mt-2 shrink-0 w-1 h-1 rounded-full bg-muted-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Apply CTA */}
      <section className="border-b border-border">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10 py-16">
          <h2 className="font-serif text-[28px] text-foreground">Interested?</h2>
          <p className="text-muted-foreground mt-2 mb-6 text-[14px]">Send us your portfolio and a brief note about why you'd be a great fit.</p>
          <a href={`mailto:careers@studio.dev?subject=Application: ${job.title}`} className="inline-block text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-7 py-3 rounded-full hover:bg-foreground/90 transition-colors">
            Apply for this role →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobDetail;
