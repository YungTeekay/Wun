"use client";

/**
 * Animated "live enquiries" panel — the product demo.
 * Three notification bubbles stagger in over a soft pulsing violet glow blob.
 * Pure CSS animation; prefers-reduced-motion disables the movement/pulse
 * (bubbles simply render in place).
 */

type Bubble = {
  kind: "whatsapp" | "form" | "ai";
  from: string;
  body: string;
  meta: string;
};

const BUBBLES: Bubble[] = [
  {
    kind: "whatsapp",
    from: "WhatsApp",
    body: "Hi, do you still have trials open for u15s?",
    meta: "New enquiry · just now",
  },
  {
    kind: "form",
    from: "Website form",
    body: "Thabo M. — wants a quote for a solar install ☀️",
    meta: "Lead captured · 12s ago",
  },
  {
    kind: "ai",
    from: "Wun AI",
    body: "Thanks Thabo! Booked you in for Tue 10am. 📅",
    meta: "Auto-reply sent · <1 min",
  },
];

function Icon({ kind }: { kind: Bubble["kind"] }) {
  if (kind === "whatsapp") {
    return (
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-light">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 005.69 1.45h.005c6.55 0 11.89-5.34 11.89-11.9C23.94 5.34 18.6 0 12.05 0m6.99 17.02c-.29.83-1.48 1.47-2.05 1.5-.52.05-1 .19-3.36-.7-2.84-1.12-4.65-3.99-4.79-4.18-.14-.2-1.16-1.54-1.16-2.94 0-1.4.73-2.08 1-2.37.26-.29.57-.36.76-.36l.55.01c.18.01.42-.07.65.5.24.58.83 2.02.9 2.17.07.15.12.32.02.52-.1.2-.15.32-.29.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.77 1.27 1.66 2.06 1.13 1.01 2.09 1.32 2.39 1.47.3.15.47.12.65-.07.17-.2.75-.87.94-1.16.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.34.07.13.07.72-.22 1.42" />
        </svg>
      </span>
    );
  }
  if (kind === "form") {
    return (
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-light">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 5h16v14H4zM4 8l8 5 8-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-light">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3v3M6 8h12v9a2 2 0 01-2 2H8a2 2 0 01-2-2zM9 13h.01M15 13h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function LiveEnquiries() {
  return (
    <div className="relative">
      {/* Pulsing glow blob behind the panel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 mx-auto h-64 w-64 translate-y-8 rounded-full blur-[80px] le-pulse"
        style={{ background: "var(--color-section-glow)" }}
      />

      <div className="card" aria-label="Live enquiries demo">
        <div className="mb-4 flex items-center justify-between">
          <span className="eyebrow">Live enquiries</span>
          <span className="flex items-center gap-1.5 text-[13px] text-text-muted">
            <span className="h-2 w-2 rounded-full bg-accent-light le-dot" />
            Real-time
          </span>
        </div>

        <ul className="flex flex-col gap-3">
          {BUBBLES.map((b, i) => (
            <li
              key={b.kind}
              className="le-bubble flex items-start gap-3 rounded-md border border-border bg-bg-raised-2 p-3"
              style={{ animationDelay: `${0.4 + i * 0.9}s` }}
            >
              <Icon kind={b.kind} />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-text">{b.from}</span>
                </div>
                <p className="text-[15px] text-text-muted">{b.body}</p>
                <span className="mt-0.5 block text-[12px] text-text-faint">
                  {b.meta}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .le-bubble {
          opacity: 0;
          transform: translateY(12px);
          animation: le-in 0.6s ease forwards;
        }
        .le-pulse {
          animation: le-glow 4s ease-in-out infinite;
        }
        .le-dot {
          animation: le-blink 1.6s ease-in-out infinite;
        }
        @keyframes le-in {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes le-glow {
          0%,
          100% {
            opacity: 0.55;
            transform: translateY(2rem) scale(1);
          }
          50% {
            opacity: 0.9;
            transform: translateY(2rem) scale(1.08);
          }
        }
        @keyframes le-blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .le-bubble {
            opacity: 1;
            transform: none;
            animation: none;
          }
          .le-pulse,
          .le-dot {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
