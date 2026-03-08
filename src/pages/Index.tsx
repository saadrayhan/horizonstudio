import { Link } from "react-router-dom";
import { useCountUp, useStaggerReveal, useReveal } from "@/hooks/useReveal";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-landscape.jpg";
import processImg from "@/assets/process-image.jpg";
import caseStudyImg from "@/assets/case-study-1.jpg";

const valueProps = [
  { title: "Product strategy that actually ships", desc: "We run discovery and define scope before a single line of code is written. You'll know exactly what you're building — and why." },
  { title: "Design and engineering, under one roof", desc: "No handoff gaps. Our designers write specs our engineers understand, and our engineers build what was designed." },
  { title: "Move fast without cutting corners", desc: "We ship weekly, not quarterly. But we never sacrifice code quality or design integrity for speed." },
];

const howSteps = [
  { num: "1", title: "See what's at stake", desc: "We map out your product landscape, users, and business constraints before proposing anything." },
  { num: "2", title: "Work from first principles", desc: "We prototype and test before committing to code. Every decision is grounded in real user feedback." },
  { num: "3", title: "Move with conviction", desc: "We ship production-grade code incrementally, with full visibility into progress every week." },
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

      {/* ===== HERO — Split layout ===== */}
      <section className="pt-[72px]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[calc(100vh-72px)]">
            {/* Left — Text */}
            <div className="flex flex-col justify-center py-16 md:py-24 md:pr-12">
              <h1
                className={`font-serif text-[44px] md:text-[56px] lg:text-[64px] text-foreground leading-[1.08] ${loaded ? "animate-blur-in" : "opacity-0"}`}
              >
                The product studio for high-stakes decisions
              </h1>
              <p
                className={`text-[16px] text-muted-foreground mt-6 max-w-[420px] leading-relaxed ${loaded ? "animate-blur-in" : "opacity-0"}`}
                style={{ animationDelay: "200ms" }}
              >
                We help founders navigate product strategy, design, and engineering — with a dedicated team and a proven process.
              </p>
              <div className={`flex items-center gap-4 mt-8 ${loaded ? "animate-blur-in" : "opacity-0"}`} style={{ animationDelay: "350ms" }}>
                <Link
                  to="/contact"
                  className="text-[13px] font-medium bg-foreground text-primary-foreground px-6 py-3 rounded-full hover:bg-foreground/90 transition-colors"
                >
                  Get started →
                </Link>
                <Link
                  to="/work"
                  className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
                >
                  See our work
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-px">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right — Image */}
            <div className={`relative hidden md:flex items-end ${loaded ? "animate-blur-in" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
              <img
                src={heroImg}
                alt="Studio workspace"
                className="w-full h-[85%] object-cover rounded-t-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-border">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[440px]">
                We help startups design, build, and ship products — with a dedicated team and a modern process.
              </p>
            </div>
            <div ref={c1Ref}>
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Projects Shipped</p>
              <p className="text-[32px] font-semibold text-foreground mt-1 font-mono">{c1}+</p>
            </div>
            <div ref={c2Ref}>
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Team Members</p>
              <p className="text-[32px] font-semibold text-foreground mt-1 font-mono">{c2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUE PROPS — 3 cards ===== */}
      <section className="border-t border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <h2 className="font-serif text-3xl md:text-[40px] text-foreground leading-[1.12] max-w-[500px] italic mb-16">
            What matters most for product teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {valueProps.map((v, i) => (
              <div key={i} className="py-8 md:py-0 md:px-8 border-t md:border-t-0 md:border-l border-border first:border-t-0 first:md:border-l-0 first:md:pl-0">
                <span className="text-[13px] font-medium text-foreground/30">0{i + 1}</span>
                <h3 className="text-[18px] font-semibold text-foreground mt-3 mb-3 leading-snug">{v.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE ADD VALUE — Numbered list + image ===== */}
      <section className="border-t border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <h2 className="font-serif text-3xl md:text-[40px] text-foreground leading-[1.12] italic mb-4">
            How we add value
          </h2>
          <div ref={howRef} className="mt-12">
            {howSteps.map((step, i) => (
              <div
                key={i}
                className={`grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr_1fr] gap-4 py-7 border-t border-border transition-all duration-600 ${
                  howVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                <span className="text-[28px] font-serif text-foreground/20">{step.num}</span>
                <h3 className="text-[17px] font-semibold text-foreground self-center">{step.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed col-start-2 md:col-start-3">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/about"
              className="text-[13px] font-medium bg-foreground text-primary-foreground px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors inline-flex"
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SHOWCASE — Image + text split ===== */}
      <section className="border-t border-border bg-secondary/40">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-[40px] text-foreground leading-[1.12] italic">
              Let us show you our best
            </h2>
            <Link to="/work" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors hidden md:block">
              View all →
            </Link>
          </div>

          <div ref={projRef}>
            {projects.map((p, i) => (
              <Link
                to={`/work/${p.slug}`}
                key={p.slug}
                className={`group grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 py-10 border-t border-border transition-all duration-600 ${
                  projVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mt-2 italic">{p.name}</h3>
                  <span className="text-[12px] font-mono text-muted-foreground mt-4">{p.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM PREVIEW ===== */}
      <section className="border-t border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <h2 className="font-serif text-3xl md:text-[40px] text-foreground leading-[1.12] italic mb-4">
            Meet the team you'll work with
          </h2>
          <p className="text-[14px] text-muted-foreground max-w-[400px] mb-12">
            Small team. Individual ownership. Every project gets our full attention.
          </p>

          <div ref={teamRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <div
                key={m.name}
                className={`transition-all duration-500 ${teamVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <div className="aspect-[3/4] bg-muted rounded-xl overflow-hidden mb-4">
                  <img src={processImg} alt={m.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <p className="text-[15px] font-semibold text-foreground">{m.name}</p>
                <p className="text-[13px] text-muted-foreground mt-0.5">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDY SPOTLIGHT ===== */}
      <section className="border-t border-border bg-secondary/40">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div
            ref={caseRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              caseVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Client Spotlight</span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3 leading-[1.15] italic">
                How we redesigned a fashion brand's mobile experience
              </h2>
              <p className="text-[14px] text-muted-foreground mt-4 leading-relaxed">
                "They understood our product from day one. The team was responsive, opinionated in the best way, and delivered something we're genuinely proud of."
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-muted" />
                <div>
                  <p className="text-[13px] font-medium text-foreground">Sarah K.</p>
                  <p className="text-[12px] text-muted-foreground">Founder, Fashion Startup</p>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Conversion</p>
                  <p className="text-[32px] font-semibold text-foreground font-mono">+40%</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Timeline</p>
                  <p className="text-[32px] font-semibold text-foreground font-mono">8 wks</p>
                </div>
              </div>
              <Link to="/work/ecommerce-app" className="inline-flex mt-8 text-[13px] font-medium bg-foreground text-primary-foreground px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors">
                Read case study →
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <img src={caseStudyImg} alt="Case study" className="w-full aspect-[4/5] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
