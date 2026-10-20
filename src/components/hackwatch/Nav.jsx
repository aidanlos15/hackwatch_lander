import React from "react";

const links = [
  ["Networks", "#networks"],
  ["Lifecycle", "#lifecycle"],
  ["Protection", "#protection"],
  ["Coverage", "#coverage"],
];

export default function Nav() {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    let previousY = Math.max(0, window.scrollY);
    const onScroll = () => {
      const currentY = Math.max(0, window.scrollY);
      if (Math.abs(currentY - previousY) < 5) return;
      setVisible(currentY < 80 || currentY < previousY);
      previousY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header inert={visible ? undefined : ""} className={`hw-focus sticky top-3 z-50 mx-auto mt-4 flex max-w-[1100px] items-center justify-between rounded-[18px] border border-slate-200 bg-white px-7 py-3.5 shadow-[0_8px_32px_rgba(15,23,42,0.08)] transition-transform duration-300 motion-reduce:transition-none ${visible ? "translate-y-0" : "-translate-y-[calc(100%+2rem)] pointer-events-none"}`}>
      <a href="#top" className="flex items-center">
        <img src="https://media.base44.com/images/public/6ad1475af0db89ea8a403727/2b94932bb_hackwatch_logo_transparent.png" alt="HackWatch" className="h-10 w-auto" />
      </a>
      <nav className="hidden gap-[34px] md:flex">
        {links.map(([l, h]) => (
          <a key={h} href={h} className="hw-focus text-sm text-slate-500 transition-colors hover:text-blue-600">{l}</a>
        ))}
      </nav>
      <a href="#demo" className="hw-focus cursor-pointer rounded-[12px] bg-gradient-to-br from-blue-500 to-indigo-500 px-5 py-2.5 text-sm text-white transition-shadow hover:shadow-[0_0_22px_rgba(59,130,246,0.45)]">Book demo</a>
    </header>
  );
}