"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { kind: "in" | "out" | "system"; text: string; meta?: string };

const M: Record<string, Msg> = {
  in1: {
    kind: "in",
    text: "Hi, do you still have space for the 2026 season? Saw your ad 👀",
  },
  out1: {
    kind: "out",
    text: "Yes — trials are open! Can I grab your name and your child's age so I can check availability?",
    meta: "Replied in 41s",
  },
  in2: { kind: "in", text: "Sure — it's Thabo, he's 14." },
  out2: {
    kind: "out",
    text: "Perfect. We've got a U15 trial this Saturday at 9am. Want me to book you in?",
  },
  sys: { kind: "system", text: "Lead qualified & booked · 0:41" },
};

// Each frame = the messages visible + whether the typing indicator shows,
// paired with how long to hold before advancing to the next frame.
type Frame = { msgs: Msg[]; typing?: boolean; hold: number };

const SCRIPT: Frame[] = [
  { msgs: [], hold: 700 },
  { msgs: [M.in1], hold: 1100 },
  { msgs: [M.in1], typing: true, hold: 1300 },
  { msgs: [M.in1, M.out1], hold: 1600 },
  { msgs: [M.in1, M.out1, M.in2], hold: 1100 },
  { msgs: [M.in1, M.out1, M.in2], typing: true, hold: 1300 },
  { msgs: [M.in1, M.out1, M.in2, M.out2], hold: 1600 },
  { msgs: [M.in1, M.out1, M.in2, M.out2, M.sys], hold: 3000 },
];

const RESOLVED = SCRIPT[SCRIPT.length - 1];

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function WhatsAppLoop() {
  const [frame, setFrame] = useState(0);
  const [reduced, setReduced] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (prefersReducedMotion()) {
      setReduced(true);
      return;
    }

    let current = 0;
    const advance = () => {
      const f = SCRIPT[current];
      timer.current = setTimeout(() => {
        current = (current + 1) % SCRIPT.length;
        setFrame(current);
        advance();
      }, f.hold);
    };
    advance();

    return () => clearTimeout(timer.current);
  }, []);

  const active = reduced ? RESOLVED : SCRIPT[frame];

  return (
    <div className="chat" role="img" aria-label="An AI assistant replying to and booking a new enquiry on WhatsApp in under a minute.">
      <div className="chat__head">
        <span className="chat__avatar" aria-hidden="true">
          W
        </span>
        <span className="chat__who">
          <span className="chat__name">Wun Assistant</span>
          <span className="chat__status">
            <span className="dot" aria-hidden="true" />
            Online · Answers in &lt;60s
          </span>
        </span>
      </div>

      <div className="chat__body">
        {active.msgs.map((m, i) =>
          m.kind === "system" ? (
            <div className="bubble bubble--system" key={`sys-${i}`}>
              {m.text}
            </div>
          ) : (
            <div
              className={`bubble bubble--${m.kind}`}
              key={`${m.kind}-${i}-${frame}`}
            >
              {m.text}
              {m.meta && <span className="bubble__meta">{m.meta}</span>}
            </div>
          )
        )}
        {active.typing && (
          <div className="typing" aria-label="typing">
            <span />
            <span />
            <span />
          </div>
        )}
      </div>
    </div>
  );
}
