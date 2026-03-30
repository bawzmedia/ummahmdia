import { C, R, BigText, Sub, Tag, Line, CTA, ImgBlock, VideoBlock, ServiceHero, Definition, SectionHead, StatBar, StepItem, FeatureCard, Insight, BottomCTA, CustomBuildSection } from "../shared";
import { InsightLightbulbIcon, InsightPuzzleIcon } from "../icons";
import { useState } from "react";

// ─── Session card (upcoming events) ───
const SessionCard = ({ title, date, desc, registerHref }: {
  title: string; date: string; desc: string; registerHref?: string;
}) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        height: "100%", boxSizing: "border-box",
        background: h ? C.white : C.card,
        border: `2px solid ${h ? C.gold : C.goldDim}`,
        padding: "40px 32px",
        transition: "all 0.4s ease",
        boxShadow: h ? "0 8px 24px rgba(201,169,97,0.12)" : "none",
        display: "flex", flexDirection: "column",
      }}
    >
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "11px", letterSpacing: "3px",
        color: C.gold, textTransform: "uppercase",
        display: "block", marginBottom: "16px",
      }}>
        {date}
      </span>
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "28px", letterSpacing: "2px",
        color: C.textDark, marginBottom: "12px",
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "14px", color: C.textMid,
        lineHeight: 1.6, flex: 1,
      }}>
        {desc}
      </p>
      <div style={{ marginTop: "24px" }}>
        <CTA href={registerHref} outline>REGISTER INTEREST</CTA>
      </div>
    </div>
  );
};

// ─── Tool category card (unique to AI page) ───
const ToolCard = ({ category, tools, description }: {
  category: string; tools: string[]; description: string;
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
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "24px", letterSpacing: "2px",
        color: C.textDark, marginBottom: "12px",
      }}>
        {category}
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
        display: "flex", flexWrap: "wrap", gap: "8px",
      }}>
        {tools.map((t, i) => (
          <span key={i} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px", letterSpacing: "1px",
            color: C.gold,
            background: C.goldDim,
            padding: "4px 10px",
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const AIEducation = () => (
  <div>
    {/* ── HERO ── */}
    <ServiceHero
      tag="AI Education"
      titleLine1={<>EVERYONE'S TALKING <span style={{ color: C.gold }}>AI</span>.</>}
      titleLine2="NOBODY'S TEACHING IT."
      subtitle="We teach Muslim businesses and creators to actually use AI — not just talk about it. Practical skills. Real tools. Immediate results."
    />

    {/* ── DEFINITION ── */}
    <Definition
      term="In Simple Terms"
      definition="AI can write, design, edit video, and automate your busywork. We teach you which tools to use, how to use them, and how to think about AI — so you lead the change instead of watching it happen."
    />

    {/* ── FEATURED VIDEO ── */}
    <section style={{ background: C.cream, padding: "clamp(40px, 8vw, 80px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <R>
          <VideoBlock label="AI Education Overview" aspect="56.25%" />
        </R>
      </div>
    </section>

    {/* ── WHY THIS MATTERS ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="grid-split" style={{ gap: "60px" }}>
          <R>
            <div>
              <Tag>The Reality</Tag>
              <BigText size="clamp(28px, 4vw, 52px)" style={{ marginBottom: "24px" }}>
                THE GAP IS<br />
                <span style={{ color: C.gold }}>GROWING</span>.<br />
                EVERY MONTH.
              </BigText>
              <Line />
              <Sub>
                Businesses using AI are saving 12+ hours per week. They're producing more, deciding faster, serving better — with smaller teams and lower costs.
              </Sub>
              <Sub style={{ marginTop: "16px" }}>
                This isn't about replacing people. It's about giving yourself an unfair advantage. The gap between those who adopt AI and those who don't is widening every single month.
              </Sub>
              <div style={{ marginTop: "28px" }}>
                <Insight
                  emoji={<InsightLightbulbIcon size={24} color={C.gold} />}
                  text="You don't need to become a programmer. You just need to know which tools exist, what they're good at, and how to tell them what you need. That's what we teach."
                />
              </div>
            </div>
          </R>
          <R delay={0.15}>
            <ImgBlock label="AI Workshop" h="clamp(300px, 50vw, 580px)" />
          </R>
        </div>
      </div>
    </section>

    {/* ── QURANIC CONNECTION ── */}
    <section style={{
      background: `linear-gradient(180deg, ${C.cream}, ${C.greenLight}, ${C.cream})`,
      padding: "clamp(60px, 10vw, 100px) 20px", textAlign: "center",
    }}>
      <R>
        <p style={{
          fontFamily: "'Amiri', serif",
          fontSize: "32px", color: C.gold,
          marginBottom: "28px", direction: "rtl" as const,
        }}>
          اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
        </p>
      </R>
      <R delay={0.1}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "18px", color: C.textDark,
          fontWeight: 500, marginBottom: "16px",
          fontStyle: "italic",
        }}>
          "Read in the name of your Lord who created."
        </p>
      </R>
      <R delay={0.15}>
        <Sub style={{ margin: "0 auto", textAlign: "center", maxWidth: "600px" }}>
          The first revelation was a command to learn. Seeking knowledge isn't optional — it's an obligation. AI is the knowledge frontier of our time.
        </Sub>
      </R>
    </section>

    {/* ── STATS ── */}
    <StatBar stats={[
      { num: "12+ HRS", label: "Saved per week with AI tools" },
      { num: "20%", label: "Average sales growth reported" },
      { num: "10×", label: "Faster content production" },
      { num: "73%", label: "Of companies now use AI" },
    ]} />

    {/* ── THE AI LANDSCAPE ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="The AI Landscape">
          WHAT EXISTS. <span style={{ color: C.gold }}>WHAT IT DOES</span>.
        </SectionHead>

        <R>
          <Sub style={{ maxWidth: "750px", marginBottom: "48px" }}>
            The tool landscape is overwhelming. Here's the map that matters — six categories of AI tools that can transform how you work, starting today.
          </Sub>
        </R>

        <div className="grid-cards">
          {[
            { category: "WRITING & COPY", description: "Marketing copy, emails, social posts, proposals — drafted in seconds. You edit and refine in minutes instead of hours.", tools: ["ChatGPT", "Claude", "Jasper"] },
            { category: "IMAGE & DESIGN", description: "Graphics, mockups, social visuals, brand assets — without a designer. Describe what you want. Get it instantly.", tools: ["Midjourney", "DALL·E", "Canva AI"] },
            { category: "VIDEO & AUDIO", description: "Edit videos, generate voiceovers, create subtitles, produce entire concepts. What took a team now takes one person.", tools: ["Runway", "ElevenLabs", "CapCut AI"] },
            { category: "AUTOMATION", description: "Connect your apps. Automate scheduling, follow-ups, data entry, posting. Set it up once. It runs forever.", tools: ["Make.com", "Zapier", "n8n"] },
            { category: "RESEARCH & ANALYSIS", description: "Analyze data, research competitors, summarize documents, extract insights. AI finds patterns humans miss.", tools: ["ChatGPT", "NotebookLM", "Perplexity"] },
            { category: "CUSTOMER SERVICE", description: "AI assistants that handle common questions 24/7. Your team focuses on complex issues that need a human.", tools: ["Intercom AI", "Tidio", "Custom GPTs"] },
          ].map((item, i) => (
            <R key={i} delay={i * 0.08}>
              <ToolCard {...item} />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── PROGRAMS ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="Our Programs">
          LEARN IT. USE IT. <span style={{ color: C.gold }}>LEAD WITH IT</span>.
        </SectionHead>

        <div className="grid-cards">
          {[
            { number: "01", title: "AI FOR BUSINESS 101", description: "The starting point. AI fundamentals and practical applications for business owners. In-person or virtual. Leave with a 30-day action plan you can implement immediately." },
            { number: "02", title: "WORKFLOW AUTOMATION", description: "Stop doing repetitive tasks manually. Learn to automate with n8n, Zapier, and Make. Includes process audit, workflow design, implementation, and team training." },
            { number: "03", title: "AI MARKETING MASTERY", description: "Advanced training on AI-powered content creation, targeting, optimization, and analytics. For businesses already comfortable with digital marketing." },
            { number: "04", title: "CUSTOM AI TOOL BUILD", description: "We design and build a custom AI tool for your specific business. Requirements, design, development, testing, deployment, and training — all included." },
            { number: "05", title: "AI AGENT DEVELOPMENT", description: "Build AI agents for sales, support, or operations. Agent design, development, training, integration, deployment, and monitoring." },
            { number: "06", title: "TEAM WORKSHOPS", description: "Hands-on group sessions customized to your team's skill level. Half-day, full-day, or multi-day. Up to 20 participants per session." },
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
          YOU KNOW YOU'RE <span style={{ color: C.gold }}>BEHIND</span>
        </SectionHead>

        <R>
          <Insight
            emoji={<InsightPuzzleIcon size={24} color={C.gold} />}
            text="Zero technical background required. If you can use a smartphone, you can learn AI. We meet you where you are."
          />
        </R>

        <div style={{ marginTop: "48px" }}>
          <StepItem step="→" title="BUSINESS OWNERS WHO WANT AN EDGE" desc="You want to compete with companies 10× your size. AI is the force multiplier that levels the playing field — automate what you can, focus on what matters." />
          <StepItem step="→" title="ORGANIZATIONS READY TO MODERNIZE" desc="Masajid, Islamic schools, nonprofits looking to serve more people with less overhead. Better communications, smarter scheduling, automated admin." />
          <StepItem step="→" title="CREATORS WHO WANT TO PRODUCE MORE" desc="AI handles the tedious parts — editing, captioning, ideation. You focus on the creative work that only you can do." />
          <StepItem step="→" title="ANYONE WHO WANTS TO FUTURE-PROOF" desc="AI skills are becoming as essential as computer skills were 20 years ago. The best time to start was last year. The second best time is now." isLast />
        </div>
      </div>
    </section>

    {/* ── UPCOMING SESSIONS ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="Get Involved">
          UPCOMING <span style={{ color: C.gold }}>SESSIONS</span>
        </SectionHead>

        <div className="grid-events">
          {[
            { title: "AI FOR BUSINESS 101", date: "Coming Soon — Edmonton", desc: "3-hour workshop. Leave with a 30-day AI action plan for your business. No technical knowledge required." },
            { title: "CONTENT CREATION WITH AI", date: "Coming Soon — Virtual", desc: "Build your AI content engine. Generate ideas, create calendars, produce professional content 10× faster. Hands-on." },
            { title: "AI ETHICS & ISLAM", date: "Coming Soon — Edmonton", desc: "Navigating AI responsibly through an Islamic framework. Bias, privacy, and principled adoption." },
          ].map((event, i) => (
            <R key={i} delay={i * 0.1}>
              <SessionCard {...event} registerHref="/contact?service=ai" />
            </R>
          ))}
        </div>
      </div>
    </section>

    {/* ── CUSTOM BUILD ── */}
    <CustomBuildSection contactHref="/contact?service=ai" />

    {/* ── CTA ── */}
    <BottomCTA
      title="THE FUTURE REWARDS"
      highlight="THE PREPARED."
      subtitle="Equip yourself with the skills to lead in the age of AI — practically, ethically, and confidently."
      buttonText="REGISTER YOUR INTEREST"
      buttonHref="/contact?service=ai"
    />
  </div>
);

export default AIEducation;
