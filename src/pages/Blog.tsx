import { Link } from "react-router-dom";
import { Reveal, StaggerContainer, StaggerItem, motion } from "@/components/motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import illustrationBlog3 from "@/assets/illustration-blog-3.png";
import illustrationBlog1 from "@/assets/illustration-blog-1.png";
import illustrationBlog2 from "@/assets/illustration-blog-2.png";

const featured = [
  { slug: "design-systems-at-scale", title: "Design Systems at Scale", date: "Mar 5, 2026", category: "Design" },
];

const recent = [
  { slug: "why-we-dont-use-sprints", title: "Why We Don't Use Sprints", date: "Feb 28, 2026", category: "Process" },
  { slug: "building-for-early-stage", title: "Building for Early-Stage Startups", date: "Feb 15, 2026", category: "Strategy" },
  { slug: "typography-matters", title: "Typography Matters More Than You Think", date: "Jan 20, 2026", category: "Design" },
];

const illustrations = [illustrationBlog1, illustrationBlog2, illustrationBlog3, illustrationBlog1, illustrationBlog2, illustrationBlog3];

const allPosts = [
  { slug: "design-systems-at-scale", title: "Design Systems at Scale", category: "Design", readTime: "6 min" },
  { slug: "why-we-dont-use-sprints", title: "Why We Don't Use Sprints", category: "Process", readTime: "5 min" },
  { slug: "building-for-early-stage", title: "Building for Early-Stage Startups", category: "Strategy", readTime: "7 min" },
  { slug: "typography-matters", title: "Typography Matters More Than You Think", category: "Design", readTime: "4 min" },
  { slug: "full-stack-small-team", title: "Full-Stack With a Small Team", category: "Engineering", readTime: "5 min" },
  { slug: "saying-no-to-clients", title: "Saying No to Clients", category: "Culture", readTime: "4 min" },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-[72px] border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-16 md:py-20 flex items-center justify-between">
          <motion.h1
            className="font-serif text-[48px] md:text-[64px] text-foreground leading-[1.06]"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            The Horizon
          </motion.h1>
          <motion.img
            src={illustrationBlog3}
            alt="Journal"
            className="w-24 md:w-36 h-auto hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
          />
          <motion.span
            className="font-serif text-[48px] md:text-[64px] text-foreground leading-[1.06] italic"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          >
            Journal
          </motion.span>
        </div>
      </section>

      {/* Featured */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-4">
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Featured</p>
        </div>
        <div className="max-w-[1240px] mx-auto border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]">
            <Reveal className="border-r border-border">
              <Link to={`/blog/${featured[0].slug}`} className="group px-6 lg:px-10 py-10 block">
                <div className="aspect-[4/3] bg-secondary/40 flex items-center justify-center mb-6 overflow-hidden">
                  <motion.img
                    src={illustrationBlog1}
                    alt="Featured article"
                    className="w-32 h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                </div>
                <p className="text-[12px] font-mono text-muted-foreground uppercase tracking-wider mb-2">{featured[0].date}</p>
                <h2 className="font-serif text-[24px] md:text-[28px] text-foreground group-hover:text-muted-foreground transition-colors">{featured[0].title}</h2>
              </Link>
            </Reveal>

            <StaggerContainer className="flex flex-col">
              {recent.map((p) => (
                <StaggerItem key={p.slug}>
                  <Link
                    to={`/blog/${p.slug}`}
                    className="list-row group px-6 lg:px-10 py-5 border-t border-border first:border-t-0 flex items-center justify-between"
                  >
                    <h3 className="text-[15px] font-semibold text-foreground group-hover:text-muted-foreground transition-colors">{p.title}</h3>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[12px] font-mono text-muted-foreground hidden sm:block">{p.date}</span>
                      <span className="text-foreground/40 group-hover:text-foreground transition-colors">→</span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* All articles */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="px-6 lg:px-10 py-12 flex items-center justify-between">
            <h2 className="font-serif text-[22px] text-foreground">All articles</h2>
            <span className="text-[12px] font-mono text-muted-foreground">All Categories</span>
          </Reveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
            {allPosts.map((p, i) => (
              <StaggerItem key={p.slug}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="group px-6 lg:px-8 py-8 border-r border-border border-b last:border-r-0 [&:nth-child(3n)]:border-r-0 block hover:bg-secondary/40 transition-colors"
                >
                  <div className="aspect-[4/3] bg-secondary/30 flex items-center justify-center mb-4 overflow-hidden">
                    <motion.img
                      src={illustrations[i]}
                      alt={p.title}
                      className="w-20 h-auto"
                      whileHover={{ scale: 1.08, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    />
                  </div>
                  <h3 className="text-[15px] font-semibold text-foreground group-hover:text-muted-foreground transition-colors mb-2">{p.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{p.category}</span>
                    <span className="text-muted-foreground/30">·</span>
                    <span className="text-[12px] text-muted-foreground">{p.readTime}</span>
                  </div>
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

export default Blog;
