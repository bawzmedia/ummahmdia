import { C, R, BigText, Sub, Tag, Line, CTA, ImgBlock, VideoBlock, ServiceHero, Definition, SectionHead, StatBar, StepItem, FeatureCard, Insight, BottomCTA } from "../shared";
import { ProblemSolutionIcon, TestimonialIcon, UnboxingIcon, HowToIcon, DayInLifeIcon, InsightBrainIcon, InsightPuzzleIcon } from "../icons";
import { useState } from "react";

// ─── Format card ───
const FormatCard = ({ icon, title, description, bestFor }: {
  icon: React.ReactNode; title: string; description: string; bestFor: string;
}) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        height: "100%", boxSizing: "border-box",
        display: "flex", flexDirection: "column",
        background: h ? C.white : C.card,
        border: `2px solid ${h ? C.gold : C.goldDim}`,
        padding: "36px 28px",
        transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        boxShadow: h ? "0 16px 40px rgba(201,169,97,0.18)" : "0 2px 10px rgba(0,0,0,0.03)",
        transform: h ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <span style={{ marginBottom: "16px", color: C.gold }}>{icon}</span>
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "26px", letterSpacing: "2px",
        color: C.textDark, marginBottom: "12px",
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "14px", color: C.textMid, lineHeight: 1.6,
        marginBottom: "20px", flex: 1,
      }}>
        {description}
      </p>
      <div style={{ borderTop: `1px solid ${C.goldDim}`, paddingTop: "16px" }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px", letterSpacing: "2px",
          color: C.gold, textTransform: "uppercase",
        }}>
          Best for: {bestFor}
        </span>
      </div>
    </div>
  );
};

const UGC = () => (
  <div>
    {/* ── HERO ── */}
    <ServiceHero
      tag="UGC & Influencer Agency"
      titleLine1={<>YOUR AD <span style={{ color: C.gold }}>LOOKS</span></>}
      titleLine2="LIKE AN AD."
      subtitle="That's why it's not working. People scroll past polished. They stop for real. We create authentic content from real voices — and connect brands with Muslim creators who move product."
    />

    {/* ── DEFINITION ── */}
    <Definition
      term="In Simple Terms"
      definition="Real people create content for your brand that doesn't feel like marketing. And our influencer agency matches you with Muslim creators who have real audiences and real authority in their niche."
    />

    {/* ── FEATURED REEL ── */}
    <section style={{ background: C.cream, padding: "clamp(40px, 8vw, 80px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <R>
          <VideoBlock label="UGC & Influencer Showcase" aspect="56.25%" />
        </R>
      </div>
    </section>

    {/* ── WHY UGC + INFLUENCER ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="grid-split" style={{ gap: "60px" }}>
          <R>
            <div>
              <Tag>The Psychology</Tag>
              <BigText size="clamp(28px, 4vw, 52px)" style={{ marginBottom: "24px" }}>
                YOUR BRAIN<br />
                <span style={{ color: C.gold }}>KNOWS</span><br />
                THE DIFFERENCE.
              </BigText>
              <Line />
              <Sub>
                When a brand says it's great, your brain files it under "advertising." When a person you trust says it's great, your brain files it under "recommendation." Same product. Completely different response.
              </Sub>
              <Sub style={{ marginTop: "16px" }}>
                That's the science behind UGC. And it's why we built both a content production system and a full influencer agency. The content makes people believe. The creators make people buy.
              </Sub>
              <div style={{ marginTop: "28px" }}>
                <Insight
                  emoji={<InsightBrainIcon size={24} color={C.gold} />}
                  text="UGC activates the brain's trust network — the same circuitry as a personal recommendation from a friend. Ads activate the skepticism filter. That's the difference."
                />
              </div>
            </div>
          </R>
          <R delay={0.15}>
            <div className="grid-2">
              <ImgBlock label="Creator Content 1" h="clamp(200px, 28vw, 280px)" />
              <ImgBlock label="Creator Content 2" h="clamp(200px, 28vw, 280px)" />
              <ImgBlock label="Creator Content 3" h="clamp(200px, 28vw, 280px)" />
              <ImgBlock label="Creator Content 4" h="clamp(200px, 28vw, 280px)" />
            </div>
          </R>
        </div>
      </div>
    </section>

    {/* ── STATS ── */}
    <StatBar stats={[
      { num: "79%", label: "Say UGC impacts purchase decisions" },
      { num: "12×", label: "More engagement than brand content" },
      { num: "75%", label: "Lower cost per acquisition" },
      { num: "91%", label: "Higher view rates on TikTok" },
    ]} />

    {/* ── THE INFLUENCER AGENCY ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="The Influencer Agency">
          THE UMMAH HAS <span style={{ color: C.gold }}>INFLUENCE</span>.
        </SectionHead>

        <R>
          <Sub style={{ maxWidth: "750px", marginBottom: "20px" }}>
            We're building the first Muslim influencer agency in Edmonton. A curated roster of creators who are specialists in their fields — fitness, food, tech, fashion, business, lifestyle. Real audiences. Real authority. Real results.
          </Sub>
        </R>
        <R delay={0.1}>
          <Insight
            emoji={<InsightPuzzleIcon size={24} color={C.gold} />}
            text="For businesses: we match you with the right creator. For creators: we get you paid partnerships that align with your values. Both sides win."
          />
        </R>

        <div className="grid-cards" style={{ marginTop: "48px" }}>
          {[
            { number: "01", title: "CURATED ROSTER", description: "Vetted Muslim influencers across Edmonton and Canada. Real engagement, real expertise, real audiences — not purchased followers." },
            { number: "02", title: "BRAND-CREATOR MATCHING", description: "We don't just connect anyone with anyone. We match based on audience overlap, values alignment, and campaign goals. The right voice for the right message." },
            { number: "03", title: "CAMPAIGN MANAGEMENT", description: "End-to-end. Creative briefs, contracts, content review, posting schedules, performance reporting. We handle the logistics so both sides focus on creating." },
            { number: "04", title: "CREATOR DEVELOPMENT", description: "We help Muslim creators grow — content strategy, brand positioning, rate negotiations, portfolio building. If you're a creator in the Ummah, we want to hear from you." },
            { number: "05", title: "MULTI-PLATFORM CAMPAIGNS", description: "Instagram, TikTok, YouTube, X, LinkedIn. We plan across the platforms where your audience actually lives, optimized for each algorithm." },
            { number: "06", title: "PERFORMANCE & ROI", description: "Every campaign measured against real business outcomes. Sales attributed. Leads generated. ROAS calculated. We prove the value — not just count impressions." },
          ].map((item, i) => (
            <R key={i} delay={i * 0.08}>
              <FeatureCard {...item} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── UGC FORMATS ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="UGC Content">
          FIVE FORMATS THAT <span style={{ color: C.gold }}>CONVERT</span>
        </SectionHead>

        <R>
          <Sub style={{ maxWidth: "750px", marginBottom: "48px" }}>
            These are the formats that consistently outperform studio-produced ads. Not because they're cheaper. Because they're more believable.
          </Sub>
        </R>

        <div className="grid-cards-sm">
          {[
            { icon: <ProblemSolutionIcon size={32} />, title: "PROBLEM → SOLUTION", description: "Start with the pain point. Reveal the fix. The most powerful format because it mirrors how people actually think.", bestFor: "Products that solve clear problems" },
            { icon: <TestimonialIcon size={32} />, title: "TESTIMONIAL", description: "Real customers. Genuine experience. Unscripted satisfaction. You can't fake the look on someone's face when something actually works.", bestFor: "Services & high-trust purchases" },
            { icon: <UnboxingIcon size={32} />, title: "UNBOXING / FIRST LOOK", description: "The excitement of receiving something new. Viewers experience the product through someone they trust before they buy it themselves.", bestFor: "Physical products & e-commerce" },
            { icon: <HowToIcon size={32} />, title: "HOW-TO / TUTORIAL", description: "Real users showing your product in real life. Credibility through demonstration — not scripted claims.", bestFor: "Products with learning curves" },
            { icon: <DayInLifeIcon size={32} />, title: "DAY-IN-THE-LIFE", description: "Your brand appears naturally in someone's routine. Not the focus — part of a life the viewer wants.", bestFor: "Lifestyle brands & subscriptions" },
          ].map((item, i) => (
            <R key={i} delay={i * 0.08}>
              <FormatCard {...item} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── PROCESS ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="How It Works">
          FROM BRIEF TO <span style={{ color: C.gold }}>RESULTS</span>
        </SectionHead>

        <StepItem step="01" title="DISCOVERY & MATCHING" desc="We learn your brand, your audience, your goals. Then we match you with the right creators from our roster — or source new UGC creators specifically for your campaign." />
        <StepItem step="02" title="STRATEGY & BRIEFING" desc="Creative briefs, talking points, campaign frameworks. Enough guidance to hit your message. Enough freedom for creators to sound like themselves." />
        <StepItem step="03" title="PRODUCTION & REVIEW" desc="Creators produce content in their natural environment. We review, refine, and ensure quality — while keeping the authentic feel that makes this work." />
        <StepItem step="04" title="LAUNCH & OPTIMIZE" desc="Content goes live — organic, paid, or both. We track performance, optimize in real-time, and scale what's working." isLast />
      </div>
    </section>

    {/* ── FOR CREATORS ── */}
    <section style={{
      background: `linear-gradient(180deg, ${C.lightCream}, ${C.greenLight}, ${C.lightCream})`,
      padding: "clamp(60px, 12vw, 100px) 20px", textAlign: "center",
    }}>
      <R>
        <Tag>For Creators</Tag>
        <BigText size="clamp(28px, 6vw, 64px)" style={{ marginBottom: "20px" }}>
          YOU CREATE. WE <span style={{ color: C.gold }}>CONNECT</span>.
        </BigText>
      </R>
      <R delay={0.1}>
        <Sub style={{ margin: "0 auto 16px", textAlign: "center", maxWidth: "560px" }}>
          Muslim content creator with a real audience? We want to connect you with paid brand partnerships that align with your values. Join our roster.
        </Sub>
      </R>
      <R delay={0.2}>
        <CTA href="/contact?service=ugc">JOIN THE ROSTER</CTA>
      </R>
    </section>

    {/* ── CTA ── */}
    <BottomCTA
      title="LET REAL PEOPLE"
      highlight="SELL."
      subtitle="Polished ads get scrolled past. Real voices get listened to. Let's put yours to work."
      buttonText="GET STARTED"
      buttonHref="/contact?service=ugc"
    />
  </div>
);

export default UGC;
