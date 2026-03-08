import { Link } from "react-router-dom";
import { useStaggerReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const featured = [
  { slug: "design-systems-at-scale", title: "Design Systems at Scale", date: "Mar 5, 2026", category: "Design" },
];

const recent = [
  { slug: "why-we-dont-use-sprints", title: "Why We Don't Use Sprints", date: "Feb 28, 2026", category: "Process" },
  { slug: "building-for-early-stage", title: "Building for Early-Stage Startups", date: "Feb 15, 2026", category: "Strategy" },
  { slug: "typography-matters", title: "Typography Matters More Than You Think", date: "Jan 20, 2026", category: "Design" },
];

const allPosts = [
  { slug: "design-systems-at-scale", title: "Design Systems at Scale", category: "Design", readTime: "6 min" },
  { slug: "why-we-dont-use-sprints", title: "Why We Don't Use Sprints", category: "Process", readTime: "5 min" },
  { slug: "building-for-early-stage", title: "Building for Early-Stage Startups", category: "Strategy", readTime: "7 min" },
  { slug: "typography-matters", title: "Typography Matters More Than You Think", category: "Design", readTime: "4 min" },
  { slug: "full-stack-small-team", title: "Full-Stack With a Small Team", category: "Engineering", readTime: "5 min" },
  { slug: "saying-no-to-clients", title: "Saying No to Clients", category: "Culture", readTime: "4 min" },
];

const Blog = () => {
  const { ref, visibleItems } = useStaggerReveal(allPosts.length, 0.05, 80);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-[72px] border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-16 md:py-20 text-center">
          <h1 className="font-serif text-[48px] md:text-[64px] text-foreground leading-[1.06] animate-blur-in">
            The [STUDIO] <span className="italic">Journal</span>
          </h1>
        </div>
      </section>

      {/* Featured — Titan style split */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-4">
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Featured</p>
        </div>
        <div className="max-w-[1240px] mx-auto border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]">
            {/* Featured post — left */}
            <Link to={`/blog/${featured[0].slug}`} className="group px-6 lg:px-10 py-10 border-r border-border">
              <div className="aspect-[4/3] bg-muted mb-6" />
              <p className="text-[12px] font-mono text-muted-foreground uppercase tracking-wider mb-2">{featured[0].date}</p>
              <h2 className="font-serif text-[24px] md:text-[28px] text-foreground group-hover:text-muted-foreground transition-colors">{featured[0].title}</h2>
            </Link>

            {/* Recent posts — right stacked */}
            <div className="flex flex-col">
              {recent.map((p, i) => (
                <Link
                  to={`/blog/${p.slug}`}
                  key={p.slug}
                  className="group px-6 lg:px-10 py-5 border-t border-border first:border-t-0 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-[15px] font-semibold text-foreground group-hover:text-muted-foreground transition-colors">{p.title}</h3>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[12px] font-mono text-muted-foreground hidden sm:block">{p.date}</span>
                    <span className="text-foreground/40 group-hover:text-foreground transition-colors">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All articles — grid of cards */}
      <section className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-[22px] text-foreground">All articles</h2>
            <span className="text-[12px] font-mono text-muted-foreground">All Categories</span>
          </div>
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {allPosts.map((p, i) => (
              <Link
                to={`/blog/${p.slug}`}
                key={p.slug}
                className={`group border border-border p-6 -mt-px -ml-px transition-all duration-400 hover:bg-secondary/50 ${
                  visibleItems[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="aspect-[4/3] bg-muted mb-4" />
                <h3 className="text-[15px] font-semibold text-foreground group-hover:text-muted-foreground transition-colors mb-2">{p.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{p.category}</span>
                  <span className="text-muted-foreground/30">·</span>
                  <span className="text-[12px] text-muted-foreground">{p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
