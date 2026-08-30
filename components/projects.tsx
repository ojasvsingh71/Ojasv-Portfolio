"use client";

import React from "react";
import { Folder, Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

const projectsData: Project[] = [
  {
    title: "DSA Tracker Leaderboard",
    description:
      "Architected a MERN-stack leaderboard tracking cross-platform DSA progress (LeetCode, CodeChef, Codeforces) for 100+ students with real-time stats, streaks, difficulty breakdowns, and cron-based daily auto-sync.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST & GraphQL"],
    link: "https://dsa-tracker-leaderboard.vercel.app",
    github: "https://github.com/ojasvsingh71/DSA-Tracker-LeaderBoard",
  },
  {
    title: "LawSetu - AI Legal Documentation Platform",
    description:
      "AI-driven legal platform with OpenAI-powered contract drafting, live Markdown preview, and PDF export supporting 5+ legal templates (NDA, Employment, Lease) with Google OAuth + OCR upload.",
    tech: ["Next.js", "Node.js", "MongoDB", "OpenAI API", "Google OAuth", "Passport.js"],
    link: "https://law-setu.vercel.app/",
    github: "https://github.com/ojasvsingh71/LawSetu",
  },
  {
    title: "MiniMoo - Friendly Chatbot",
    description:
      "A quirky, interactive AI chatbot powered by OpenAI API. Designed for dynamic conversational flows with a secure Node.js backend integration.",
    tech: ["React.js", "Node.js", "Express.js", "OpenAI API"],
    github: "https://github.com/ojasvsingh71/MiniMoo",
    link: "https://mini-moo.vercel.app/",
  },
  {
    title: "Samaj Sandesh",
    description:
      "A community-focused web platform that delivers announcements, localized news, and real-time weather in one unified place with accessible UI.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/ojasvsingh71/Samaj-Sandesh",
    link: "https://samaj-sandesh.vercel.app/",
  },
  {
    title: "Habit Builder App",
    description:
      "A productivity-focused MERN application to help users build and maintain daily habits with secure JWT authentication and visual progress tracking.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth"],
    github: "https://github.com/ojasvsingh71/Habit-Builder",
    link: "https://habit-builder-five.vercel.app/",
  },
  {
    title: "SheGuard - Deepfake Detection",
    description:
      "AI-powered web application that detects deepfake imagery using TensorFlow and Google Vision API, combating digital misinformation.",
    tech: ["React.js", "Flask", "TensorFlow", "Google Vision API"],
    github: "https://github.com/ojasvsingh71/SheGuard",
    link: "https://she-guard.vercel.app/",
  },
  {
    title: "EcoQuest",
    description:
      "Gamified React web application rewarding users for eco-friendly sustainability actions, carbon footprint reduction, and green quests.",
    tech: ["React.js", "Tailwind CSS", "Gamification"],
    github: "https://github.com/ojasvsingh71/ecoquest",
    link: "https://ecoquest-drab.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "5.5rem var(--gutter) 4rem",
        color: "#f8fafc",
      }}
    >
      <div style={{ maxWidth: "var(--container)", width: "100%" }}>
        {/* Heading */}
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 className="section-heading gradient-text" style={{ display: "inline-block" }}>
            Featured Projects
          </h2>
          <p style={{ color: "#cbd5e1", marginTop: "0.5rem", fontSize: "1rem" }}>
            Real-world applications, AI platforms, and open-source tools I&apos;ve engineered.
          </p>
        </div>

        {/* Projects grid */}
        <div
          className="fade-up fade-up-delay-1 projects-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.35rem" }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="glass-card project-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.4)";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(59, 130, 246, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Card top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                <Folder size={34} color="#60a5fa" />
                <div style={{ display: "flex", gap: "1rem" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Code"
                      style={{ color: "#94a3b8", transition: "color 0.2s", display: "flex" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      style={{ color: "#94a3b8", transition: "color 0.2s", display: "flex" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#ffffff",
                  marginBottom: "0.85rem",
                  lineHeight: 1.35,
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  flexGrow: 1,
                  marginBottom: "1.4rem",
                }}
              >
                {project.description}
              </p>

              {/* Tech chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginTop: "auto" }}>
                {project.tech.map((tech, i) => (
                  <span key={i} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </div>
  );
};

export default Projects;