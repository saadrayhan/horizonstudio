import { Link } from "react-router-dom";
import { useStaggerReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  { slug: "design-systems-at-scale", title: "Design Systems at Scale", excerpt: "How we approach design systems for growing products — and why most teams get it wrong.", category: "Design", date: "Mar 5, 2026", readTime: "6 min" },
  { slug: "why-we-dont-use-sprints", title: "Why We Don't Use Sprints", excerpt: "Our take on agile, deadlines, and why fixed iterations often hurt product quality.", category: "Process", date: "Feb 28, 2026", readTime: "5 min" },
  { slug: "building-for-early-stage", title: "Building for Early-Stage Startups", excerpt: "What founders should know before hiring a design studio.", category: "Strategy", date: "Feb 15, 2026", readTime: "7 min" },
  { slug: "typography-matters", title: "Typography Matters More Than You Think", excerpt: "The invisible design decision that shapes how users feel about your product.", category: "Design", date: "Jan 20, 2026", readTime: "4 min" },
  { slug: "full-stack-small-team", title: "Full-Stack With a Small Team", excerpt: "How we ship production-grade code with just five people.", category: "Engineering", date: "Jan 8, 2026", readTime: "5 min" },
  { slug: "saying-no-to-clients", title: "Saying No to Clients", excerpt: "Why turning down work is the best thing we do for quality.", category: "Culture", date: "Dec 15, 2025", readTime: "4 min" },
];

const Blog = () => {
  const { ref, visibleItems } = useStaggerReveal(posts.length - 1, 0.05, 100);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-10 px-6 lg:px-12 max-w-[1300px] mx-auto">
        <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Blog</p>
        <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[1.05] animate-blur-in">
          Thinking out loud.
        </h1>
        <p className="text-[16px] text-muted-foreground mt-5 max-w-[480px] leading-relaxed animate-blur-in" style={{ animationDelay: "150ms" }}>
          Writing about design, development, and building products that matter.
        </p>
      </section>

      {/* Featured */}
      <section className="border-t border-border">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-12">
          <Link to={`/blog/${posts[0].slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="aspect-[16/10] bg-secondary rounded-2xl border border-border overflow-hidden">
              <div className="w-full h-full bg-muted group-hover:scale-[1.03] transition-transform duration-700" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{posts[0].category}</span>
                <span className="text-muted-foreground/30">·</span>
                <span className="text-[12px] text-muted-foreground">{posts[0].date}</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground group-hover:text-muted-foreground transition-colors">{posts[0].title}</h2>
              <p className="text-[14px] text-muted-foreground mt-3 leading-relaxed">{posts[0].excerpt}</p>
              <span className="text-[12px] font-mono text-muted-foreground mt-4">{posts[0].readTime} read</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="border-t border-border">
        <div ref={ref} className="max-w-[1300px] mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
          {posts.slice(1).map((p, i) => (
            <Link to={`/blog/${p.slug}`} key={p.slug} className={`group transition-all duration-500 ${visibleItems[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="aspect-[16/10] bg-secondary rounded-2xl mb-4 border border-border overflow-hidden">
                <div className="w-full h-full bg-muted group-hover:scale-[1.03] transition-transform duration-700" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{p.category}</span>
                <span className="text-muted-foreground/30">·</span>
                <span className="text-[12px] text-muted-foreground">{p.readTime}</span>
              </div>
              <h3 className="text-[17px] font-semibold text-foreground group-hover:text-muted-foreground transition-colors">{p.title}</h3>
              <p className="text-[13px] text-muted-foreground mt-1.5 leading-relaxed">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
