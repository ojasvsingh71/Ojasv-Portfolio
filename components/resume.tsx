import React from "react";
import { Download, FileText, ExternalLink } from "lucide-react";

const Resume = () => {
  const resumeUrl = "/OjasvSinghResume.pdf";

  return (
    <div className="min-h-screen pt-24 sm:pt-32 px-4 pb-8 sm:pb-16 flex flex-col items-center justify-start">
      <div className="w-full max-w-5xl flex justify-between items-center mb-4 sm:mb-6 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg">
        <h2 className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2">
          <FileText className="text-blue-400" size={24} />
          <span className="hidden sm:inline">My Resume</span>
          <span className="sm:hidden">Resume</span>
        </h2>

        <a
          href={resumeUrl}
          download="Ojasv_Singh_Resume.pdf"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg transition-all font-medium text-sm sm:text-base shadow-md hover:scale-105"
        >
          <Download size={18} />
          <span className="hidden sm:inline">Download PDF</span>
        </a>
      </div>

      <div className="w-full max-w-5xl h-[65vh] sm:h-[80vh] bg-gray-900/50 rounded-xl shadow-2xl overflow-hidden border border-white/10 relative backdrop-blur-sm">
        <object
          data={resumeUrl}
          type="application/pdf"
          className="w-full h-full"
        >
          <div className="flex flex-col items-center justify-center h-full text-white p-6 text-center bg-gray-800/80 backdrop-blur-md">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <FileText size={40} className="text-blue-400" />
            </div>

            <h3 className="text-xl font-bold mb-2">View Resume</h3>
            <p className="mb-6 text-gray-300 max-w-sm text-sm sm:text-base">
              Your browser doesn't support viewing PDFs directly here. No
              worries, you can view it in a new tab!
            </p>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg"
            >
              <ExternalLink size={20} />
              Open PDF
            </a>
          </div>
        </object>
      </div>
    </div>
  );
};

export default Resume;
