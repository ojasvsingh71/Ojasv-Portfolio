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
      "Full-stack web app to track and display student DSA progress (from LeetCode, CodeChef, Codeforces) via public leaderboards. Encourages consistency with real-time updates.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://dsa-tracker-leaderboard.vercel.app",
    github: "https://github.com/ojasvsingh71/DSA-Tracker-LeaderBoard",
  },
  {
    title: "LawSetu - Document Editor",
    description:
      "An AI-powered legal documentation assistant helping users draft, review, and manage legal documents quickly and accurately using artificial intelligence.",
    tech: ["React", "Node.js", "Express", "OpenAI API"],
    link: "https://law-setu.vercel.app/",
    github: "https://github.com/ojasvsingh71/LawSetu",
  },
  {
    title: "MiniMoo - Friendly Chatbot",
    description:
      "A quirky, endlessly talkative AI chatbot powered by OpenAI API. Designed for fun, friendly conversations with a secure backend integration.",
    tech: ["React", "Node.js", "Express", "OpenAI API"],
    github: "https://github.com/ojasvsingh71/MiniMoo",
    link: "https://mini-moo.vercel.app/",
  },
  {
    title: "Samaj Sandesh",
    description:
      "A community-focused web platform that delivers and displays announcements, news, and weather in one unified place — accessible to all.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/ojasvsingh71/Samaj-Sandesh",
    link: "https://samaj-sandesh.vercel.app/",
  },
  {
    title: "Habit Builder App",
    description:
      "A productivity-focused MERN app to help users track and build daily habits with secure JWT authentication and visual progress tracking.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/ojasvsingh71/Habit-Builder",
    link: "https://habit-builder-five.vercel.app/",
  },
  {
    title: "SheGuard - Deepfake Detection",
    description:
      "AI-powered web app that detects deepfake images using TensorFlow and Google Vision API. A robust step toward combating digital misinformation.",
    tech: ["React", "Flask", "TensorFlow"],
    github: "https://github.com/ojasvsingh71/SheGuard",
    link: "https://she-guard.vercel.app/",
  },
  {
    title: "EcoQuest",
    description:
      "Gamified React app that rewards users for eco-friendly actions like reducing carbon footprint and completing green quests.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/ojasvsingh71/ecoquest",
    link: "https://ecoquest-drab.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-24 sm:py-32 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-12 sm:mb-16">
          Featured Projects
        </h2>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/30 flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-6">
                <Folder className="text-blue-400 w-8 h-8 sm:w-10 sm:h-10" />

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Code on GitHub"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} className="sm:w-[22px] sm:h-[22px]" />
                    </a>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Live Demo"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink
                        size={20}
                        className="sm:w-[22px] sm:h-[22px]"
                      />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-3 gap-y-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-blue-300/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
