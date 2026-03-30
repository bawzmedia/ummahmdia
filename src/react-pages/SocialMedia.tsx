import { C, R, BigText, Sub, Tag, Line, CTA, ImgBlock, VideoBlock, ServiceHero, Definition, SectionHead, StatBar, StepItem, FeatureCard, Insight, BottomCTA } from "../shared";
import { InsightMoneyIcon, InsightTargetIcon, InsightChartIcon } from "../icons";

const SocialMedia = () => (
  <div>
    {/* ── HERO ── */}
    <ServiceHero
      tag="Social Media Marketing"
      titleLine1={<>LIKES DON'T <span style={{ color: C.gold }}>PAY</span></>}
      titleLine2="YOUR BILLS."
      subtitle="We don't manage feeds. We build revenue engines. Every post, every DM, every partnership is designed to generate real business — not just applause."
    />

    {/* ── DEFINITION ── */}
    <Definition
      term="In Simple Terms"
      definition="Social media should make you money. Not just get you likes. We treat your accounts like a business development channel — creating content that drives revenue, opens partnerships, and brings real opportunities to your door."
    />

    {/* ── FEATURED VIDEO ── */}
    <section style={{ background: C.cream, padding: "clamp(40px, 8vw, 80px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <R>
          <VideoBlock label="Social Media Marketing Overview" aspect="56.25%" />
        </R>
      </div>
    </section>

    {/* ── THE PROBLEM ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="grid-split" style={{ gap: "60px" }}>
          <R>
            <div>
              <Tag>The Real Problem</Tag>
              <BigText size="clamp(28px, 4vw, 52px)" style={{ marginBottom: "24px" }}>
                YOU'RE POSTING.<br />
                BUT IS IT <span style={{ color: C.gold }}>WORKING</span>?
              </BigText>
              <Line />
              <Sub>
                Most social media managers focus on aesthetics and engagement metrics. The feed looks nice. The numbers go up. But your bank account looks the same.
              </Sub>
              <Sub style={{ marginTop: "16px" }}>
                We focus on what actually moves the needle — revenue, partnerships, and doors that open because the right person saw the right content at the right time.
              </Sub>
              <div style={{ marginTop: "28px" }}>
                <Insight
                  emoji={<InsightMoneyIcon size={24} color={C.gold} />}
                  text="We measure success in dollars generated and partnerships formed. Likes and comments are byproducts — not goals."
                />
              </div>
            </div>
          </R>
          <R delay={0.15}>
            <ImgBlock label="Revenue Dashboard" h="clamp(300px, 50vw, 580px)" />
          </R>
        </div>
      </div>
    </section>

    {/* ── STATS ── */}
    <StatBar stats={[
      { num: "78%", label: "Of salespeople using social outsell peers" },
      { num: "3.5×", label: "More leads from strategic social" },
      { num: "40%", label: "Of B2B revenue influenced by social" },
      { num: "24/7", label: "Your brand works while you sleep" },
    ]} />

    {/* ── WHAT WE ACTUALLY DO ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="What We Do">
          NOT YOUR TYPICAL <span style={{ color: C.gold }}>SMM</span>
        </SectionHead>

        <R>
          <Insight
            emoji={<InsightTargetIcon size={24} color={C.gold} />}
            text="We don't do: motivational quotes, random posting, vanity metric reports, or generic calendars. We do: strategy that puts money in your account."
          />
        </R>

        <div className="grid-cards" style={{ marginTop: "48px" }}>
          {[
            { number: "01", title: "REVENUE-DRIVEN STRATEGY", description: "Every plan starts with your business goals — revenue targets, partnerships, leads. We reverse-engineer the content from what you need to achieve, not what looks nice." },
            { number: "02", title: "PARTNERSHIP DEVELOPMENT", description: "Social media as a networking tool. We connect your brand with businesses and leaders — inside the Ummah and beyond. DMs that lead to deals, not just double-taps." },
            { number: "03", title: "CONTENT THAT CONVERTS", description: "Posts designed with conversion in mind. Strategic CTAs, funnel-aware messaging, and content that moves followers from awareness to inquiry to paying customer." },
            { number: "04", title: "COMMUNITY AS CURRENCY", description: "We don't build communities for the sake of it. We build communities that trust you enough to buy from you, refer you, and partner with you." },
            { number: "05", title: "PLATFORM-SPECIFIC EXECUTION", description: "Instagram, TikTok, LinkedIn, YouTube — each platform has different rules and different audiences. We build strategies for each one. No copy-paste." },
            { number: "06", title: "PAID SOCIAL ADVERTISING", description: "Engineered ad campaigns on Meta, TikTok, and LinkedIn. Targeted, optimized, and measured against real business outcomes — not boosted posts." },
          ].map((item, i) => (
            <R key={i} delay={i * 0.08}>
              <FeatureCard {...item} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── PROCESS ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="How We Work">
          FROM AUDIT TO <span style={{ color: C.gold }}>REVENUE</span>
        </SectionHead>

        <R>
          <Sub style={{ maxWidth: "700px", marginBottom: "48px" }}>
            We start by understanding your business — not your Instagram. Social media is a channel. The strategy comes from your revenue goals.
          </Sub>
        </R>

        <StepItem step="01" title="BUSINESS AUDIT" desc="We learn your revenue model, target customers, partnership opportunities, and competitive landscape. We need to understand where the money is before we touch your social media." />
        <StepItem step="02" title="SOCIAL STRATEGY" desc="Content pillars, platform selection, posting cadence, DM strategy, partnership outreach — all mapped to revenue outcomes. Not a content calendar. A business plan for your feed." />
        <StepItem step="03" title="EXECUTE & ENGAGE" desc="We create content, manage posting, engage with your audience, initiate partnership conversations, and run paid campaigns. You focus on running your business." />
        <StepItem step="04" title="MEASURE & OPTIMIZE" desc="Monthly reviews focused on business metrics. Revenue generated. Partnerships formed. Leads captured. Cost per result. We optimize based on what's actually making money." isLast />
      </div>
    </section>

    {/* ── IS THIS YOU ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="Is This You?">
          BUILT FOR <span style={{ color: C.gold }}>BUSINESSES</span>
        </SectionHead>

        <StepItem step="→" title="YOU WANT LEADS, NOT JUST FOLLOWERS" desc="You have a product or service that works. Now you need social media to bring in consistent revenue — not just a bigger number on your profile." />
        <StepItem step="→" title="YOU WANT PARTNERSHIPS, NOT JUST POSTS" desc="You want to connect with businesses, sponsors, and community leaders through social. We make your DMs a business development channel." />
        <StepItem step="→" title="YOU'RE READY TO GROW BEYOND THE UMMAH" desc="You want to reach the broader market while staying rooted in your values. We bridge both worlds — community partnerships and mainstream opportunities." />
        <StepItem step="→" title="YOU'RE TIRED OF POSTING INTO THE VOID" desc="You've been posting consistently but nothing happens. No leads. No calls. No partnerships. Something needs to change — and it's not the hashtags." isLast />
      </div>
    </section>

    {/* ── CTA ── */}
    <BottomCTA
      title="MAKE SOCIAL MEDIA"
      highlight="PAY."
      subtitle="Stop posting for the sake of posting. Start building a social presence that generates real revenue and real partnerships."
      buttonText="START YOUR PROJECT"
      buttonHref="/contact?service=social"
    />
  </div>
);

export default SocialMedia;
