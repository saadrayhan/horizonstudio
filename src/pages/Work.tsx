import { Link } from "react-router-dom";
import { Reveal, StaggerContainer, StaggerItem, HoverLift, MagneticButton, motion } from "@/components/motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import illustrationAbout from "@/assets/illustration-about.png";

const services = [
  { title: "Product Design", href: "/work" },
  { title: "UI/UX Design", href: "/work" },
  { title: "Full-Stack Development", href: "/work" },
  { title: "Branding & Identity", href: "/work" },
  { title: "Product Strategy", href: "/work" },
];

const strategies = [
  { title: "Discovery & Research", href: "/work" },
  { title: "Prototyping & Testing", href: "/work" },
  { title: "Incremental Delivery", href: "/work" },
  { title: "Launch & Iteration", href: "/work" },
];

const projects = [
  { slug: "branch-management", name: "Branch Management System", category: "Product Design", year: "2025", desc: "End-to-end product design for a multi-branch operations platform serving 200+ locations." },
  { slug: "evwork", name: "EVwork Platform", category: "UI/UX Design", year: "2025", desc: "Workforce management platform for the EV industry." },
  { slug: "ecommerce-app", name: "E-Commerce Mobile App", category: "Design + Development", year: "2024", desc: "Full-stack mobile commerce experience for a fashion brand." },
  { slug: "project-alpha", name: "Project Alpha", category: "Design + Development", year: "2026", desc: "A stealth project currently in development." },
  { slug: "project-beta", name: "Project Beta", category: "Development", year: "2026", desc: "Full-stack platform build for an early-stage startup." },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-[72px] border-b border-border">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="px-[50px] py-20 md:py-28">
            <motion.p
              className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              All Offerings
            </motion.p>
            <motion.h1
              className="font-serif text-[42px] md:text-[52px] text-foreground leading-[1.06]"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
            >
              Here's what we <span className="italic">do</span>
            </motion.h1>
          </div>
          <motion.div
            className="border-l border-border hidden md:flex items-end justify-center px-[50px] pb-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
          >
            <img src={illustrationAbout} alt="Architecture illustration" className="w-full max-w-[280px] h-auto object-contain" />
          </motion.div>
        </div>
      </section>

      {/* Services & Strategies */}
      <section className="border-b border-border">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="px-[50px] py-16 border-r border-border">
            <Reveal><h2 className="font-serif text-[22px] text-foreground mb-6">Services we offer</h2></Reveal>
            <StaggerContainer>
              {services.map((s) => (
                <StaggerItem key={s.title}>
                  <Link
                    to={s.href}
                    className="list-row group flex items-center justify-between py-4 border-t border-border"
                  >
                    <span className="text-[15px] text-foreground group-hover:text-muted-foreground transition-colors">{s.title}</span>
                    <span className="text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all">→</span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
          <div className="px-[50px] py-16">
            <Reveal><h2 className="font-serif text-[22px] text-foreground mb-6">Our process</h2></Reveal>
            <StaggerContainer>
              {strategies.map((s) => (
                <StaggerItem key={s.title}>
                  <Link
                    to={s.href}
                    className="list-row group flex items-center justify-between py-4 border-t border-border"
                  >
                    <span className="text-[15px] text-foreground group-hover:text-muted-foreground transition-colors">{s.title}</span>
                    <span className="text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all">→</span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="border-b border-border">
        <div className="mx-auto px-[50px] py-16">
          <Reveal><h2 className="font-serif text-[22px] text-foreground mb-6">All projects</h2></Reveal>
          <StaggerContainer>
            {projects.map((p) => (
              <StaggerItem key={p.slug}>
                <Link
                  to={`/work/${p.slug}`}
                  className="list-row group grid grid-cols-[60px_1fr_auto] md:grid-cols-[80px_1fr_180px_auto] items-center gap-4 py-5 border-t border-border"
                >
                  <span className="text-[12px] font-mono text-muted-foreground">{p.year}</span>
                  <h3 className="text-[15px] font-semibold text-foreground group-hover:text-muted-foreground transition-colors">{p.name}</h3>
                  <span className="text-[12px] text-muted-foreground hidden md:block">{p.category}</span>
                  <span className="text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all">→</span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;