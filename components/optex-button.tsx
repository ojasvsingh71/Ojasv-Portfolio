"use client";

import React from "react";
import { Bot, Sparkles } from "lucide-react";

interface OptexButtonProps {
  onClick: () => void;
}

const OptexButton = ({ onClick }: OptexButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end">
      <button
        onClick={onClick}
        className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] transition-all duration-300 hover:pr-6 hover:pl-5 active:scale-95"
        aria-label="Open Chat"
      >
        <div className="relative">
          <Bot
            size={28}
            className="transition-transform duration-300 group-hover:rotate-12"
          />

          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-blue-600"></span>
          </span>
        </div>

        <div className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out opacity-0 group-hover:max-w-[100px] group-hover:opacity-100">
          <span className="font-semibold text-sm pl-1">Ask AI</span>
        </div>

        <Sparkles
          size={16}
          className="absolute -top-1 -left-1 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"
        />
      </button>
    </div>
  );
};

export default OptexButton;
