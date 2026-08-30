"use client";

import React from "react";
import { GraduationCap, Code, Briefcase, Flame, Award, Users, Terminal, Cpu, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Terminal,
    color: "#60a5fa",
    skills: ["C++", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    title: "Frontend",
    icon: Cpu,
    color: "#818cf8",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Backend & DB",
    icon: Database,
    color: "#a78bfa",
    skills: ["Node.js", "Express.js", "MongoDB", "Supabase", "REST APIs", "JWT Auth"],
  },
  {
    title: "Tools & Cloud",
    icon: Wrench,
    color: "#38bdf8",
    skills: ["Git", "GitHub", "Postman", "Docker", "VS Code", "AWS"],
  },
];

const About = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "5.5rem var(--gutter) 4rem",
        color: "#f8fafc",
      }}
    >
      <div style={{ maxWidth: "var(--container)", width: "100%" }}>
        {/* Section heading */}
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2
            className="section-heading gradient-text"
            style={{ display: "inline-block" }}
          >
            About Me
          </h2>
          <p style={{ color: "#cbd5e1", marginTop: "0.5rem", fontSize: "1rem" }}>
            Passionate MERN developer, AWS certified, perpetual learner.
          </p>
        </div>

        {/* Bento Grid Top Section: Bio & Stats */}
        <div
          className="fade-up fade-up-delay-1 about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem", marginBottom: "1.25rem" }}
        >
          {/* Bio card */}
          <div
            className="glass-card"
            style={{
              padding: "2.25rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 25px rgba(59, 130, 246, 0.35)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <h3
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "1.2rem",
              }}
            >
              Hello, I&apos;m <span style={{ color: "#60a5fa" }}>Ojasv Singh</span>
            </h3>
            <p style={{ color: "#e2e8f0", lineHeight: 1.8, marginBottom: "1rem", fontSize: "1rem" }}>
              I am a B.Tech student in Computer Science &amp; Information Technology at <strong style={{ color: "#ffffff" }}>KIET Group of Institutions</strong> and a full-stack MERN developer with hands-on experience building scalable web applications, automation pipelines, and AI-enabled products.
            </p>
            <p style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: "0.98rem" }}>
              Proficient in React.js, Next.js, Node.js, Express.js, MongoDB, Supabase, and AWS. Outside of web development, I have solved <strong style={{ color: "#60a5fa" }}>1000+ DSA problems</strong> across LeetCode, Codeforces, and CodeChef.
            </p>
          </div>

          {/* Stats card */}
          <div
            className="glass-card"
            style={{
              padding: "2rem",
              background: "linear-gradient(135deg, rgba(37,99,235,0.22), rgba(124,58,237,0.22))",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: "0.75rem",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                background: "rgba(59,130,246,0.25)",
                padding: "0.9rem",
                borderRadius: "var(--radius-full)",
              }}
            >
              <Code size={34} color="#60a5fa" />
            </div>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "3.2rem",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1,
              }}
            >
              1000+
            </p>
            <p style={{ color: "#cbd5e1", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              DSA Problems Solved
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.4rem 1rem",
                borderRadius: "var(--radius-full)",
                background: "rgba(250,204,21,0.12)",
                border: "1px solid rgba(250,204,21,0.3)",
                color: "#fbbf24",
                fontWeight: 600,
                fontSize: "0.85rem",
              }}
            >
              <Flame size={16} />
              400+ Day Streak
            </div>
          </div>
        </div>

        {/* Experience Section - Full Width Bento */}
        <div className="fade-up fade-up-delay-2" style={{ marginBottom: "1.25rem" }}>
          <div
            className="glass-card"
            style={{
              padding: "2.25rem",
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.4)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <Briefcase size={26} color="#a78bfa" />
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#ffffff" }}>
                Work Experience
              </h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="exp-grid">
              {/* Sparklog Ventures */}
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(168,85,247,0.25)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.5rem",
                  borderLeft: "3px solid #a855f7",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.4rem" }}>
                  <h4 style={{ fontWeight: 700, color: "#ffffff", fontSize: "1.05rem" }}>
                    Web Dev &amp; Automation Intern
                  </h4>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#c084fc",
                      background: "rgba(168,85,247,0.15)",
                      padding: "0.2rem 0.65rem",
                      borderRadius: "var(--radius-full)",
                      fontWeight: 600,
                    }}
                  >
                    Nov 2025 – Apr 2026
                  </span>
                </div>
                <p style={{ color: "#93c5fd", fontSize: "0.92rem", fontWeight: 600, marginBottom: "0.85rem" }}>
                  Sparklog Ventures LLP
                </p>
                <ul style={{ color: "#cbd5e1", fontSize: "0.88rem", lineHeight: 1.65, paddingLeft: "1.2rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li>Automated Excel reporting workflows using Python, reducing manual effort by ~60% across internal operations.</li>
                  <li>Integrated Supabase PostgreSQL databases and REST APIs for data storage and reporting pipelines across 3+ internal tools.</li>
                  <li>Engineered responsive Next.js frontend components, resolving 15+ production bugs and accelerating feature delivery.</li>
                </ul>
              </div>

              {/* CPByte */}
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.5rem",
                  borderLeft: "3px solid #3b82f6",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.4rem" }}>
                  <h4 style={{ fontWeight: 700, color: "#ffffff", fontSize: "1.05rem" }}>
                    Web Dev Contributor
                  </h4>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#60a5fa",
                      background: "rgba(59,130,246,0.15)",
                      padding: "0.2rem 0.65rem",
                      borderRadius: "var(--radius-full)",
                      fontWeight: 600,
                    }}
                  >
                    Mar 2024 – Present
                  </span>
                </div>
                <p style={{ color: "#93c5fd", fontSize: "0.92rem", fontWeight: 600, marginBottom: "0.85rem" }}>
                  CPByte, KIET Group of Institutions
                </p>
                <ul style={{ color: "#cbd5e1", fontSize: "0.88rem", lineHeight: 1.65, paddingLeft: "1.2rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li>Crafted reusable UI components with Next.js and Tailwind CSS, improving code reusability across 10+ pages.</li>
                  <li>Implemented authentication, dashboard, and event registration modules for student portal serving 200+ active users.</li>
                  <li>Optimized portal load time by 25% via component refactoring, lazy loading, and frontend performance tuning.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Certifications Row - Symmetrical Pair */}
        <div
          className="fade-up fade-up-delay-3"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem", marginBottom: "1.25rem" }}
          id="edu-cert-grid"
        >
          {/* Education card */}
          <div
            className="glass-card"
            style={{
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(74,222,128,0.4)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
                <GraduationCap size={26} color="#4ade80" />
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#ffffff" }}>
                  Education
                </h3>
              </div>
              <h4 style={{ fontWeight: 700, color: "#ffffff", fontSize: "1.1rem", marginBottom: "0.35rem" }}>
                B.Tech in Computer Science &amp; Information Technology
              </h4>
              <p style={{ color: "#93c5fd", fontSize: "0.95rem", fontWeight: 500, marginBottom: "0.3rem" }}>
                KIET Group of Institutions, Ghaziabad
              </p>
              <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginBottom: "1rem" }}>
                Dr. A.P.J. Abdul Kalam Technical University (AKTU) • Expected Jul 2028
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "1.25rem" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.4rem 0.9rem",
                    background: "rgba(74,222,128,0.15)",
                    border: "1px solid rgba(74,222,128,0.35)",
                    borderRadius: "var(--radius-md)",
                    color: "#4ade80",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                  }}
                >
                  CGPA: 9.46 / 10.0
                </span>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.4rem 0.9rem",
                    background: "rgba(59,130,246,0.15)",
                    border: "1px solid rgba(59,130,246,0.35)",
                    borderRadius: "var(--radius-md)",
                    color: "#93c5fd",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                  }}
                >
                  Top Academic Standing
                </span>
              </div>
            </div>

            <div>
              <p style={{ color: "#cbd5e1", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Relevant Coursework
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {["Data Structures & Algorithms", "Operating Systems", "DBMS", "Object-Oriented Programming"].map((course, cIdx) => (
                  <span key={cIdx} className="chip" style={{ fontSize: "0.78rem" }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div
            className="glass-card"
            style={{
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(251,191,36,0.4)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
                <Award size={26} color="#fbbf24" />
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#ffffff" }}>
                  AWS Certifications
                </h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: "var(--radius-md)", padding: "1.1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                    <h4 style={{ fontWeight: 700, color: "#fbbf24", fontSize: "0.95rem" }}>AWS Certified Cloud Practitioner</h4>
                    <span className="chip" style={{ borderColor: "rgba(245,158,11,0.35)", color: "#fbbf24", background: "rgba(245,158,11,0.15)" }}>AWS</span>
                  </div>
                  <p style={{ color: "#cbd5e1", fontSize: "0.85rem", marginTop: "0.4rem", lineHeight: 1.5 }}>
                    Cloud architecture, core AWS services, security, pricing models, and networking fundamentals.
                  </p>
                </div>

                <div style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.25)", borderRadius: "var(--radius-md)", padding: "1.1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                    <h4 style={{ fontWeight: 700, color: "#a5b4fc", fontSize: "0.95rem" }}>AWS Certified AI Practitioner</h4>
                    <span className="chip" style={{ borderColor: "rgba(99,102,241,0.35)", color: "#a5b4fc", background: "rgba(99,102,241,0.15)" }}>AWS</span>
                  </div>
                  <p style={{ color: "#cbd5e1", fontSize: "0.85rem", marginTop: "0.4rem", lineHeight: 1.5 }}>
                    AI/ML fundamentals, generative AI concepts, responsible AI practices, and AWS AI/ML services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Bento Section */}
        <div className="fade-up fade-up-delay-3" style={{ marginBottom: "1.25rem" }}>
          <div className="glass-card" style={{ padding: "2rem" }}>
            <h3
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#ffffff",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              <Terminal size={22} color="#60a5fa" />
              Technical Skills
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
              {skillCategories.map((cat, idx) => {
                const IconComponent = cat.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      background: "rgba(15, 23, 42, 0.7)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "var(--radius-lg)",
                      padding: "1.25rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
                      <IconComponent size={18} color={cat.color} />
                      <h4 style={{ fontWeight: 600, fontSize: "0.95rem", color: "#ffffff" }}>{cat.title}</h4>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                      {cat.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Leadership & Activities Full Width */}
        <div className="fade-up fade-up-delay-4">
          <div className="glass-card" style={{ padding: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <Users size={24} color="#38bdf8" />
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#ffffff" }}>
                Leadership &amp; Activities
              </h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }} className="lead-grid">
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(56,189,248,0.25)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.25rem",
                  borderLeft: "3px solid #38bdf8",
                }}
              >
                <h4 style={{ fontWeight: 600, color: "#ffffff", fontSize: "0.98rem", marginBottom: "0.25rem" }}>
                  Web &amp; CP/DSA Coordinator
                </h4>
                <p style={{ color: "#38bdf8", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                  CPByte, Technocrats, DevUps
                </p>
                <p style={{ color: "#cbd5e1", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  Organized 5+ workshops on DSA, competitive programming, and MERN stack; mentored 50+ junior students in web development and algorithmic problem solving.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(129,140,248,0.25)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.25rem",
                  borderLeft: "3px solid #818cf8",
                }}
              >
                <h4 style={{ fontWeight: 600, color: "#ffffff", fontSize: "0.98rem", marginBottom: "0.25rem" }}>
                  Member - KIET Koders Korner
                </h4>
                <p style={{ color: "#818cf8", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Competitive Programming Community
                </p>
                <p style={{ color: "#cbd5e1", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  Actively competed in 10+ programming contests and peer DSA sessions, strengthening algorithmic problem-solving skills across LeetCode, Codeforces, and CodeChef.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 2fr 1fr !important;
          }
          .exp-grid { grid-template-columns: 1fr 1fr !important; }
          #edu-cert-grid { grid-template-columns: 1fr 1fr !important; }
          .lead-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default About;