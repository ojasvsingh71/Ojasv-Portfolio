import React from "react";
import { Bot } from "lucide-react";

interface OptexButtonProps {
  onClick: () => void;
}

const OptexButton = ({ onClick }: OptexButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform z-50"
      aria-label="Open Chat"
    >
      <Bot size={24} />
    </button>
  );
};

export default OptexButton;
