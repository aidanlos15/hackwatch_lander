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
    const timer = setInterval(() => setActive(value => (value + 1) % platforms.length), 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="mt-8 rounded-3xl border border-border bg-background px-3 py-6 shadow-sm sm:px-8 sm:py-7">
      <div className="hw-integration-arc mx-auto" aria-label="Platform integrations">
        {platforms.map((item, index) => (
          <button key={item.name} type="button" onClick={() => setActive(index)} aria-pressed={active === index} title={`${item.name} · ${item.status}. ${item.body}`} className={`hw-integration-item hw-focus text-foreground ${active === index ? "hw-integration-active" : ""}`} style={{ left: `${10 + index * 20}%`, top: `${[43, 13, 0, 13, 43][index]}%` }}>
            <span className="hw-integration-mark flex items-center justify-center rounded-2xl border border-border bg-background p-3 shadow-sm sm:p-4">
              <Image src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}`} alt="" className="h-full w-full" fittingType="fit" />
            </span>
            <span className="mt-3 block text-xs font-semibold sm:text-sm">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}