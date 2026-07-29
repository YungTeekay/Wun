"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  amber?: boolean;
};

const STATS: Stat[] = [
  { value: 7, label: "Days to live" },
  { value: 60, prefix: "<", suffix: "s", label: "To answer every lead" },
  { value: 21, suffix: "×", label: "More likely to qualify", amber: true },
];

const DURATION = 1400; // ms
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function StatBand() {
  const ref = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(() =>
    prefersReducedMotion() ? STATS.map((s) => s.value) : STATS.map(() => 0)
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (prefersReducedMotion()) {
      setCounts(STATS.map((s) => s.value));
      return;
    }

    let raf = 0;
    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / DURATION, 1);
        const eased = easeOutCubic(t);
        setCounts(STATS.map((s) => Math.round(s.value * eased)));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            run();
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(node);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="wrap">
      <div className="statband" ref={ref}>
        {STATS.map((s, i) => (
          <div className="stat" key={s.label}>
            <span
              className={`stat__num${s.amber ? " stat__num--amber" : ""}`}
            >
              {s.prefix ?? ""}
              {counts[i]}
              {s.suffix ?? ""}
            </span>
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </div>
      <p className="statband__caption">
        Reply within five minutes and you&apos;re up to 21× more likely to
        qualify the lead. Wait an hour and it&apos;s usually already gone — to
        whoever answered first.
      </p>
    </div>
  );
}
