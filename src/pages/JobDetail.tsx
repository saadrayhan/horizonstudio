import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobsData: Record<string, { title: string; type: string; location: string; team: string; about: string; responsibilities: string[]; requirements: string[]; niceToHave: string[] }> = {
  "senior-product-designer": {
    title: "Senior Product Designer",
    type: "Full-time",
    location: "Remote / Dhaka",
    team: "Design",
    about: "We're looking for a Senior Product Designer who can own end-to-end design for client projects. You'll work directly with founders, lead research, and ship production-ready designs.",
    responsibilities: [
      "Lead product design for 1-2 client projects simultaneously",
      "Conduct user research, usability testing, and stakeholder interviews",
      "Create wireframes, prototypes, and high-fidelity UI designs",
      "Build and maintain design systems",
      "Collaborate closely with developers during implementation",
    ],
    requirements: [
      "4+ years of product design experience",
      "Strong portfolio showing end-to-end product thinking",
      "Proficiency in Figma and modern design tools",
      "Experience working with startups or early-stage products",
      "Excellent communication skills",
    ],
    niceToHave: [
      "Experience with React or frontend development",
      "Background in design systems at scale",
      "Experience with user research methodologies",
    ],
  },
  "frontend-engineer": {
    title: "Frontend Engineer",
    type: "Full-time",
    location: "Remote",
    team: "Engineering",
    about: "We need a frontend engineer who cares about design quality as much as code quality. You'll implement pixel-perfect interfaces and work closely with our design team.",
    responsibilities: [
      "Build responsive, performant web applications with React and TypeScript",
      "Collaborate with designers to implement pixel-perfect UIs",
      "Write clean, maintainable, and well-tested code",
      "Optimize performance and accessibility",
      "Participate in code reviews and technical discussions",
    ],
    requirements: [
      "3+ years of frontend development experience",
      "Strong proficiency in React, TypeScript, and modern CSS",
      "Eye for design and attention to detail",
      "Experience with testing and CI/CD pipelines",
      "Good communication skills",
    ],
    niceToHave: [
      "Experience with Next.js or similar frameworks",
      "Familiarity with design tools like Figma",
      "Experience with animation libraries",
    ],
  },
  "fullstack-developer": {
    title: "Full-Stack Developer",
    type: "Full-time",
    location: "Remote / Dhaka",
    team: "Engineering",
    about: "We're looking for a full-stack developer who can handle both frontend and backend development for client projects. You'll build complete products from the ground up.",
    responsibilities: [
      "Build full-stack web applications using React, Node.js, and PostgreSQL",
      "Design and implement APIs and database schemas",
      "Deploy and maintain applications in production",
      "Write technical documentation",
      "Mentor junior developers",
    ],
    requirements: [
      "4+ years of full-stack development experience",
      "Strong proficiency in React, Node.js, and SQL databases",
      "Experience with cloud platforms (AWS, Vercel, or similar)",
      "Understanding of security best practices",
      "Strong problem-solving skills",
    ],
    niceToHave: [
      "Experience with Supabase or Firebase",
      "Background in DevOps or infrastructure",
      "Open source contributions",
    ],
  },
  "design-intern": {
    title: "Design Intern",
    type: "Internship",
    location: "Dhaka",
    team: "Design",
    about: "A 3-month internship for aspiring product designers. You'll work alongside our senior designers on real client projects and build a professional portfolio.",
    responsibilities: [
      "Assist with UI design tasks on client projects",
      "Help maintain and expand design systems",
      "Conduct competitive research and analysis",
      "Create design assets and documentation",
      "Participate in design critiques and reviews",
    ],
    requirements: [
      "Currently studying or recently graduated in design-related field",
      "Basic proficiency in Figma",
      "Strong interest in product design and UX",
      "Willingness to learn and accept feedback",
      "Available for at least 3 months",
    ],
    niceToHave: [
      "Personal design projects or portfolio",
      "Basic understanding of HTML/CSS",
      "Interest in design systems",
    ],
  },
};

const JobDetail = () => {
  const { slug } = useParams();
  const job = jobsData[slug || ""];

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20 px-6 lg:px-12 max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl font-semibold">Job not found</h1>
          <Link to="/careers" className="text-muted-foreground mt-4 inline-block hover:underline">← Back to careers</Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-6 lg:px-12 max-w-[800px] mx-auto">
        <Link to="/careers" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mb-8">
          ← Back to careers
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{job.team}</span>
          <span className="text-muted-foreground">·</span>
          <span className="text-[12px] font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full">{job.type}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight animate-blur-in">{job.title}</h1>

        <div className="flex items-center gap-6 mt-6 pb-8 border-b border-border">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-[14px] text-muted-foreground">{job.location}</span>
          </div>
        </div>

        {/* About */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">About this role</h2>
          <p className="text-[15px] text-foreground/80 leading-relaxed">{job.about}</p>
        </div>

        {/* Responsibilities */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">Responsibilities</h2>
          <ul className="space-y-3">
            {job.responsibilities.map((r, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-foreground/80">
                <span className="text-muted-foreground mt-1 shrink-0">—</span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">Requirements</h2>
          <ul className="space-y-3">
            {job.requirements.map((r, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-foreground/80">
                <span className="text-muted-foreground mt-1 shrink-0">—</span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Nice to have */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">Nice to have</h2>
          <ul className="space-y-3">
            {job.niceToHave.map((r, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-foreground/80">
                <span className="text-muted-foreground mt-1 shrink-0">—</span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Apply CTA */}
        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="text-2xl font-semibold">Interested?</h2>
          <p className="text-muted-foreground mt-2 mb-6">Send us your portfolio and a brief note about why you'd be a great fit.</p>
          <a
            href={`mailto:careers@studio.dev?subject=Application: ${job.title}`}
            className="inline-block text-[14px] font-medium bg-foreground text-background px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Apply for this role →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobDetail;
