import { Link } from "react-router-dom";
import { useReveal, useCountUp, useStaggerReveal } from "@/hooks/useReveal";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-landscape.jpg";
import processImg from "@/assets/process-image.jpg";
import caseStudyImg from "@/assets/case-study-1.jpg";

const services = [
  { icon: "✦", title: "Product Design", desc: "Research-driven interface design and systems built for real users and real constraints.", size: "large" },
  { icon: "⬡", title: "Full-Stack Development", desc: "Frontend and backend that ships fast and scales cleanly.", size: "small" },
  { icon: "◈", title: "Branding & Identity", desc: "Visual identity systems that make products memorable.", size: "small" },
  { icon: "△", title: "Product Strategy", desc: "Discovery and scoping before a single line of code is written. We help you build the right thing.", size: "large" },
];

const projects = [
  { slug: "branch-management", name: "Branch Management System", category: "Product Design", year: "2025" },
  { slug: "evwork", name: "EVwork Platform", category: "UI/UX Design", year: "2025" },
  { slug: "ecommerce-app", name: "E-Commerce Mobile App", category: "Design + Dev", year: "2024" },
];

const processSteps = [
  { num: "01", title: "Discover", desc: "We dig into your problem space, users, and business constraints." },
  { num: "02", title: "Design", desc: "We prototype and test before committing to code." },
  { num: "03", title: "Build", desc: "We ship production-grade code, incrementally." },
  { num: "04", title: "Launch", desc: "We help you deploy, measure, and iterate." },
];

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref: c1Ref, count: c1 } = useCountUp(12, 1400);
  const { ref: c2Ref, count: c2 } = useCountUp(5, 1200);
  const { ref: servRef, visibleItems: servVis } = useStaggerReveal(4, 0.08, 150);
  const { ref: projRef, visibleItems: projVis } = useStaggerReveal(3, 0.08, 150);
  const { ref: procRef, visibleItems: procVis } = useStaggerReveal(4, 0.1, 120);
  const { ref: caseRef, visible: caseVis } = useReveal(0.1);

  useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="dark" />

      {/* ===== HERO ===== */}
      <section className="relative h-screen min-h-[700px] overflow-hidden hero-overlay">
        <img
          src={heroImg}
          alt="Mountain landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className={`${loaded ? "animate-blur-in" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[11px] font-mono text-white/70 uppercase tracking-wider">Available for new projects</span>
            </div>
          </div>
          <h1
            className={`font-serif text-5xl md:text-7xl lg:text-[84px] text-white leading-[1.05] max-w-[800px] ${loaded ? "animate-blur-in" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            We design products worth shipping.
          </h1>
          <p
            className={`text-[16px] text-white/60 mt-6 max-w-[440px] leading-relaxed ${loaded ? "animate-blur-in" : "opacity-0"}`}
            style={{ animationDelay: "400ms" }}
          >
            A design-first product studio for startups and growing companies.
          </p>
          <div className={`mt-8 ${loaded ? "animate-blur-in" : "opacity-0"}`} style={{ animationDelay: "550ms" }}>
            <Link
              to="/contact"
              className="text-[13px] font-medium bg-white text-foreground px-7 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10">
          <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
            <p className="text-[12px] text-white/40 hidden md:block">
              Trusted by founders building the next generation of products.
            </p>
            <div className="flex items-center gap-10">
              <div ref={c1Ref}>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-wider">Projects</p>
                <p className="text-2xl font-semibold text-white">{c1}+</p>
              </div>
              <div ref={c2Ref}>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-wider">Team</p>
                <p className="text-2xl font-semibold text-white">{c2}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-wider">Languages</p>
                <p className="text-2xl font-semibold text-white">3</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES — Bento Grid ===== */}
      <section className="bg-background">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-24 md:py-32">
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Our services</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] max-w-[500px] mb-14">
            Built to handle complexity
          </h2>

          <div ref={servRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className={`bento-card rounded-2xl border border-border bg-card p-8 md:p-10 transition-all duration-600 ${
                  s.size === "large" ? "md:row-span-1" : ""
                } ${servVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <span className="text-2xl text-muted-foreground">{s.icon}</span>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{s.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[360px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS — Image + Steps ===== */}
      <section className="section-dark">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[11px] font-mono text-white/40 uppercase tracking-wider mb-3">How we work</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-[1.1] mb-6">
                Improve as you go
              </h2>
              <p className="text-[15px] text-white/50 leading-relaxed max-w-[420px] mb-10">
                We don't disappear for months. Our process is collaborative and transparent — you'll see progress every week.
              </p>
              <div ref={procRef} className="space-y-0">
                {processSteps.map((step, i) => (
                  <div
                    key={i}
                    className={`flex gap-5 py-5 border-t border-white/10 transition-all duration-500 ${
                      procVis[i] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                  >
                    <span className="text-[12px] font-mono text-white/30 mt-1 shrink-0">{step.num}</span>
                    <div>
                      <h4 className="text-[16px] font-semibold text-white mb-1">{step.title}</h4>
                      <p className="text-[13px] text-white/45 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={processImg}
                alt="Designer working"
                className="w-full rounded-2xl object-cover aspect-[4/5]"
              />
              {/* Floating card overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-lg max-w-[240px] hidden md:block">
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-1">Avg. delivery</p>
                <p className="text-3xl font-semibold text-foreground">8 weeks</p>
                <p className="text-[12px] text-muted-foreground mt-1">From discovery to launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SELECTED WORK ===== */}
      <section className="bg-background">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-24 md:py-32">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Selected work</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
                Recent projects
              </h2>
            </div>
            <Link to="/work" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors hidden md:block">
              View all →
            </Link>
          </div>
          <div ref={projRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <Link
                to={`/work/${p.slug}`}
                key={p.slug}
                className={`group block transition-all duration-600 ${
                  projVis[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="aspect-[4/3] bg-secondary rounded-2xl mb-4 overflow-hidden relative border border-border">
                  <div className="w-full h-full bg-muted group-hover:scale-[1.03] transition-transform duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[13px] font-medium text-foreground bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg">
                      View project →
                    </span>
                  </div>
                </div>
                <h3 className="text-[16px] font-semibold text-foreground">{p.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[12px] text-muted-foreground">{p.category}</span>
                  <span className="text-muted-foreground/30">·</span>
                  <span className="text-[12px] font-mono text-muted-foreground">{p.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDY SPOTLIGHT ===== */}
      <section className="bg-secondary/50">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-24 md:py-32">
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Client spotlight</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-[1.15] max-w-[550px] mb-12">
            See how startups shipped faster with our studio
          </h2>

          <div
            ref={caseRef}
            className={`grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 transition-all duration-800 ${
              caseVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img src={caseStudyImg} alt="Case study" className="w-full aspect-[4/3] object-cover" />
              <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg">
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Conversion rate</p>
                <p className="text-4xl font-semibold text-foreground">+40%</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-[12px] font-mono text-muted-foreground px-2.5 py-0.5 rounded-md border border-border">E-Commerce</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                How we redesigned a fashion brand's mobile experience
              </h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed mb-6">
                "They understood our product from day one. The team was responsive, opinionated in the best way, and delivered something we're genuinely proud of."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary border border-border" />
                <div>
                  <p className="text-[13px] font-medium text-foreground">Sarah K.</p>
                  <p className="text-[12px] text-muted-foreground">Founder, Fashion Startup</p>
                </div>
              </div>
              <Link to="/work/ecommerce-app" className="mt-6 text-[13px] font-medium text-foreground hover:text-muted-foreground transition-colors">
                Read case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
