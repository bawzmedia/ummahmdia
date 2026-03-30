import { C, R, BigText, Sub, Tag, Line, CTA, ImgBlock, ServiceHero, Definition, SectionHead, StatBar, StepItem, FeatureCard, Insight, BottomCTA, CustomBuildSection } from "../shared";
import { SmartFunnelIcon, SmartAgentIcon, SmartSiteIcon, SmartMediaIcon, SmartPortalIcon, InsightPuzzleIcon, InsightLightbulbIcon } from "../icons";
import { useState } from "react";

// ─── Module card (unique to SmartSuite) ───
const ModuleCard = ({ icon, name, description, deliverables }: {
  icon: string; name: string; description: string; deliverables: string[];
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
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "3px",
        background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
        opacity: h ? 1 : 0,
        transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      }} />
      <span style={{ marginBottom: "16px", color: C.gold }}>{icon}</span>
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "28px", letterSpacing: "2px",
        color: C.textDark, marginBottom: "12px",
      }}>
        {name}
      </h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "14px", color: C.textMid, lineHeight: 1.6,
        marginBottom: "20px",
      }}>
        {description}
      </p>
      <div style={{
        borderTop: `1px solid ${C.goldDim}`,
        paddingTop: "16px", marginTop: "auto",
      }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px", letterSpacing: "2px",
          color: C.gold, textTransform: "uppercase",
          display: "block", marginBottom: "10px",
        }}>
          Deliverables
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {deliverables.map((d, i) => (
            <span key={i} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px", color: C.textLight, lineHeight: 1.5,
            }}>
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SmartSuite = () => (
  <div>
    {/* ── HERO ── */}
    <ServiceHero
      tag="SmartSuite"
      titleLine1={<>YOUR TOOLS DON'T <span style={{ color: C.gold }}>TALK</span></>}
      titleLine2="TO EACH OTHER."
      subtitle="Your website doesn't know your funnel. Your chatbot doesn't know your services. Your clients can't see their own progress. We fix that — with AI-powered modules that work as one system."
    />

    {/* ── DEFINITION ── */}
    <Definition
      term="In Simple Terms"
      definition="Five AI-powered business modules that plug into each other. Pick the ones you need. They share data, hand off leads, and run your business while you sleep."
    />

    {/* ── THE BIG IDEA ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="grid-split" style={{ gap: "60px" }}>
          <R>
            <div>
              <Tag>The Problem</Tag>
              <BigText size="clamp(28px, 4vw, 52px)" style={{ marginBottom: "24px" }}>
                FIVE TOOLS.<br />
                ZERO <span style={{ color: C.gold }}>CONNECTION</span>.
              </BigText>
              <Line />
              <Sub>
                A website here. A chatbot there. A funnel somewhere else. None of them share data. Leads fall through the cracks. You're paying for five tools doing the job of none.
              </Sub>
              <Sub style={{ marginTop: "16px" }}>
                SmartSuite modules are built to connect. Your funnel feeds your AI agent. Your agent lives on your website. Your portal onboards the client. One system. No gaps.
              </Sub>
              <div style={{ marginTop: "28px" }}>
                <Insight
                  emoji={<InsightPuzzleIcon size={24} color={C.gold} />}
                  text="Start with one module. Add more as you grow. Every module works alone — and works better together."
                />
              </div>
            </div>
          </R>
          <R delay={0.15}>
            <ImgBlock label="SmartSuite System Diagram" h="clamp(300px, 50vw, 580px)" />
          </R>
        </div>
      </div>
    </section>

    {/* ── STATS ── */}
    <StatBar stats={[
      { num: "5", label: "Modular AI Systems" },
      { num: "24/7", label: "AI Agent Availability" },
      { num: "3×", label: "Lead Conversion Lift" },
      { num: "1", label: "Connected Ecosystem" },
    ]} />

    {/* ── THE 5 MODULES ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="The Modules">
          PICK WHAT YOU <span style={{ color: C.gold }}>NEED</span>
        </SectionHead>

        <R>
          <Insight
            emoji={<InsightLightbulbIcon size={24} color={C.gold} />}
            text="Pricing is modular — you only pay for what you use. Each module has its own scope, deliverables, and timeline."
          />
        </R>

        <div className="grid-cards" style={{ marginTop: "48px" }}>
          {[
            {
              icon: <SmartFunnelIcon size={36} />,
              name: "SMART FUNNEL",
              description: "Attracts the right people, qualifies them automatically, captures their info, and gets smarter over time. Your always-on lead generation machine.",
              deliverables: ["Funnel architecture", "Landing pages", "Lead qualification logic", "Feedback loops", "Targeting optimization"],
            },
            {
              icon: <SmartAgentIcon size={36} />,
              name: "SMART AGENT",
              description: "An AI agent that talks to every visitor, answers their questions, qualifies leads, and routes hot prospects to you — while you sleep.",
              deliverables: ["Agent design & personality", "Voiceflow build", "Website integration", "Lead qualification flows", "Knowledge base"],
            },
            {
              icon: <SmartSiteIcon size={36} />,
              name: "SMART SITE",
              description: "A conversion-focused website with your AI agent built in. Not a brochure. A business tool that turns visitors into customers.",
              deliverables: ["Site design & development", "AI agent integration", "Funnel integration", "Mobile-responsive build", "SEO & analytics"],
            },
            {
              icon: <SmartMediaIcon size={36} />,
              name: "SMART PROJECT MEDIA",
              description: "A content engine that produces video, visuals, and media assets designed to feed your funnel, your site, and your social presence.",
              deliverables: ["Video assets", "Campaign visuals", "Project storytelling", "Sales-support media"],
            },
            {
              icon: <SmartPortalIcon size={36} />,
              name: "SMART PORTAL",
              description: "A client-facing dashboard where customers track progress, view metrics, access files, and manage payments. Professional experience, automated.",
              deliverables: ["Portal dashboard", "Onboarding flow", "Progress tracking", "Metrics & reporting", "Asset library & payments"],
            },
          ].map((mod, i) => (
            <R key={i} delay={i * 0.08}>
              <ModuleCard {...mod} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── HOW IT CONNECTS ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="How It Connects">
          ONE LEAD. FIVE <span style={{ color: C.gold }}>HANDOFFS</span>. ZERO GAPS.
        </SectionHead>

        <R>
          <Insight
            emoji={<InsightPuzzleIcon size={24} color={C.gold} />}
            text="When modules work together, a lead captured by Smart Funnel gets qualified by Smart Agent, converts on Smart Site, and gets onboarded through Smart Portal — automatically."
          />
        </R>

        <div style={{ marginTop: "48px" }}>
          <StepItem step="01" title="SMART FUNNEL CAPTURES" desc="Targeted campaigns and landing pages attract the right prospects. Qualified leads are passed to Smart Agent automatically." />
          <StepItem step="02" title="SMART AGENT QUALIFIES" desc="Your AI agent engages every visitor, answers questions, and scores leads. Hot prospects get routed to you instantly." />
          <StepItem step="03" title="SMART SITE CONVERTS" desc="Your website isn't a brochure — it's a conversion tool. Agent integration, funnel integration, and strategic design turn visitors into customers." />
          <StepItem step="04" title="SMART MEDIA FUELS" desc="Fresh video, visuals, and assets power your funnel, your site, and your social presence. Always on-brand. Always producing." />
          <StepItem step="05" title="SMART PORTAL RETAINS" desc="Once they're a client, the portal gives them a professional dashboard. Progress tracking, metrics, assets, and payments — all automated." isLast />
        </div>
      </div>
    </section>

    {/* ── IS THIS YOU ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHead tag="Is This You?">
          YOU'RE DUCT-TAPING <span style={{ color: C.gold }}>TOOLS</span> TOGETHER
        </SectionHead>

        <StepItem step="→" title="YOU'RE LOSING LEADS IN THE HANDOFF" desc="Someone fills out a form. Then nothing happens for 48 hours. By the time you follow up, they've moved on. SmartSuite eliminates the gap." />
        <StepItem step="→" title="YOUR CHATBOT DOESN'T KNOW YOUR BUSINESS" desc="It answers with generic responses. It can't qualify leads. It can't route hot prospects to you at 2am. Smart Agent can." />
        <StepItem step="→" title="YOUR CLIENTS KEEP ASKING FOR UPDATES" desc="Where's my project? What's the timeline? Can I see the files? Smart Portal gives them answers before they have to ask." />
        <StepItem step="→" title="YOU WANT AI BUT DON'T KNOW WHERE TO START" desc="You've heard about AI tools. You know you should be using them. SmartSuite gives you AI-powered systems without the complexity of building from scratch." isLast />
      </div>
    </section>

    {/* ── CUSTOM BUILD ── */}
    <CustomBuildSection contactHref="/contact?service=smartsuite" />

    {/* ── CTA ── */}
    <BottomCTA
      title="STOP DUCT-TAPING."
      highlight="START BUILDING."
      subtitle="Pick your modules. We build the system. Your business runs smarter from day one."
      buttonText="BUILD YOUR SMARTSUITE"
      buttonHref="/contact?service=smartsuite"
    />
  </div>
);

export default SmartSuite;
