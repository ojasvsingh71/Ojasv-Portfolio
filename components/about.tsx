import React from "react";
import { GraduationCap, Code, Briefcase, Flame } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24 sm:py-32">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-10 sm:mb-16">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl hover:bg-white/10 transition duration-300">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Hello, I'm <span className="text-blue-400">Ojasv Singh</span>
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              I am a B.Tech student from KIET Group of Institutions and a
              passionate Full-Stack Developer who loves building scalable,
              user-centric applications. Currently, I'm working as a Web
              Development Intern at{" "}
              <span className="text-indigo-400 font-medium">
                Sparklog Ventures
              </span>
              , where I automate workflows and build robust web solutions.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Outside of coding, I like challenging myself with algorithmic
              problems. I believe in continuous learning and enjoy refining
              ideas into simple, well-structured code.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center hover:scale-[1.02] transition duration-300">
            <div className="bg-blue-500/20 p-4 rounded-full mb-4">
              <Code size={32} className="text-blue-400 sm:w-10 sm:h-10" />
            </div>
            <h4 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              800+
            </h4>
            <p className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider font-medium">
              DSA Problems Solved
            </p>

            <div className="mt-6 flex items-center gap-2 text-yellow-400 bg-yellow-400/10 px-4 py-1.5 rounded-full border border-yellow-400/20">
              <Flame size={18} />
              <span className="font-semibold text-sm sm:text-base">
                300+ Day Streak
              </span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl hover:border-blue-500/30 transition duration-300">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-green-400" size={28} />
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-200">
                B.Tech (CSIT)
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                KIET Group of Institutions
              </p>
              <div className="mt-4 inline-block bg-green-500/10 text-green-400 px-3 py-1 rounded-lg text-sm font-semibold border border-green-500/20">
                CGPA: 9.67
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl hover:border-purple-500/30 transition duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-purple-400" size={28} />
              <h3 className="text-xl font-semibold text-white">Experience</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="border-l-2 border-purple-500/50 pl-4">
                <h4 className="text-lg font-medium text-white">
                  Web Dev Intern
                </h4>
                <p className="text-purple-300 text-sm font-medium mb-1">
                  Sparklog Ventures LLP
                </p>
                <p className="text-gray-400 text-sm leading-snug">
                  Automating reports with Python & building Next.js components.
                </p>
              </div>

              <div className="border-l-2 border-blue-500/50 pl-4">
                <h4 className="text-lg font-medium text-white">
                  Web Coordinator
                </h4>
                <p className="text-blue-300 text-sm font-medium mb-1">CPByte</p>
                <p className="text-gray-400 text-sm leading-snug">
                  Mentoring juniors and maintaining the student portal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
