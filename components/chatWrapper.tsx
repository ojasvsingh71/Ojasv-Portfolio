"use client";

import { useState } from "react";
import OptexButton from "./optex-button";
import OptexChatBox from "./optex-chatbox";

export default function ChatWrapper() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {chatOpen && <OptexChatBox onClose={() => setChatOpen(false)} />}
      <OptexButton onClick={() => setChatOpen(!chatOpen)} />
    </>
  );
}
