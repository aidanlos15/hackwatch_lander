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
    const timer = setInterval(() => setActive(value => (value + 1) % platforms.length), 6000);
    return () => clearInterval(timer);
  }, []);
  const platform = platforms[active];
  return (
    <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-background px-4 pb-8 pt-8 shadow-sm sm:px-10">
      <div className="hw-orbit-window mx-auto" aria-hidden="true">
        <div className="hw-orbit-track rounded-full border border-border" />
        <div className="hw-orbit-track hw-orbit-inner rounded-full border border-dashed border-border" />
        {platforms.map((item, index) => (
          <div key={item.name} className="hw-orbit-spoke" style={{ animationDelay: `${-index * 6}s` }}>
            <div className="hw-orbit-logo" style={{ animationDelay: `${-index * 6}s` }}>
              <div className="flex h-full w-full items-center justify-center rounded-2xl border border-border bg-background p-3 shadow-lg sm:p-5">
                <Image src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}`} alt={item.name} className="h-full w-full" fittingType="fit" />
              </div>
            </div>
          </div>
        ))}
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <Image src="https://media.base44.com/images/public/6ad1475af0db89ea8a403727/2b94932bb_hackwatch_logo_transparent.png" alt="HackWatch" className="h-10 w-40 sm:h-14 sm:w-56" fittingType="fit" />
        </div>
      </div>
      <div className="mx-auto mt-7 max-w-lg text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{platform.status}</p>
        <h3 className="mt-2 text-2xl font-semibold text-foreground">{platform.name}</h3>
        <p className="mt-3 min-h-20 text-sm leading-relaxed text-muted-foreground">{platform.body}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2" aria-label="Explore integrations">{platforms.map((item, index) => <button key={item.name} type="button" onClick={() => setActive(index)} aria-pressed={active === index} className={`rounded-full border px-3 py-2 text-xs transition-colors ${active === index ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:text-foreground"}`}>{item.name}</button>)}</div>
      </div>
    </div>
  );
}