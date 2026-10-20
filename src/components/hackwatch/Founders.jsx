import React from "react";
import { Image } from "@/components/ui/image";

const founders = [
  { name: "Aidan O’Sullivan", title: "Co-Founder & CEO", region: "Europe", image: "https://media.base44.com/images/public/6ad1475af0db89ea8a403727/531227954_aidanportrait.jpg" },
  { name: "Ross Gavin Mcgirl", title: "Co-Founder & CTO", region: "North America", image: "https://media.base44.com/images/public/6ad1475af0db89ea8a403727/1842d9fed_Gemini_Generated_Image_gv1p4wgv1p4wgv1p.jpeg" },
];

export default function Founders() {
  return (
    <section id="founders" aria-labelledby="founders-heading" className="relative z-10 px-6 pt-24 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <h2 id="founders-heading" className="text-center font-heading text-3xl font-semibold tracking-tight text-foreground md:text-[38px]">Meet the founders</h2>
        <div className="mx-auto mt-12 grid max-w-[720px] grid-cols-1 gap-0 sm:grid-cols-2">
          {founders.map((founder) => (
            <article key={founder.name} className="text-center">
              <div className="aspect-square w-full overflow-hidden border border-border bg-card shadow-sm">
                <Image src={founder.image} alt={founder.name} fittingType="fill" className="h-full w-full" />
              </div>
              <h3 className="mt-7 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{founder.name}</h3>
              <p className="mt-3 bg-gradient-to-br from-blue-500 to-indigo-500 bg-clip-text font-mono text-xs font-medium uppercase tracking-[0.16em] text-transparent">{founder.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}