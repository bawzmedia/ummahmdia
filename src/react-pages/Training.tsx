import { useState } from "react";
import {
  C, R, BigText, Sub, Tag, Line, CTA,
  SectionHead, StatBar, StepItem, FeatureCard, BottomCTA,
} from "../shared";
import { IslamicPattern, GoldRays } from "../backgrounds";
import {
  TRAINING_PHASES,
  TRAINING_OUTCOMES,
  TRAINING_FAQ,
  TRAINING_INCLUDED,
  TRAINING_STATS,
} from "../lib/training-data";

// ─── Stats adapter (training-data uses `value`, StatBar expects `num`) ───
const STAT_BAR_DATA = TRAINING_STATS.map(s => ({ num: s.value, label: s.label }));

// ─── Phase card (8-phase program) ───
const PhaseCard = ({ number, name, weeks, focus, delay }: {
  number: number; name: string; weeks: string; focus: string; delay: number;
}) => {
  const [h, setH] = useState(false);
  return (
    <R delay={delay}>
      <div
        onMouseEnter={() => setH(true)}
        onMouseLeave={() => setH(false)}
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
          padding: "28px 32px",
          background: h ? C.white : C.card,
          border: `2px solid ${h ? C.gold : C.goldDim}`,
          transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
          boxShadow: h ? "0 12px 32px rgba(201,169,97,0.14)" : "0 2px 8px rgba(0,0,0,0.03)",
          transform: h ? "translateY(-3px)" : "translateY(0)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", top: 0, left: 0, bottom: 0,
          width: "3px",
          background: `linear-gradient(180deg, ${C.gold}, transparent)`,
          opacity: h ? 1 : 0,
          transition: "opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }} />
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(40px, 8vw, 60px)",
          color: h ? C.gold : "rgba(201,169,97,0.25)",
          lineHeight: 1,
          minWidth: "56px",
          flexShrink: 0,
          transition: "color 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }}>
          {String(number).padStart(2, "0")}
        </span>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap", marginBottom: "8px" }}>
            <h3 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(18px, 3.5vw, 24px)",
              letterSpacing: "2px",
              color: C.textDark,
              margin: 0,
            }}>
              {name}
            </h3>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              letterSpacing: "2px",
              color: C.gold,
              textTransform: "uppercase",
              background: C.goldDim,
              padding: "3px 10px",
              whiteSpace: "nowrap",
            }}>
              Week{weeks.includes("-") ? "s" : ""} {weeks}
            </span>
          </div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            color: C.textMid,
            lineHeight: 1.6,
            margin: 0,
          }}>
            {focus}
          </p>
        </div>
      </div>
    </R>
  );
};

// ─── FAQ accordion item ───
const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <R delay={index * 0.06}>
      <div style={{
        border: `2px solid ${open ? C.gold : C.goldDim}`,
        marginBottom: "12px",
        transition: "border-color 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        overflow: "hidden",
      }}>
        <button
          onClick={() => setOpen(prev => !prev)}
          style={{
            width: "100%",
            background: open ? C.goldDim : "transparent",
            border: "none",
            padding: "20px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            gap: "16px",
            transition: "background 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(16px, 3vw, 20px)",
            letterSpacing: "2px",
            color: open ? C.gold : C.textDark,
            textAlign: "left",
            transition: "color 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}>
            {question}
          </span>
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "20px",
            color: C.gold,
            flexShrink: 0,
            transform: open ? "rotate(45deg)" : "rotate(0)",
            transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
            lineHeight: 1,
          }}>
            +
          </span>
        </button>
        <div style={{
          maxHeight: open ? "200px" : "0",
          overflow: "hidden",
          transition: "max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            color: C.textMid,
            lineHeight: 1.7,
            padding: "0 24px 20px",
            margin: 0,
          }}>
            {answer}
          </p>
        </div>
      </div>
    </R>
  );
};

// ─── Input field helper ───
const inputStyle = (focused: boolean): React.CSSProperties => ({
  width: "100%",
  boxSizing: "border-box",
  background: "#FFFFFF",
  border: `2px solid ${focused ? C.gold : "rgba(201,169,97,0.15)"}`,
  padding: "14px 16px",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "15px",
  color: C.textDark,
  outline: "none",
  transition: "border-color 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
  borderRadius: 0,
});

const labelStyle: React.CSSProperties = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: "14px",
  letterSpacing: "2px",
  color: C.textDark,
  display: "block",
  marginBottom: "8px",
};

// ─── Apply section ───
const ApplySection = () => {
  const [fields, setFields] = useState({ name: "", email: "", phone: "", motivation: "", niche: "" });
  const [focused, setFocused] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const set = (key: string, value: string) =>
    setFields(prev => ({ ...prev, [key]: value }));

  const focusOn = (key: string) => setFocused(prev => ({ ...prev, [key]: true }));
  const focusOff = (key: string) => setFocused(prev => ({ ...prev, [key]: false }));

  const validate = (): string => {
    if (!fields.name.trim()) return "Please enter your full name.";
    if (!fields.email.trim()) return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) return "Please enter a valid email address.";
    if (!fields.phone.trim()) return "Please enter your phone number.";
    if (!fields.motivation.trim()) return "Please tell us why you want to join this program.";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) { setError(validationError); return; }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/training-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          phone: fields.phone.trim(),
          motivation: fields.motivation.trim(),
          niche: fields.niche.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setSuccess(true);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="apply"
      style={{
        background: C.cream,
        padding: "clamp(80px, 14vw, 120px) 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <IslamicPattern opacity={0.025} />
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionHead tag="APPLY">
          JOIN THE <span style={{ color: C.gold }}>FOUNDING COHORT</span>
        </SectionHead>

        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          {success ? (
            <R>
              <div style={{
                background: C.white,
                border: `2px solid ${C.gold}`,
                padding: "48px 40px",
                textAlign: "center",
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  border: `2px solid ${C.gold}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}>
                  <span style={{ color: C.gold, fontSize: "22px", lineHeight: 1 }}>&#10003;</span>
                </div>
                <h3 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(28px, 6vw, 40px)",
                  letterSpacing: "2px",
                  color: C.textDark,
                  marginBottom: "16px",
                }}>
                  APPLICATION RECEIVED
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  color: C.textMid,
                  lineHeight: 1.7,
                  maxWidth: "400px",
                  margin: "0 auto",
                }}>
                  Thank you for applying to the founding cohort. We review every application personally and will be in touch within 48 hours.
                </p>
              </div>
            </R>
          ) : (
            <R delay={0.1}>
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {/* Full name */}
                  <div>
                    <label style={labelStyle}>
                      FULL NAME <span style={{ color: C.gold }}>*</span>
                    </label>
                    <input
                      type="text"
                      value={fields.name}
                      onChange={e => set("name", e.target.value)}
                      onFocus={() => focusOn("name")}
                      onBlur={() => focusOff("name")}
                      placeholder="Ahmed Al-Rashid"
                      required
                      style={inputStyle(!!focused["name"])}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>
                      EMAIL ADDRESS <span style={{ color: C.gold }}>*</span>
                    </label>
                    <input
                      type="email"
                      value={fields.email}
                      onChange={e => set("email", e.target.value)}
                      onFocus={() => focusOn("email")}
                      onBlur={() => focusOff("email")}
                      placeholder="you@example.com"
                      required
                      style={inputStyle(!!focused["email"])}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={labelStyle}>
                      PHONE NUMBER <span style={{ color: C.gold }}>*</span>
                    </label>
                    <input
                      type="tel"
                      value={fields.phone}
                      onChange={e => set("phone", e.target.value)}
                      onFocus={() => focusOn("phone")}
                      onBlur={() => focusOff("phone")}
                      placeholder="+1 (780) 555-0100"
                      required
                      style={inputStyle(!!focused["phone"])}
                    />
                  </div>

                  {/* Motivation */}
                  <div>
                    <label style={labelStyle}>
                      WHY DO YOU WANT TO JOIN THIS PROGRAM? <span style={{ color: C.gold }}>*</span>
                    </label>
                    <textarea
                      value={fields.motivation}
                      onChange={e => set("motivation", e.target.value)}
                      onFocus={() => focusOn("motivation")}
                      onBlur={() => focusOff("motivation")}
                      placeholder="Tell us what brought you here and what you hope to build..."
                      required
                      rows={5}
                      style={{
                        ...inputStyle(!!focused["motivation"]),
                        resize: "vertical",
                        minHeight: "120px",
                      }}
                    />
                  </div>

                  {/* Niche */}
                  <div>
                    <label style={{ ...labelStyle, color: C.textMid }}>
                      WHAT INDUSTRY ARE YOU INTERESTED IN SERVING?{" "}
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "11px",
                        letterSpacing: "1px",
                        color: C.textLight,
                        textTransform: "uppercase",
                      }}>
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      value={fields.niche}
                      onChange={e => set("niche", e.target.value)}
                      onFocus={() => focusOn("niche")}
                      onBlur={() => focusOff("niche")}
                      placeholder="e.g. Halal food, Islamic schools, Muslim-owned restaurants..."
                      style={inputStyle(!!focused["niche"])}
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <div style={{
                      background: "rgba(220,38,38,0.06)",
                      border: "1px solid rgba(220,38,38,0.25)",
                      padding: "14px 16px",
                    }}>
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                        color: "#B91C1C",
                        margin: 0,
                        lineHeight: 1.5,
                      }}>
                        {error}
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <div>
                    <CTA onClick={undefined}>
                      {loading ? "SUBMITTING..." : "SUBMIT APPLICATION"}
                    </CTA>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "12px",
                      color: C.textLight,
                      marginTop: "14px",
                      lineHeight: 1.5,
                    }}>
                      Limited to 10 seats. We review every application personally and respond within 48 hours.
                    </p>
                  </div>
                </div>
              </form>
            </R>
          )}
        </div>
      </div>
    </section>
  );
};

// ─── Main component ───
const Training = () => {
  const scrollToApply = () => {
    const el = document.getElementById("apply");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "flex-end",
        background: `radial-gradient(ellipse at 20% 30%, ${C.greenDim}, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(201,169,97,0.05), transparent 45%), ${C.lightCream}`,
        padding: "clamp(140px, 18vw, 200px) 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        <IslamicPattern opacity={0.04} />
        <GoldRays opacity={0.06} />
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}>
          <R>
            {/* Founding cohort badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: C.goldDim,
              border: `1px solid ${C.gold}`,
              padding: "8px 20px",
              marginBottom: "28px",
            }}>
              <span style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: C.gold,
                flexShrink: 0,
                display: "inline-block",
              }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: C.gold,
              }}>
                FOUNDING COHORT — LIMITED TO 10 SEATS
              </span>
            </div>

            {/* Main headline */}
            <BigText size="clamp(44px, 11vw, 130px)">
              LEARN TO BUILD AN<br />
              AI MARKETING<br />
              <span style={{ color: C.gold }}>AGENCY</span>
            </BigText>
          </R>

          <R delay={0.12}>
            <BigText size="clamp(36px, 9vw, 100px)" style={{ marginTop: "4px" }}>
              IN <span style={{ color: C.gold }}>16 WEEKS</span>
            </BigText>
          </R>

          <R delay={0.2}>
            <Sub style={{
              marginTop: "28px",
              maxWidth: "520px",
              fontSize: "clamp(14px, 3.5vw, 17px)",
            }}>
              In-person. Edmonton, AB. Graduate with your first paying client.
            </Sub>
          </R>

          <R delay={0.3}>
            <div style={{ marginTop: "36px" }}>
              <CTA onClick={scrollToApply}>APPLY NOW</CTA>
            </div>
          </R>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <StatBar stats={STAT_BAR_DATA} />

      {/* ── THE GAP ── */}
      <section style={{ background: C.cream, padding: "clamp(80px, 14vw, 120px) 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHead tag="The Problem">
            THE <span style={{ color: C.gold }}>GAP</span>
          </SectionHead>

          <R delay={0.1}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(16px, 3.5vw, 22px)",
              color: C.textDark,
              lineHeight: 1.7,
              maxWidth: "780px",
              fontWeight: 500,
            }}>
              Every business needs AI. Every business needs a website that works. Every business needs someone who can walk in, understand their problem, and solve it with technology.
            </p>
          </R>
          <R delay={0.18}>
            <Line w="80px" />
          </R>
          <R delay={0.22}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(14px, 3vw, 18px)",
              color: C.textMid,
              lineHeight: 1.7,
              maxWidth: "680px",
              marginTop: "8px",
            }}>
              Nobody is trained to do this. Until now.
            </p>
          </R>
        </div>
      </section>

      {/* ── THE METHOD ── */}
      <section style={{ background: C.lightCream, padding: "clamp(80px, 14vw, 120px) 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHead tag="The Program">
            THE <span style={{ color: C.gold }}>METHOD</span>
          </SectionHead>

          <R delay={0.08}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: C.gold,
              marginBottom: "48px",
            }}>
              Learn → Niche → Build → Value → Prospect → Acquire → Deliver → Finish
            </p>
          </R>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {TRAINING_PHASES.map((phase, i) => (
              <PhaseCard
                key={phase.number}
                number={phase.number}
                name={phase.name}
                weeks={phase.weeks}
                focus={phase.focus}
                delay={i * 0.07}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL BUILD ── */}
      <section style={{ background: C.cream, padding: "clamp(80px, 14vw, 120px) 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHead tag="Deliverables">
            WHAT YOU'LL <span style={{ color: C.gold }}>BUILD</span>
          </SectionHead>

          <div className="grid-cards">
            {[
              {
                number: "01",
                title: "WEBSITE + AI CHATBOT",
                description: "A live website built for a real business, complete with an AI chatbot that captures leads 24/7. Not a demo — a deployed, functional product.",
              },
              {
                number: "02",
                title: "SOCIAL MEDIA PRESENCE",
                description: "A fully set-up presence across 4 platforms with content strategy, branded assets, and your first 30 days of content ready to publish.",
              },
              {
                number: "03",
                title: "SALES PIPELINE",
                description: "100+ real leads in a structured outreach pipeline. Phone numbers, emails, follow-up sequences — a real pipeline, not a spreadsheet exercise.",
              },
              {
                number: "04",
                title: "YOUR FIRST PAYING CLIENT",
                description: "This is the graduation requirement. By Week 16 you will have closed your first client and delivered real results. Revenue, not certificates.",
              },
            ].map((item, i) => (
              <R key={i} delay={i * 0.08}>
                <FeatureCard {...item} />
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDING MEMBER DEAL ── */}
      <section style={{
        background: `linear-gradient(180deg, ${C.lightCream}, ${C.greenDim}, ${C.lightCream})`,
        padding: "clamp(80px, 14vw, 120px) 24px",
        position: "relative",
        overflow: "hidden",
      }}>
        <IslamicPattern opacity={0.025} />
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "60px",
            alignItems: "flex-start",
          }}>
            {/* Left: price block */}
            <R>
              <div style={{ minWidth: "220px" }}>
                <Tag>Founding Cohort Pricing</Tag>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(80px, 18vw, 140px)",
                    color: C.gold,
                    lineHeight: 0.9,
                    letterSpacing: "-2px",
                  }}>
                    $200
                  </span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "18px",
                    color: C.textMid,
                    lineHeight: 1.2,
                  }}>
                    /month
                  </span>
                </div>
                <Line />
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(14px, 3vw, 16px)",
                  color: C.textMid,
                  lineHeight: 1.6,
                  marginBottom: "16px",
                }}>
                  × 4 months = <strong style={{ color: C.textDark }}>$800 total</strong>
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "1.5px",
                  color: C.textLight,
                  textTransform: "uppercase",
                }}>
                  The lowest price this program will ever be.
                </p>
              </div>
            </R>

            {/* Right: what's included */}
            <R delay={0.15}>
              <div style={{ flex: 1, minWidth: "260px" }}>
                <div style={{
                  border: `2px solid ${C.gold}`,
                  padding: "36px 32px",
                  background: C.white,
                  position: "relative",
                }}>
                  {/* Founding Member badge */}
                  <div style={{
                    position: "absolute",
                    top: "-14px",
                    left: "24px",
                    background: C.gold,
                    padding: "4px 16px",
                  }}>
                    <span style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "13px",
                      letterSpacing: "2px",
                      color: C.white,
                    }}>
                      FOUNDING MEMBER
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "22px",
                    letterSpacing: "2px",
                    color: C.textDark,
                    marginBottom: "24px",
                    marginTop: "12px",
                  }}>
                    EVERYTHING INCLUDED
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {TRAINING_INCLUDED.map((item, i) => (
                      <div key={i} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        padding: "10px 0",
                        borderBottom: i < TRAINING_INCLUDED.length - 1 ? `1px solid ${C.goldDim}` : "none",
                      }}>
                        <span style={{
                          color: C.gold,
                          fontSize: "16px",
                          lineHeight: 1.4,
                          flexShrink: 0,
                        }}>
                          ✓
                        </span>
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "14px",
                          color: C.textDark,
                          lineHeight: 1.5,
                          fontWeight: 500,
                        }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section style={{ background: C.cream, padding: "clamp(80px, 14vw, 120px) 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHead tag="Results">
            AFTER 16 WEEKS,<br />
            YOU WILL <span style={{ color: C.gold }}>HAVE</span>:
          </SectionHead>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {TRAINING_OUTCOMES.map((outcome, i) => {
              const isLast = i === TRAINING_OUTCOMES.length - 1;
              return (
                <R key={i} delay={i * 0.07}>
                  <div style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                    padding: "22px 0",
                    borderBottom: isLast ? "none" : `1px solid ${C.goldDim}`,
                  }}>
                    <span style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "20px",
                      color: C.gold,
                      flexShrink: 0,
                      lineHeight: 1.4,
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: isLast ? "clamp(15px, 3vw, 18px)" : "clamp(14px, 2.8vw, 16px)",
                      color: isLast ? C.gold : C.textDark,
                      lineHeight: 1.6,
                      margin: 0,
                      fontWeight: isLast ? 700 : 500,
                    }}>
                      {outcome}
                    </p>
                  </div>
                </R>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INSTRUCTOR ── */}
      <section style={{ background: C.lightCream, padding: "clamp(80px, 14vw, 120px) 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="grid-split" style={{ gap: "60px", alignItems: "center" }}>
            <R>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "32px" }}>
                {/* Photo placeholder */}
                <div style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: C.green,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `3px solid ${C.gold}`,
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "36px",
                    color: C.gold,
                    letterSpacing: "2px",
                  }}>
                    AB
                  </span>
                </div>

                <div>
                  <Tag>Your Instructor</Tag>
                  <h2 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(36px, 7vw, 64px)",
                    color: C.textDark,
                    letterSpacing: "-1px",
                    lineHeight: 0.95,
                    marginBottom: "8px",
                  }}>
                    AHMED<br />BAWAZIR
                  </h2>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: C.gold,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginBottom: "24px",
                  }}>
                    Founder, Ummah Media Corporation
                  </p>
                  <Line />
                </div>
              </div>
            </R>

            <R delay={0.15}>
              <div>
                <Sub style={{ maxWidth: "none", fontSize: "clamp(14px, 3vw, 17px)", marginBottom: "20px" }}>
                  Ahmed built Ummah Media from the ground up — growing it into a full-service AI marketing agency serving Muslim businesses across Canada. He has personally built websites, automation systems, social media presences, and client pipelines from scratch.
                </Sub>
                <Sub style={{ maxWidth: "none", fontSize: "clamp(14px, 3vw, 17px)", marginBottom: "20px" }}>
                  The UMTI program isn't theory. It's Ahmed documenting exactly what he did, distilling it into 16 weeks, and putting you in the room to do it too.
                </Sub>
                <Sub style={{ maxWidth: "none", fontSize: "clamp(14px, 3vw, 17px)" }}>
                  His goal: train the next generation of Muslim entrepreneurs to use AI as a tool for economic independence and community impact.
                </Sub>
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: C.cream, padding: "clamp(80px, 14vw, 120px) 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <SectionHead tag="Questions">
            FREQUENTLY ASKED<br />
            <span style={{ color: C.gold }}>QUESTIONS</span>
          </SectionHead>

          <div style={{ marginTop: "8px" }}>
            {TRAINING_FAQ.map((item, i) => (
              <FAQItem
                key={i}
                index={i}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY FORM ── */}
      <ApplySection />

      {/* ── BOTTOM CTA ── */}
      <BottomCTA
        title="LIMITED TO"
        highlight="10 SEATS."
        subtitle="Apply now for the founding cohort — the lowest price this program will ever be."
        buttonText="APPLY NOW"
        onButtonClick={() => {
          const el = document.getElementById("apply");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
};

export default Training;
