import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  { slug: "design-systems-at-scale", title: "Design Systems at Scale", excerpt: "How we approach design systems for growing products — and why most teams get it wrong.", category: "Design", date: "Mar 5, 2026" },
  { slug: "why-we-dont-use-sprints", title: "Why We Don't Use Sprints", excerpt: "Our take on agile, deadlines, and why fixed iterations often hurt product quality.", category: "Process", date: "Feb 28, 2026" },
  { slug: "building-for-early-stage", title: "Building for Early-Stage Startups", excerpt: "What founders should know before hiring a design studio. Lessons from 12+ projects.", category: "Strategy", date: "Feb 15, 2026" },
  { slug: "typography-matters", title: "Typography Matters More Than You Think", excerpt: "The invisible design decision that shapes how users feel about your product.", category: "Design", date: "Jan 20, 2026" },
  { slug: "full-stack-small-team", title: "Full-Stack With a Small Team", excerpt: "How we ship production-grade code with just five people.", category: "Engineering", date: "Jan 8, 2026" },
  { slug: "saying-no-to-clients", title: "Saying No to Clients", excerpt: "Why turning down work is the best thing we do for quality.", category: "Culture", date: "Dec 15, 2025" },
];

const Blog = () => {
  const { ref, visible } = useReveal(0.05);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-8 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">Blog</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight animate-blur-in">
          Thinking out loud.
        </h1>
        <p className="text-muted-foreground mt-4 max-w-[480px] animate-blur-in" style={{ animationDelay: "150ms" }}>
          Writing about design, development, and building products that matter.
        </p>
      </section>

      <div className="border-t border-border" />

      {/* Featured post */}
      <section className="px-6 lg:px-12 max-w-[1200px] mx-auto py-12">
        <Link to={`/blog/${posts[0].slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[16/10] bg-secondary rounded-lg overflow-hidden">
            <div className="w-full h-full bg-muted group-hover:scale-[1.02] transition-transform duration-500" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{posts[0].category}</span>
              <span className="text-[11px] text-muted-foreground">·</span>
              <span className="text-[11px] font-mono text-muted-foreground">{posts[0].date}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold group-hover:underline">{posts[0].title}</h2>
            <p className="text-[14px] text-muted-foreground mt-3 leading-relaxed">{posts[0].excerpt}</p>
          </div>
        </Link>
      </section>

      <div className="border-t border-border" />

      {/* Post grid */}
      <section ref={ref} className="px-6 lg:px-12 max-w-[1200px] mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {posts.slice(1).map((p, i) => (
            <Link
              to={`/blog/${p.slug}`}
              key={p.slug}
              className="group scroll-fade"
              style={{
                transitionDelay: `${i * 80}ms`,
                ...(visible ? { opacity: 1, transform: "translateY(0)" } : {}),
              }}
            >
              <div className="aspect-[16/10] bg-secondary rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-muted group-hover:scale-[1.02] transition-transform duration-500" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{p.category}</span>
                <span className="text-[11px] text-muted-foreground">·</span>
                <span className="text-[11px] font-mono text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="text-lg font-semibold group-hover:underline">{p.title}</h3>
              <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
