import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const postsData: Record<string, { title: string; category: string; date: string; author: string; readTime: string; content: string[] }> = {
  "design-systems-at-scale": {
    title: "Design Systems at Scale", category: "Design", date: "Mar 5, 2026", author: "Ahmed R.", readTime: "6 min read",
    content: [
      "Design systems are often built too early or too late. Most teams either over-engineer a system before they have product-market fit, or they realize they need one after three years of inconsistent UI.",
      "We've learned that the right time to invest in a design system is when you have 2-3 products or features that share common patterns. Before that, you're guessing. After that, you're drowning in tech debt.",
      "The key principles we follow: start with tokens (colors, spacing, typography), then build components from actual product needs — not hypothetical ones.",
      "We use a tiered approach: primitives (buttons, inputs, cards), compositions (forms, headers, navigation), and templates (page layouts, flows).",
      "The biggest mistake we see? Building a design system as a separate project. It should live alongside your product.",
    ],
  },
  "why-we-dont-use-sprints": {
    title: "Why We Don't Use Sprints", category: "Process", date: "Feb 28, 2026", author: "Farhan K.", readTime: "5 min read",
    content: [
      "Sprints create an artificial sense of urgency. When you force work into two-week cycles, you optimize for velocity — not quality.",
      "We work in what we call 'natural cycles.' Work takes as long as it needs to take, but we maintain daily visibility through async standups and weekly demos.",
      "This approach requires trust — from both the team and the client. But the result is consistently better work.",
      "We still estimate. We still have milestones. But we don't pretend that creative problem-solving fits neatly into 10-day boxes.",
    ],
  },
  "building-for-early-stage": {
    title: "Building for Early-Stage Startups", category: "Strategy", date: "Feb 15, 2026", author: "Ahmed R.", readTime: "7 min read",
    content: [
      "Early-stage startups need speed, but not at the cost of quality. The decisions you make in the first 6 months will compound for years.",
      "We always start with a 2-week discovery phase. This isn't a luxury — it's insurance against building the wrong thing.",
      "Our stack for early-stage: React or React Native, Supabase for the backend, and Figma for design. Simple, proven, fast to iterate on.",
      "The goal isn't a perfect product. It's a product that's good enough to validate your hypothesis.",
    ],
  },
  "typography-matters": {
    title: "Typography Matters More Than You Think", category: "Design", date: "Jan 20, 2026", author: "Riya M.", readTime: "4 min read",
    content: [
      "Typography accounts for 90% of web design. Yet most teams spend 90% of their design time on layout, color, and imagery.",
      "A well-chosen typeface communicates trust, professionalism, and personality before a user reads a single word.",
      "Our approach: pick two typefaces maximum. Master the type scale, line heights, and spacing. The rest follows naturally.",
    ],
  },
  "full-stack-small-team": {
    title: "Full-Stack With a Small Team", category: "Engineering", date: "Jan 8, 2026", author: "Tanvir H.", readTime: "5 min read",
    content: [
      "You don't need 20 engineers to build a production-grade product. You need 3-4 engineers who are excellent communicators and deeply technical.",
      "We use modern tooling that reduces boilerplate: TypeScript everywhere, component libraries, automated testing, and CI/CD from day one.",
      "The secret is scope management. We build less, but what we build is solid.",
    ],
  },
  "saying-no-to-clients": {
    title: "Saying No to Clients", category: "Culture", date: "Dec 15, 2025", author: "Ahmed R.", readTime: "4 min read",
    content: [
      "We turn down about 60% of project inquiries. This isn't arrogance — it's quality control.",
      "If a project doesn't align with our expertise, our values, or our capacity to do excellent work, we say no.",
      "The result: every project we take on gets our full attention.",
    ],
  },
};

const BlogDetail = () => {
  const { slug } = useParams();
  const post = postsData[slug || ""];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-[72px] py-28 px-6 max-w-[720px] mx-auto text-center">
          <h1 className="font-serif text-4xl text-foreground italic">Post not found</h1>
          <Link to="/blog" className="text-muted-foreground mt-4 inline-block hover:text-foreground transition-colors">← Back to blog</Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-[72px]">
        {/* Header */}
        <div className="border-b border-border">
          <div className="max-w-[720px] mx-auto px-6 lg:px-10 py-16 md:py-20">
            <Link to="/blog" className="text-[12px] font-mono text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider mb-8 inline-block">← Back</Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{post.category}</span>
              <span className="text-muted-foreground/30">·</span>
              <span className="text-[12px] text-muted-foreground">{post.date}</span>
            </div>

            <h1 className="font-serif text-[36px] md:text-[44px] text-foreground leading-[1.1] animate-blur-in">{post.title}</h1>

            <div className="flex items-center gap-3 mt-8">
              <div className="w-9 h-9 rounded-full bg-muted" />
              <div>
                <span className="text-[13px] font-medium text-foreground">{post.author}</span>
                <span className="text-[12px] text-muted-foreground ml-2">· {post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="border-b border-border">
          <div className="max-w-[720px] mx-auto">
            <div className="aspect-[16/9] bg-muted" />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[720px] mx-auto px-6 lg:px-10 py-12 md:py-16">
          <div className="space-y-6">
            {post.content.map((para, i) => (
              <p key={i} className="text-[16px] leading-[1.85] text-foreground/80">{para}</p>
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div className="border-t border-border">
          <div className="max-w-[720px] mx-auto px-6 lg:px-10 py-8 flex items-center justify-between">
            <Link to="/blog" className="text-[12px] font-mono text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">← All posts</Link>
            <span className="text-[12px] font-mono text-muted-foreground uppercase tracking-wider">Share</span>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;
