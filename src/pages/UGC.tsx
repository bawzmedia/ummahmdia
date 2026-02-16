import { C, R, BigText, Sub, Tag, Line, CTA, ImgBlock, VideoBlock, ServiceHero, Definition, SectionHead, StatBar, StepItem, FeatureCard, Insight, BottomCTA } from "../shared";
import { useState } from "react";

// ─── Format card (unique to UGC page) ───
const FormatCard = ({ icon, title, description, bestFor }: {
  icon: string; title: string; description: string; bestFor: string;
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
        transition: "all 0.4s ease",
        boxShadow: h ? "0 12px 30px rgba(201,169,97,0.12)" : "none",
      }}
    >
      <span style={{ fontSize: "32px", marginBottom: "16px" }}>{icon}</span>
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
      <div style={{
        borderTop: `1px solid ${C.goldDim}`,
        paddingTop: "16px",
      }}>
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

const UGC = ({ setPage }: { setPage: (p: string) => void }) => (
  <div>
    {/* ── HERO ── */}
    <ServiceHero
      tag="UGC Content"
      titleLine1="REAL PEOPLE."
      titleLine2={<><span style={{ color: C.gold }}>REAL</span> RESULTS.</>}
      subtitle="User-generated content is the most trusted form of marketing. We connect your brand with authentic Muslim creators who turn your customers into your best salespeople."
    />

    {/* ── DEFINITION ── */}
    <Definition
      term="In Simple Terms"
      definition="UGC is when real people — not actors, not your marketing team — create content about your product or service. It looks like a friend's recommendation, not an ad. And that's exactly why it works: people trust people more than they trust brands."
    />

    {/* ── FEATURED REEL ── */}
    <section style={{ background: C.cream, padding: "clamp(40px, 8vw, 80px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <R>
          <VideoBlock label="UGC Showcase Reel — Replace with your video" aspect="56.25%" />
        </R>
      </div>
    </section>

    {/* ── WHY UGC WORKS (psychology + data) ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="grid-split" style={{ gap: "60px" }}>
          <R>
            <div>
              <Tag>The Psychology</Tag>
              <BigText size="clamp(28px, 4vw, 52px)" style={{ marginBottom: "24px" }}>
                WHY YOUR BRAIN<br />
                TRUSTS A <span style={{ color: C.gold }}>STRANGER</span><br />
                OVER A BRAND.
              </BigText>
              <Line />
              <Sub>
                It's called "social proof" — a psychological principle where we look to other people's actions to guide our own decisions. When you see a real person using a product and loving it, your brain processes that differently than a polished ad.
              </Sub>
              <Sub style={{ marginTop: "16px" }}>
                UGC works because it triggers the same trust response as a personal recommendation. 79% of people say user-generated content directly influences their purchase decisions — because it doesn't feel like marketing. It feels like truth.
              </Sub>
              <div style={{ marginTop: "28px" }}>
                <Insight
                  emoji="🧠"
                  text="The brain processes UGC in the 'social' network (trust/relationships) rather than the 'advertising' network (skepticism/defense). That's why it converts — it bypasses the ad filter entirely."
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

    {/* ── THE 5 FORMATS (unique educational layout for UGC) ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="Formats That Convert">
          THE 5 UGC STYLES THAT <span style={{ color: C.gold }}>ACTUALLY WORK</span>
        </SectionHead>

        <R>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px", color: C.textMid, lineHeight: 1.7,
            maxWidth: "750px", marginBottom: "48px",
          }}>
            Not all UGC is created equal. Research shows these five formats consistently outperform everything else. The key is matching the format to the specific objection your audience has.
          </p>
        </R>

        <div className="grid-cards-sm">
          {[
            { icon: "🔄", title: "PROBLEM → SOLUTION", description: "Start with a pain point your audience recognizes, then reveal how your product solves it. The most powerful UGC format because it mirrors the viewer's own thought process.", bestFor: "Products that solve clear problems" },
            { icon: "🗣️", title: "TESTIMONIAL", description: "A real customer sharing their genuine experience — what they expected, what happened, and how they feel now. Unscripted authenticity is what makes this convert.", bestFor: "Services & high-trust purchases" },
            { icon: "📦", title: "UNBOXING / FIRST LOOK", description: "The excitement of receiving and trying something for the first time. This format works because it lets the viewer experience the product vicariously through someone else.", bestFor: "Physical products & e-commerce" },
            { icon: "🎓", title: "HOW-TO / TUTORIAL", description: "A real user showing how they use your product in their daily life. This positions the creator as a peer, not a spokesperson — building credibility through demonstrated knowledge.", bestFor: "Products with learning curves" },
            { icon: "☀️", title: "DAY-IN-THE-LIFE", description: "Lifestyle content that naturally integrates your brand into someone's routine. The product appears organically — not as the focus, but as part of a life the viewer aspires to.", bestFor: "Lifestyle brands & recurring purchases" },
          ].map((item, i) => (
            <R key={i} delay={i * 0.08}>
              <FormatCard {...item} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── OUR PROCESS ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="How We Do It">
          FROM BRIEF TO <span style={{ color: C.gold }}>AD-READY</span>
        </SectionHead>

        <R>
          <Insight
            emoji="🔑"
            text="Great UGC isn't random — it's a system. We use social listening to discover your audience's real objections, then match formats and creators to address each one specifically."
          />
        </R>

        <div style={{ marginTop: "48px" }}>
          <StepItem step="01" title="SOCIAL LISTENING & DISCOVERY" desc="We analyze your audience's comments, reviews, and conversations to find the real objections and desires. What are they asking? What are they worried about? This data drives every creative decision." />
          <StepItem step="02" title="CREATOR MATCHING" desc="We connect you with authentic Muslim creators who genuinely align with your brand. Not influencers with inflated numbers — real people your audience relates to and trusts." />
          <StepItem step="03" title="BRIEFING & SCRIPTING" desc="We write detailed creative briefs with talking points — not word-for-word scripts. The creator needs enough guidance to hit key messages, but enough freedom to sound like themselves." />
          <StepItem step="04" title="PRODUCTION & REVIEW" desc="Creators produce content in their natural environment with their own phones. We review, provide feedback, and ensure quality — while preserving the authentic, unpolished feel that makes UGC work." />
          <StepItem step="05" title="AD-READY OPTIMIZATION" desc="We format, caption, and optimize every piece for paid social — ready to plug directly into your Meta, TikTok, and Google ad campaigns with proper specs and hooks." isLast />
        </div>
      </div>
    </section>

    {/* ── WHAT WE HANDLE ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="Full Service">
          UGC <span style={{ color: C.gold }}>SERVICES</span>
        </SectionHead>

        <div className="grid-cards">
          {[
            { number: "01", title: "CREATOR NETWORK", description: "Access to our vetted network of Muslim creators across Edmonton and beyond — matched to your brand's audience, values, and aesthetic." },
            { number: "02", title: "CONTENT STRATEGY", description: "Data-driven UGC campaigns built around your specific business goals — whether that's awareness, conversions, or community building." },
            { number: "03", title: "CREATIVE BRIEFS", description: "Detailed yet flexible briefs that give creators the guidance they need while preserving the authentic voice that makes UGC effective." },
            { number: "04", title: "AD WHITELISTING", description: "Run ads through creators' own accounts for higher trust and better performance. We handle the permissions, setup, and management." },
            { number: "05", title: "BATCH PRODUCTION", description: "Efficient content production at scale — multiple creators, multiple formats, one coordinated campaign. More content, less cost per piece." },
            { number: "06", title: "PERFORMANCE ANALYTICS", description: "Clear dashboards tracking engagement, view rates, conversion rates, and ROAS — so you see exactly what's working and where to double down." },
          ].map((item, i) => (
            <R key={i} delay={i * 0.08}>
              <FeatureCard {...item} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <BottomCTA
      title="LET REAL VOICES"
      highlight="SPEAK."
      subtitle="The most trusted form of marketing — powered by authentic creators who your audience already relates to."
      buttonText="GET STARTED WITH UGC"
      onButtonClick={() => setPage("contact")}
    />
  </div>
);

export default UGC;
