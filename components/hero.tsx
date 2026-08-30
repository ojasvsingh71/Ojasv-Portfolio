"use client";

import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ArrowRight, FileText } from "lucide-react";
import infinityAnimation from "./assets/infnity.json";

const Hero = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "4.75rem var(--gutter) 2.5rem",
        overflow: "hidden",
        color: "#f8fafc",
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "5%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "var(--container)",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3.5rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* LEFT: text content */}
        <div
          className="fade-up"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.5rem",
          }}
        >
          {/* Open to Work badge */}
          <div
            className="fade-up fade-up-delay-1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1.1rem",
              borderRadius: "var(--radius-full)",
              background: "rgba(59, 130, 246, 0.15)",
              border: "1px solid rgba(59, 130, 246, 0.35)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "#4ade80",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                color: "#93c5fd",
                letterSpacing: "0.04em",
              }}
            >
              Open to Work
            </span>
          </div>

          {/* Name */}
          <div className="fade-up fade-up-delay-1">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.2rem",
                color: "#cbd5e1",
                marginBottom: "0.4rem",
                fontWeight: 500,
              }}
            >
              Hi There! I&apos;m
            </p>
            <h1
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(3.2rem, 8vw, 5.2rem)",
                fontWeight: 800,
                lineHeight: 1.25,
                letterSpacing: "-0.03em",
                background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
                paddingBottom: "0.15em",
              }}
            >
              Ojasv Singh
            </h1>
          </div>

          {/* Typewriter */}
          <h2
            className="fade-up fade-up-delay-2"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(1.3rem, 3.5vw, 1.9rem)",
              fontWeight: 700,
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              minHeight: "2.8rem",
            }}
          >
            <span style={{ color: "#60a5fa" }}>&gt;</span>
            <Typewriter
              words={[
                "Full Stack MERN Developer",
                "AWS Certified Practitioner",
                "1000+ DSA Problems Solved",
                "Open Source Contributor",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          {/* Bio */}
          <p
            className="fade-up fade-up-delay-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#cbd5e1",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              maxWidth: "500px",
            }}
          >
            I build scalable, pixel-perfect, and high-performance web applications.
            Focused on clean architecture, AI-enabled tools, and solving complex algorithmic challenges.
          </p>

          {/* CTAs */}
          <div
            className="fade-up fade-up-delay-3"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", paddingTop: "0.5rem" }}
          >
            <Link href="/projects" className="btn-primary">
              View My Work <ArrowRight size={18} />
            </Link>
            <Link href="/resume" className="btn-ghost">
              Resume <FileText size={18} />
            </Link>
          </div>

          {/* Social links */}
          <div
            className="glass-card fade-up fade-up-delay-4"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              padding: "0.9rem 1.85rem",
              marginTop: "0.5rem",
            }}
          >
            <a
              href="https://github.com/ojasvsingh71"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              style={{ color: "#cbd5e1", fontSize: "1.4rem", transition: "all 0.25s", display: "flex" }}
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ojasv-singh-b80b52326/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              style={{ color: "#60a5fa", fontSize: "1.4rem", transition: "all 0.25s", display: "flex" }}
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/ojasvsingh1971/"
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode"
              style={{ color: "#fbbf24", fontSize: "1.4rem", transition: "all 0.25s", display: "flex" }}
              className="social-icon"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>

        {/* RIGHT: Lottie */}
        <div
          className="fade-up fade-up-delay-2 hero-right"
          style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}
        >
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ width: "100%", maxWidth: "440px", position: "relative" }}>
            <Lottie animationData={infinityAnimation} loop={true} />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 1.15fr 0.85fr !important; }
          .hero-right { order: 1; }
          .fade-up { align-items: flex-start !important; text-align: left !important; }
          .fade-up h2, .fade-up div { justify-content: flex-start !important; }
        }
        .social-icon:hover { color: #ffffff !important; transform: scale(1.15); }
      `}</style>
    </div>
  );
};

export default Hero;