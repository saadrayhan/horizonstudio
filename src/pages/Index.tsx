import { Link } from "react-router-dom";
import { useCountUp, useStaggerReveal, useReveal } from "@/hooks/useReveal";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-landscape.jpg";
import processImg from "@/assets/process-image.jpg";
import caseStudyImg from "@/assets/case-study-1.jpg";

const decisions = [
  { title: "You're building your first product →", desc: "First-time founders need a partner who can translate vision into a shippable product — without burning through runway." },
  { title: "Your product needs a redesign →", desc: "Existing products that have outgrown their original design need a strategic rethink, not just a reskin." },
  { title: "You need to ship faster →", desc: "Scaling teams need design and engineering support that integrates seamlessly with their existing workflows." },
];

const howSteps = [
  { num: "1", title: "See what's at stake", desc: "We map your product landscape, users, and constraints before proposing anything." },
  { num: "2", title: "Work from first principles", desc: "We prototype and test ideas with real users before committing to code." },
  { num: "3", title: "Move with conviction", desc: "We ship production-grade code incrementally — with full visibility every week." },
];

const projects = [
  { slug: "branch-management", name: "Branch Management System", category: "Product Design", year: "2025" },
  { slug: "evwork", name: "EVwork Platform", category: "UI/UX Design", year: "2025" },
  { slug: "ecommerce-app", name: "E-Commerce Mobile App", category: "Design + Dev", year: "2024" },
];

const team = [
  { name: "Ahmed R.", role: "Founder & Design Lead" },
  { name: "Farhan K.", role: "Full-Stack Developer" },
  { name: "Nadia S.", role: "UX Researcher" },
];

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: c1Ref, count: c1 } = useCountUp(12, 1400);
  const { ref: c2Ref, count: c2 } = useCountUp(5, 1200);
  const { ref: howRef, visibleItems: howVis } = useStaggerReveal(3, 0.1, 150);
  const { ref: projRef, visibleItems: projVis } = useStaggerReveal(3, 0.08, 140);
  const { ref: teamRef, visibleItems: teamVis } = useStaggerReveal(3, 0.1, 120);
  const { ref: caseRef, visible: caseVis } = useReveal(0.1);

  useEffect(() => { setTimeout(() => setLoaded(true), 60); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ===== HERO — Split grid with visible border ===== */}
      <section className="pt-[72px] border-b border-border">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] min-h-[calc(100vh-72px)]">
            {/* Left */}
            <div className="flex flex-col justify-end px-6 lg:px-10 py-16 md:py-20">
              <h1
                className={`font-serif text-[42px] md:text-[52px] lg:text-[60px] text-foreground leading-[1.06] ${loaded ? "animate-blur-in" : "opacity-0"}`}
              >
                The product studio for
                high-stakes <span className="italic">decisions</span>
              </h1>
              <p
                className={`text-[15px] text-muted-foreground mt-6 max-w-[400px] leading-relaxed ${loaded ? "animate-blur-in" : "opacity-0"}`}
                style={{ animationDelay: "180ms" }}
              >
                We help founders navigate product strategy, design, and engineering — with a dedicated team and a proven process.
              </p>
              <div className={`flex items-center gap-4 mt-8 ${loaded ? "animate-blur-in" : "opacity-0"}`} style={{ animationDelay: "320ms" }}>
                <Link
                  to="/contact"
                  className="text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-3 rounded-full hover:bg-foreground/90 transition-colors"
                >
                  Get started →
                </Link>
                <Link to="/work" className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                  See why
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right — image with left border */}
            <div className={`hidden md:block border-l border-border ${loaded ? "animate-blur-in" : "opacity-0"}`} style={{ animationDelay: "250ms" }}>
              <img
                src={heroImg}
                alt="Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip — bordered grid cells */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4">
          <div className="px-6 lg:px-10 py-6 md:col-span-1 border-r border-border">
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              We help startups design, build, and ship products that solve real problems.
            </p>
          </div>
          <div className="px-6 lg:px-10 py-6 border-r border-border hidden md:block">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Avg. Delivery</p>
            <p className="text-[28px] font-serif text-foreground mt-1">8 weeks</p>
          </div>
          <div ref={c1Ref} className="px-6 lg:px-10 py-6 border-r border-border">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Projects</p>
            <p className="text-[28px] font-mono font-semibold text-foreground mt-1">{c1}+</p>
          </div>
          <div ref={c2Ref} className="px-6 lg:px-10 py-6">
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Team</p>
            <p className="text-[28px] font-mono font-semibold text-foreground mt-1">{c2}</p>
          </div>
        </div>
      </section>

      {/* ===== MATTERS MOST — 3 clickable rows ===== */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <h2 className="font-serif text-[32px] md:text-[40px] text-foreground leading-[1.1] mb-14">
            [STUDIO] matters most for <span className="italic">high-stakes decisions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {decisions.map((d, i) => (
              <div key={i} className={`px-0 md:px-6 py-8 md:py-0 border-t md:border-t-0 md:border-l border-border first:border-t-0 first:md:border-l-0 first:md:pl-0`}>
                <h3 className="text-[16px] font-semibold text-foreground mb-3 leading-snug">{d.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE ADD VALUE — numbered rows with grid ===== */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <h2 className="font-serif text-[32px] md:text-[40px] text-foreground leading-[1.1] mb-4">
            How we add value
          </h2>
          <div ref={howRef} className="mt-12">
            {howSteps.map((step, i) => (
              <div
                key={i}
                className={`grid grid-cols-[32px_1fr] md:grid-cols-[48px_200px_1fr] gap-4 md:gap-6 py-6 border-t border-border transition-all duration-500 ${
                  howVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="text-[14px] font-mono text-muted-foreground self-start mt-0.5">{step.num}</span>
                <h3 className="text-[16px] font-semibold text-foreground">{step.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed col-start-2 md:col-start-3">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <Link
              to="/about"
              className="text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors inline-flex"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BENTO SECTION — Photo + text asymmetric grid ===== */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left — large text block */}
            <div className="px-6 lg:px-10 py-16 md:py-20 flex flex-col justify-center">
              <h2 className="font-serif text-[28px] md:text-[36px] text-foreground leading-[1.12]">
                Let us <span className="italic">show you</span> our best work
              </h2>
              <p className="text-[14px] text-muted-foreground mt-4 max-w-[380px] leading-relaxed">
                Every project gets our full attention. We don't scale — we focus.
              </p>
            </div>
            {/* Right — image */}
            <div className="border-l border-border hidden md:block">
              <img src={processImg} alt="Our process" className="w-full h-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SELECTED WORK — list rows with arrows ===== */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between mb-2">
            <h2 className="font-serif text-[28px] md:text-[36px] text-foreground">
              Selected <span className="italic">projects</span>
            </h2>
            <Link to="/work" className="text-[12px] font-mono text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
              View all →
            </Link>
          </div>

          <div ref={projRef}>
            {projects.map((p, i) => (
              <Link
                to={`/work/${p.slug}`}
                key={p.slug}
                className={`list-row group flex items-center justify-between py-5 border-t border-border transition-all duration-500 ${
                  projVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className="text-[12px] font-mono text-muted-foreground w-16">{p.year}</span>
                  <h3 className="text-[16px] font-semibold text-foreground group-hover:text-muted-foreground transition-colors">{p.name}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[12px] text-muted-foreground hidden sm:block">{p.category}</span>
                  <span className="text-foreground group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM — grid with photos ===== */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-[28px] md:text-[36px] text-foreground">
              Meet the <span className="italic">advisors</span> you'll work with
            </h2>
          </div>

          <div ref={teamRef} className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {team.map((m, i) => (
              <div
                key={m.name}
                className={`border-l border-border first:border-l-0 px-0 sm:px-6 first:sm:pl-0 py-6 sm:py-0 border-t sm:border-t-0 first:border-t-0 transition-all duration-500 ${
                  teamVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <p className="font-serif text-[22px] text-foreground italic mb-3">
                  {m.name.split(' ')[0]}<br/>{m.name.split(' ')[1] || ''}
                </p>
                <div className="aspect-[3/4] bg-muted rounded-none overflow-hidden mb-4">
                  <img src={processImg} alt={m.name} className="w-full h-full object-cover grayscale" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDY — Bento asymmetric with stats ===== */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto">
          <div
            ref={caseRef}
            className={`grid grid-cols-1 md:grid-cols-2 transition-all duration-700 ${
              caseVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Left text */}
            <div className="px-6 lg:px-10 py-16 md:py-20 flex flex-col justify-center">
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">Client Spotlight</p>
              <h2 className="font-serif text-[28px] md:text-[36px] text-foreground leading-[1.12]">
                How we redesigned a fashion brand's <span className="italic">mobile experience</span>
              </h2>
              <p className="text-[14px] text-muted-foreground mt-4 leading-relaxed max-w-[400px]">
                "They understood our product from day one. The team was responsive, opinionated in the best way, and delivered something we're genuinely proud of."
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-muted" />
                <div>
                  <p className="text-[13px] font-semibold text-foreground">Sarah K.</p>
                  <p className="text-[12px] text-muted-foreground">Founder, Fashion Startup</p>
                </div>
              </div>

              {/* Stats in bordered grid */}
              <div className="grid grid-cols-2 mt-10 border-t border-border">
                <div className="py-4 pr-6 border-r border-border">
                  <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Conversion</p>
                  <p className="text-[28px] font-mono font-semibold text-foreground mt-1">+40%</p>
                </div>
                <div className="py-4 pl-6">
                  <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Timeline</p>
                  <p className="text-[28px] font-mono font-semibold text-foreground mt-1">8 wks</p>
                </div>
              </div>

              <Link to="/work/ecommerce-app" className="inline-flex mt-6 text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors">
                Read case study →
              </Link>
            </div>

            {/* Right image */}
            <div className="border-l border-border hidden md:block">
              <img src={caseStudyImg} alt="Case study" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
