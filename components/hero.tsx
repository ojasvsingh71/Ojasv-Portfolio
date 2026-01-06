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
    <div className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 order-2 lg:order-1">
         
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium text-blue-300">
              Open to Work
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
              Hi There! I'm
            </h2>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Ojasv Singh
              </span>
            </h1>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 h-10 md:h-12 flex items-center justify-center lg:justify-start">
            <span className="text-blue-400 mr-2">{">"}</span>
            <Typewriter
              words={[
                "Full Stack Developer",
                "DSA Enthusiast",
                "Open Source Contributor",
                "Tech Explorer",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-lg leading-relaxed">
            I build accessible, pixel-perfect, and performant web experiences.
            Focused on crafting clean code and solving complex algorithmic
            challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/25 w-full sm:w-auto"
            >
              View My Work <ArrowRight size={20} />
            </Link>

            <Link
              href="/resume"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-medium transition-all backdrop-blur-sm w-full sm:w-auto"
            >
              Resume <FileText size={20} />
            </Link>
          </div>

          <div className="flex items-center gap-6 mt-8 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
            <a
              href="https://github.com/ojasvsingh71"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all text-2xl"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ojasv-singh-b80b52326/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all text-2xl"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/ojasvsingh1971/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 hover:scale-110 transition-all text-2xl"
              title="LeetCode"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center order-1 lg:order-2 w-full">
          <div className="w-full max-w-[280px] sm:max-w-md lg:max-w-xl relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-blue-500/20 rounded-full blur-[80px] -z-10"></div>
            <Lottie animationData={infinityAnimation} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
