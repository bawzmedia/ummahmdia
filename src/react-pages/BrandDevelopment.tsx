import { C, R, BigText, Sub, Tag, Line, CTA, ImgBlock, VideoBlock, ServiceHero, Definition, SectionHead, StatBar, StepItem, FeatureCard, Insight, BottomCTA } from "../shared";
import { InsightKeyIcon, InsightChartIcon, InsightTargetIcon } from "../icons";

const BrandDevelopment = () => (
  <div>
    {/* ── HERO ── */}
    <ServiceHero
      tag="Brand Development"
      titleLine1={<>YOUR BRAND IS <span style={{ color: C.gold }}>TALKING</span></>}
      titleLine2="WITHOUT YOU."
      subtitle="Every touchpoint — your logo, your feed, your website, your silence — is telling people who you are. We make sure it's saying the right thing."
    />

    {/* ── DEFINITION ── */}
    <Definition
      term="In Simple Terms"
      definition="We become your brand's general contractor. We audit everything, build what's missing, fix what's broken, and make it all work together — strategy, content, visuals, systems. One team. One vision."
    />

    {/* ── FEATURED VIDEO ── */}
    <section style={{ background: C.cream, padding: "clamp(40px, 8vw, 80px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <R>
          <VideoBlock label="Brand Development Showreel" aspect="56.25%" />
        </R>
      </div>
    </section>

    {/* ── THE PROBLEM ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="grid-split" style={{ gap: "60px" }}>
          <R>
            <div>
              <Tag>The Problem</Tag>
              <BigText size="clamp(28px, 4vw, 52px)" style={{ marginBottom: "24px" }}>
                YOU DON'T NEED<br />
                A LOGO.<br />
                YOU NEED A <span style={{ color: C.gold }}>SYSTEM</span>.
              </BigText>
              <Line />
              <Sub>
                Most businesses hire a designer for a logo. A freelancer for some posts. A videographer for one shoot. None of them talk to each other. The result is a brand that looks different everywhere.
              </Sub>
              <Sub style={{ marginTop: "16px" }}>
                A general contractor doesn't just lay tile. They see the whole building. They coordinate every trade. Every piece connects to every other piece. That's how we build brands.
              </Sub>
              <div style={{ marginTop: "28px" }}>
                <Insight
                  emoji={<InsightKeyIcon size={24} color={C.gold} />}
                  text="You probably don't need a full rebrand. You need someone who can see the full picture — then build what's actually missing."
                />
              </div>
            </div>
          </R>
          <R delay={0.15}>
            <ImgBlock label="Brand Ecosystem Overview" h="clamp(300px, 50vw, 580px)" />
          </R>
        </div>
      </div>
    </section>

    {/* ── STATS ── */}
    <StatBar stats={[
      { num: "23%", label: "Revenue lift from brand consistency" },
      { num: "3.5×", label: "ROI on strategic brand investment" },
      { num: "80%", label: "Of first impressions are visual" },
      { num: "5–7×", label: "Impressions before someone remembers you" },
    ]} />

    {/* ── HOW IT WORKS — THE CINEMATIC WALKTHROUGH ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="How It Works">
          CONSULTING FIRST.<br />
          <span style={{ color: C.gold }}>CONTENT</span> SECOND.
        </SectionHead>

        <R>
          <Sub style={{ maxWidth: "700px", marginBottom: "48px" }}>
            Every engagement starts the same way — with us listening. We don't show up with cameras on day one. We show up with questions.
          </Sub>
        </R>

        <StepItem step="01" title="WE AUDIT YOUR BRAND" desc="Twice-weekly consulting sessions. We pull apart your brand — visuals, messaging, content, online presence, competitors — and give you a clear picture of what's working, what's not, and what's missing entirely." />
        <StepItem step="02" title="WE BUILD YOUR PLAN" desc="No two businesses are the same, so no two plans are the same. We design a custom package around your industry, your goals, and your gaps. You know exactly what you're getting and why." />
        <StepItem step="03" title="WE CREATE YOUR CONTENT" desc="Filming days. Custom video. Professional photography. Branded posts. Landing pages. Everything produced under one roof, on strategy, on brand. Not outsourced. Not templated." />
        <StepItem step="04" title="YOUR BRAND SHOWS UP. CONSISTENTLY." desc="Content goes live. Your brand looks the same everywhere — Instagram, your website, your pitch deck, your storefront. Consulting continues so the strategy evolves with your business." isLast />
      </div>
    </section>

    {/* ── WHAT'S INCLUDED ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="What You Get">
          EVERYTHING YOUR BRAND <span style={{ color: C.gold }}>NEEDS</span>
        </SectionHead>

        <R>
          <Insight
            emoji={<InsightChartIcon size={24} color={C.gold} />}
            text="Pricing is based on your industry and scope — because a restaurant and a law firm are two different builds. We set the deliverables first, then price it honestly."
          />
        </R>

        <div className="grid-cards" style={{ marginTop: "48px" }}>
          {[
            { number: "01", title: "WEEKLY CONSULTING", description: "Two sessions per week. Brand audit, strategy direction, content planning, and ongoing guidance. This is where everything starts — and where it stays on track." },
            { number: "02", title: "CUSTOM VIDEO", description: "Short-form videos built for your brand and your platforms. Scroll-stopping content engineered for Reels, TikTok, and Shorts — not repurposed stock footage." },
            { number: "03", title: "FILMING DAYS", description: "We come to you. On-location production days with pre-planned shot lists, professional equipment, and creative direction. The footage that powers everything else." },
            { number: "04", title: "PROFESSIONAL PHOTOGRAPHY", description: "Branded imagery that makes your business look as premium as your work. Color-graded, edited, and delivered ready for every platform you use." },
            { number: "05", title: "BRANDED SOCIAL POSTS", description: "Custom-designed posts built with your visual identity — not Canva templates. Your feed should look like it belongs to a brand, not a freelancer." },
            { number: "06", title: "LANDING PAGES", description: "High-converting pages built to capture leads or drive a specific action. Designed to match your brand. Optimized to perform." },
          ].map((item, i) => (
            <R key={i} delay={i * 0.08}>
              <FeatureCard {...item} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── IS THIS YOU ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="Is This You?">
          YOU <span style={{ color: C.gold }}>KNOW</span> SOMETHING'S OFF
        </SectionHead>

        <R>
          <Sub style={{ maxWidth: "700px", marginBottom: "48px" }}>
            You don't need someone to tell you your brand needs work. You already know. You just need someone who can actually fix it.
          </Sub>
        </R>

        <StepItem step="→" title="YOUR BRAND LOOKS DIFFERENT EVERYWHERE" desc="Your Instagram doesn't match your website. Your business cards don't match your feed. Every post feels like it was made by a different person. Because it was." />
        <StepItem step="→" title="YOU'RE POSTING WITHOUT A PLAN" desc="Content goes up when you remember. There's no strategy. No direction. No consistency. You're working hard and going in circles." />
        <StepItem step="→" title="YOU DON'T HAVE TIME TO FIGURE IT OUT" desc="You run a business. You don't have time to learn marketing, hire five freelancers, and manage them all. You need one team that handles everything." />
        <StepItem step="→" title="YOUR COMPETITORS LOOK MORE PROFESSIONAL" desc="They have clean videos, polished photos, and a cohesive brand. You want that. But done right — with strategy behind every piece, not just aesthetics." isLast />
      </div>
    </section>

    {/* ── PORTFOLIO ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="Selected Work">
          BRAND <span style={{ color: C.gold }}>PROJECTS</span>
        </SectionHead>

        <div className="grid-2-1">
          <R><ImgBlock label="Full Brand Build" h="clamp(280px, 45vw, 500px)" /></R>
          <R delay={0.1}><ImgBlock label="Visual Identity System" h="clamp(280px, 45vw, 500px)" /></R>
        </div>
        <div className="grid-3" style={{ marginTop: "4px" }}>
          <R><ImgBlock label="Content Production" h="clamp(220px, 32vw, 320px)" /></R>
          <R delay={0.1}><ImgBlock label="Social Strategy" h="clamp(220px, 32vw, 320px)" /></R>
          <R delay={0.2}><ImgBlock label="Brand Collateral" h="clamp(220px, 32vw, 320px)" /></R>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <BottomCTA
      title="YOUR BRAND DESERVES"
      highlight="BETTER."
      subtitle="Book a consultation. We'll tell you exactly what's working, what's not, and what to do about it."
      buttonText="BOOK A CONSULTATION"
      buttonHref="/contact?service=brand"
    />
  </div>
);

export default BrandDevelopment;
