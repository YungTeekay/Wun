"use client";

import { useEffect, useState } from "react";

function jhbTime() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Johannesburg",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

/** Africa/Johannesburg HH:mm, ticking every second. */
export default function LiveClock({ className }: { className?: string }) {
  // Empty on the server + first client render so hydration matches; fills in on mount.
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(jhbTime());
    const id = setInterval(() => setTime(jhbTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {time || "--:--"}
    </span>
  );
}
