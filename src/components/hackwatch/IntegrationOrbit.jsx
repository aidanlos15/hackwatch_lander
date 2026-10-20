import React, { useEffect, useState } from "react";
import { Image } from "@/components/ui/image";

const platforms = [
  { name: "Linux", icon: "linux/linux-original.svg", status: "Established", body: "Native agent beside your app, feeding runtime evidence into one investigation engine." },
  { name: "Nginx", icon: "nginx/nginx-original.svg", status: "Established", body: "Observe, shadow, then protect at the Nginx boundary." },
  { name: "Laravel", icon: "laravel/laravel-original.svg", status: "Established", body: "Exercised end to end in controlled Laravel demos, from attack evidence to reviewable fixes." },
  { name: "Next.js", icon: "nextjs/nextjs-original.svg", status: "Pilot", body: "Signed observations sent to a persistent worker. Observe-only today; live acceptance in progress." },
  { name: "Vercel", icon: "vercel/vercel-original.svg", status: "Pilot", body: "Serverless and edge collection through the Next.js SDK, connected to the same investigation engine." },
];

export default function IntegrationOrbit() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setActive(value => value + 1), 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="mt-8 rounded-3xl border border-border bg-background px-3 py-6 shadow-sm sm:px-8 sm:py-7">
      <div className="hw-integration-arc mx-auto" aria-label="Platform integrations">
        {Array.from({ length: 7 }, (_, offset) => {
          const position = active + offset - 3;
          const item = platforms[((position % platforms.length) + platforms.length) % platforms.length];
          const centered = position === active;
          const visible = Math.abs(position - active) <= 2;
          return (
            <button key={position} type="button" onClick={() => setActive(position)} aria-pressed={centered} aria-hidden={!visible} tabIndex={visible ? 0 : -1} title={`${item.name} · ${item.status}. ${item.body}`} className={`hw-integration-item hw-focus text-foreground ${centered ? "hw-integration-active" : ""}`} style={{ left: `${50 + (position - active) * 20}%` }}>
              <span className="hw-integration-mark flex items-center justify-center rounded-2xl border border-border bg-background p-3 shadow-sm sm:p-4">
                <Image src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}`} alt="" className="h-full w-full" fittingType="fit" />
              </span>
              <span className="mt-3 block text-xs font-semibold sm:text-sm">{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}