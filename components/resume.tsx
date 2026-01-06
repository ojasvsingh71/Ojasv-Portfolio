import React from "react";
import { Download } from "lucide-react";

const Resume = () => {
  const resumeUrl = "/OjasvSinghResume.pdf";

  return (
    <div className="min-h-screen pt-24 px-4 pb-10 flex flex-col items-center justify-start">
      <div className="w-full max-w-5xl flex justify-between items-center mb-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
        <h2 className="text-xl md:text-2xl font-bold text-white">My Resume</h2>
        <a
          href={resumeUrl}
          download="Ojasv_Singh_Resume.pdf"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all font-medium"
        >
          <Download size={20} />
          <span className="hidden sm:inline">Download PDF</span>
        </a>
      </div>

      <div className="w-full max-w-5xl h-[80vh] bg-white rounded-lg shadow-2xl overflow-hidden border border-white/20 relative">
        <object
          data={resumeUrl}
          type="application/pdf"
          className="w-full h-full"
        >
          <div className="flex flex-col items-center justify-center h-full text-gray-800 p-8 text-center bg-gray-50">
            <p className="mb-4 text-lg">
              Your browser doesn't support viewing PDFs directly.
            </p>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-semibold hover:text-blue-800"
            >
              Click here to view or download the PDF
            </a>
          </div>
        </object>
      </div>
    </div>
  );
};

export default Resume;
