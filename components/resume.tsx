"use client";

import React from "react";
import { Download, FileText, ExternalLink, Award, Briefcase, GraduationCap, Code } from "lucide-react";

const Resume = () => {
  const resumeUrl = "/OjasvSinghResume.pdf";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "5.5rem var(--gutter) 4rem",
      }}
    >
      <div style={{ maxWidth: "var(--container)", width: "100%" }}>
        {/* Header Bar */}
        <div
          className="fade-up glass-card"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.25rem 2rem",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                background: "rgba(59,130,246,0.15)",
                padding: "0.5rem",
                borderRadius: "var(--radius-md)",
              }}
            >
              <FileText size={24} color="#60a5fa" />
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  color: "#fff",
                }}
              >
                Curriculum Vitae
              </h2>
              <p style={{ color: "var(--on-surface-muted)", fontSize: "0.85rem" }}>
                Full-Stack Developer &amp; AWS Certified Practitioner
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.75rem" }}>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}
            >
              <ExternalLink size={16} /> Open in Tab
            </a>
            <a
              href={resumeUrl}
              download="Ojasv_Singh_Resume.pdf"
              className="btn-primary"
              style={{ padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}
            >
              <Download size={16} /> Download PDF
            </a>
          </div>
        </div>

        {/* Quick Highlights Row */}
        <div
          className="fade-up fade-up-delay-1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <div className="glass-card" style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <GraduationCap size={24} color="#4ade80" />
            <div>
              <p style={{ color: "var(--outline)", fontSize: "0.75rem", textTransform: "uppercase", fontWeight: 600 }}>Education</p>
              <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>B.Tech CSIT (9.46 CGPA)</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Code size={24} color="#60a5fa" />
            <div>
              <p style={{ color: "var(--outline)", fontSize: "0.75rem", textTransform: "uppercase", fontWeight: 600 }}>Problem Solving</p>
              <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>1000+ DSA Solved</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Award size={24} color="#f59e0b" />
            <div>
              <p style={{ color: "var(--outline)", fontSize: "0.75rem", textTransform: "uppercase", fontWeight: 600 }}>AWS Certifications</p>
              <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>Cloud &amp; AI Practitioner</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Briefcase size={24} color="#a78bfa" />
            <div>
              <p style={{ color: "var(--outline)", fontSize: "0.75rem", textTransform: "uppercase", fontWeight: 600 }}>Experience</p>
              <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>Sparklog Ventures &amp; CPByte</p>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div
          className="fade-up fade-up-delay-2 glass-card"
          style={{
            width: "100%",
            height: "78vh",
            overflow: "hidden",
            position: "relative",
            padding: "0.5rem",
          }}
        >
          <object
            data={resumeUrl}
            type="application/pdf"
            style={{ width: "100%", height: "100%", borderRadius: "var(--radius-lg)" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  background: "rgba(59,130,246,0.12)",
                  padding: "1rem",
                  borderRadius: "var(--radius-full)",
                  marginBottom: "1rem",
                }}
              >
                <FileText size={40} color="#60a5fa" />
              </div>
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "#fff",
                  marginBottom: "0.5rem",
                }}
              >
                View Resume PDF
              </h3>
              <p style={{ color: "var(--on-surface-muted)", maxWidth: "380px", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
                Your browser doesn&apos;t support direct PDF embedding. Click below to view or download directly.
              </p>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={18} /> Open PDF in New Tab
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
};

export default Resume;