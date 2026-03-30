import { C, R, BigText, Sub, Tag, Line, CTA, ImgBlock, VideoBlock, ServiceHero, Definition, SectionHead, StatBar, StepItem, FeatureCard, Insight, BottomCTA } from "../shared";
import { InsightLightbulbIcon, InsightTargetIcon } from "../icons";
import { useState } from "react";

// ─── Funnel stage card ───
const FunnelStage = ({ stage, label, color, formats, goal }: {
  stage: string; label: string; color: string; formats: string[]; goal: string;
}) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        height: "100%", boxSizing: "border-box",
        background: h ? C.white : C.card,
        border: `2px solid ${h ? C.gold : C.goldDim}`,
        borderTop: `4px solid ${color}`,
        padding: "36px 28px",
        transition: "all 0.4s ease",
        boxShadow: h ? "0 12px 30px rgba(201,169,97,0.12)" : "none",
      }}
    >
      <span style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "14px", letterSpacing: "3px",
        color, display: "block", marginBottom: "8px",
      }}>
        {stage}
      </span>
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "32px", letterSpacing: "2px",
        color: C.textDark, marginBottom: "16px", lineHeight: 1,
      }}>
        {label}
      </h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "14px", color: C.textMid, lineHeight: 1.6,
        marginBottom: "20px",
      }}>
        {goal}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {formats.map((f, i) => (
          <span key={i} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px", letterSpacing: "1px",
            color: C.textLight, textTransform: "uppercase",
            padding: "6px 0",
            borderBottom: i < formats.length - 1 ? `1px solid ${C.goldDim}` : "none",
          }}>
            {f}
          </span>
        ))}
      </div>
    </div>
  );
};

const VideoMarketing = () => (
  <div>
    {/* ── HERO ── */}
    <ServiceHero
      tag="Video Marketing"
      titleLine1={<>TWO <span style={{ color: C.gold }}>SECONDS</span>.</>}
      titleLine2="THAT'S ALL YOU GET."
      subtitle="Every scroll is a decision. Every frame is a chance to earn attention or lose it forever. We engineer videos that stop thumbs and start conversations."
    />

    {/* ── DEFINITION ── */}
    <Definition
      term="In Simple Terms"
      definition="We don't just make videos that look good. We build video systems — the right content, for the right audience, at the right stage of their decision. Every video has a job. We make sure it does it."
    />

    {/* ── FEATURED REEL ── */}
    <section style={{ background: C.cream, padding: "clamp(40px, 8vw, 80px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <R>
          <VideoBlock label="Video Marketing Showreel" aspect="56.25%" />
        </R>
      </div>
    </section>

    {/* ── THE HOOK ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="grid-split" style={{ gap: "60px" }}>
          <R>
            <div>
              <Tag>The Science of Attention</Tag>
              <BigText size="clamp(28px, 4vw, 52px)" style={{ marginBottom: "24px" }}>
                YOUR HOOK<br />
                IS <span style={{ color: C.gold }}>EVERYTHING</span>.
              </BigText>
              <Line />
              <Sub>
                Less than two seconds. That's how long you have before someone decides to watch or scroll past. The hook isn't just important — it's the entire game.
              </Sub>
              <Sub style={{ marginTop: "16px" }}>
                A strong hook creates an open loop — a question the brain needs to resolve. We engineer every video to grab attention in the first frame, then structure the content to hold it until the last.
              </Sub>
              <div style={{ marginTop: "28px" }}>
                <Insight
                  emoji={<InsightTargetIcon size={24} color={C.gold} />}
                  text={`"Here's how we doubled our client's revenue in 90 days" will always outperform "Hey everyone, welcome to our channel." Always.`}
                />
              </div>
            </div>
          </R>
          <R delay={0.15}>
            <VideoBlock label="Hook Breakdown Example" aspect="130%" />
          </R>
        </div>
      </div>
    </section>

    {/* ── STATS ── */}
    <StatBar stats={[
      { num: "2 SEC", label: "To capture attention" },
      { num: "91%", label: "Of businesses use video" },
      { num: "87%", label: "Say video increased sales" },
      { num: "12×", label: "More shares than text + images" },
    ]} />

    {/* ── THE VIDEO FUNNEL ── */}
    <section style={{ background: C.lightCream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="The Video Funnel">
          ONE VIDEO WON'T DO <span style={{ color: C.gold }}>EVERYTHING</span>
        </SectionHead>

        <R>
          <Sub style={{ maxWidth: "700px", marginBottom: "20px" }}>
            Most businesses make one video and hope it attracts, educates, and converts. It won't. Different people need different videos at different stages.
          </Sub>
        </R>
        <R delay={0.1}>
          <Insight
            emoji={<InsightLightbulbIcon size={24} color={C.gold} />}
            text="Think of it like dating. Short videos introduce you. Medium videos build trust. Long videos close the deal. You wouldn't propose on a first date."
          />
        </R>

        <div className="grid-cards" style={{ marginTop: "48px" }}>
          <R>
            <FunnelStage
              stage="TOP OF FUNNEL"
              label="DISCOVERY"
              color={C.green}
              goal="Get seen. Stop the scroll. Make people aware you exist. This is about reach and first impressions — nothing more."
              formats={["Instagram Reels", "TikTok Videos", "YouTube Shorts", "Social Clips"]}
            />
          </R>
          <R delay={0.1}>
            <FunnelStage
              stage="MIDDLE OF FUNNEL"
              label="CONSIDERATION"
              color={C.gold}
              goal="Build trust. Show expertise. The viewer knows you exist — now convince them you're the right choice."
              formats={["Explainer Videos", "Behind-the-Scenes", "Educational Content", "Podcast Clips"]}
            />
          </R>
          <R delay={0.2}>
            <FunnelStage
              stage="BOTTOM OF FUNNEL"
              label="DECISION"
              color="#C94A4A"
              goal="Convert. Remove doubt. Give them the final push. These videos directly drive sales, sign-ups, and bookings."
              formats={["Client Testimonials", "Case Study Films", "Product Demos", "Personalized Messages"]}
            />
          </R>
        </div>
      </div>
    </section>

    {/* ── WHAT WE CREATE ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="What We Create">
          SIX WAYS TO TELL <span style={{ color: C.gold }}>YOUR STORY</span>
        </SectionHead>

        <div className="grid-cards">
          {[
            { number: "01", title: "BRAND FILMS", description: "Cinematic stories that show who you are and why it matters. The kind of video people watch twice — and share with the people they care about." },
            { number: "02", title: "SHORT-FORM CONTENT", description: "Scroll-stopping videos engineered for each platform's algorithm. Reels. Shorts. TikToks. Built for reach, retention, and the replay button." },
            { number: "03", title: "EVENT COVERAGE", description: "Multi-camera production for conferences, fundraisers, and community events. Your event happened once — we make sure its impact lasts." },
            { number: "04", title: "DOCUMENTARY STYLE", description: "Long-form stories that build deep trust. Community profiles, organizational impact films, and narratives that move hearts and open wallets." },
            { number: "05", title: "PRODUCT VIDEOS", description: "Clean, compelling showcases that remove doubt and drive decisions. Features, benefits, and social proof — combined in under 60 seconds." },
            { number: "06", title: "VIDEO STRATEGY", description: "The system behind the production. Content calendars, platform selection, distribution planning, and performance analytics. We build the engine, not just the video." },
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
        <SectionHead tag="Our Process">
          FROM CONCEPT TO <span style={{ color: C.gold }}>SCREEN</span>
        </SectionHead>

        <R>
          <Sub style={{ maxWidth: "700px", marginBottom: "48px" }}>
            We don't start with cameras. We start with strategy. Every second of your video is mapped before we press record.
          </Sub>
        </R>

        <StepItem step="01" title="PRE-PRODUCTION" desc="Creative brief. Script. Storyboard. Location scout. Shot list. We plan every frame before a single camera turns on — because the best videos are built in pre-production, not saved in editing." />
        <StepItem step="02" title="PRODUCTION" desc="Professional crew, cinema-grade equipment, and directed shoots. Lighting, audio, framing, performance — all controlled to capture exactly what your story needs." />
        <StepItem step="03" title="POST-PRODUCTION" desc="Expert editing, color grading, motion graphics, sound design, and music. This is where good footage becomes a great video. Every frame polished to a professional standard." />
        <StepItem step="04" title="OPTIMIZE & DISTRIBUTE" desc="We don't hand you a file and disappear. Optimized exports for every platform, custom thumbnails, captions, and a release strategy to maximize reach." isLast />
      </div>
    </section>

    {/* ── PORTFOLIO ── */}
    <section style={{ background: C.cream, padding: "clamp(60px, 12vw, 120px) 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <SectionHead tag="Recent Work">
          FEATURED <span style={{ color: C.gold }}>PROJECTS</span>
        </SectionHead>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4px" }}>
          <R><VideoBlock label="Featured Video Project" aspect="56.25%" /></R>
        </div>
        <div className="grid-2" style={{ marginTop: "4px" }}>
          <R><ImgBlock label="Brand Film" h="clamp(250px, 40vw, 400px)" /></R>
          <R delay={0.1}><ImgBlock label="Event Coverage" h="clamp(250px, 40vw, 400px)" /></R>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <BottomCTA
      title="YOUR STORY IS WORTH"
      highlight="TELLING."
      subtitle="Let's build video content engineered for impact — from the first frame to the final conversion."
      buttonText="START YOUR PROJECT"
      buttonHref="/contact?service=video"
    />
  </div>
);

export default VideoMarketing;
