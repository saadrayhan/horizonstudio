import { Link } from "react-router-dom";
import { useStaggerReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import processImg from "@/assets/process-image.jpg";

const cultureBlocks = [
  { text: "Our ambitions are to be category defining. This means pursuing an experience that's nothing short of extraordinary." },
  { text: "We have a vibrant, in-office culture based out of our studio in Dhaka." },
  { text: "Our team has deep experience from best-of-breed tech companies and design agencies." },
];

const departments: { name: string; jobs: { slug: string; title: string; location: string; type: string }[] }[] = [
  {
    name: "Design",
    jobs: [
      { slug: "senior-product-designer", title: "Senior Product Designer", location: "Remote / Dhaka", type: "Full-time" },
      { slug: "design-intern", title: "Design Intern", location: "Dhaka", type: "Internship" },
    ],
  },
  {
    name: "Engineering",
    jobs: [
      { slug: "frontend-engineer", title: "Frontend Engineer", location: "Remote", type: "Full-time" },
      { slug: "fullstack-developer", title: "Full-Stack Developer", location: "Remote / Dhaka", type: "Full-time" },
    ],
  },
];

const Careers = () => {
  const { ref: jobRef, visibleItems: jobVis } = useStaggerReveal(4, 0.08, 80);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-[72px] border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <h1 className="font-serif text-[42px] md:text-[52px] text-foreground leading-[1.06] animate-blur-in">
            Careers <span className="italic">at [STUDIO]</span>
          </h1>
          <p className="text-[14px] text-muted-foreground mt-4 max-w-[460px] leading-relaxed animate-blur-in" style={{ animationDelay: "150ms" }}>
            We're looking for talented people who hold themselves to the highest standard. No bureaucracy — just meaningful work.
          </p>
        </div>
      </section>

      {/* Culture — Bento photo grid like Titan */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto">
          <div className="px-6 lg:px-10 py-16 md:py-20">
            <h2 className="font-serif text-[28px] md:text-[36px] text-foreground leading-[1.1] max-w-[500px]">
              Our DNA is defined by holding an uncompromisingly high bar for who we hire, and giving them wide latitude to make <span className="italic">decisions.</span>
            </h2>
          </div>

          {/* Asymmetric photo bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
            {cultureBlocks.map((b, i) => (
              <div key={i} className={`border-r border-border last:border-r-0 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <img src={processImg} alt="Culture" className="w-full h-full object-cover" />
                </div>
                <div className="px-6 py-6">
                  <p className="text-[13px] text-foreground/70 leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings — grouped by department like Titan */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-16 md:py-20">
          <h2 className="font-serif text-[28px] text-foreground mb-8">Apply to join our team</h2>

          <div ref={jobRef}>
            {departments.map((dept) => (
              <div key={dept.name} className="mb-8">
                <p className="text-[13px] font-semibold text-foreground mb-1">{dept.name}</p>
                {dept.jobs.map((j, i) => (
                  <Link
                    to={`/careers/${j.slug}`}
                    key={j.slug}
                    className={`list-row group flex items-center justify-between py-4 border-t border-border transition-all duration-400 ${
                      jobVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[14px] text-foreground group-hover:text-muted-foreground transition-colors">{j.title}</span>
                      {j.type !== "Full-time" && (
                        <span className="text-[10px] font-mono text-muted-foreground px-2 py-0.5 rounded border border-border">{j.type}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] text-muted-foreground hidden sm:block">{j.location}</span>
                      <span className="text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we're looking for */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto">
          <div className="px-6 lg:px-10 py-12">
            <h2 className="font-serif text-[28px] text-foreground mb-6">What we're looking for</h2>
          </div>
          <div className="border-t border-border">
            <div className="aspect-[21/9] bg-foreground flex items-center justify-center px-10">
              <p className="text-[18px] md:text-[24px] font-serif text-primary-foreground italic text-center max-w-[500px]">
                "What ultimately matters is someone who values creating value for people."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
