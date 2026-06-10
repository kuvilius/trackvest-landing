"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#vault", label: "The vault" },
  { href: "https://www.trackvest.app/privacy", label: "Privacy" },
  { href: "https://www.trackvest.app/terms", label: "Terms" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-in">
        <a className="brand" href="#top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-icon.png" alt="TrackVest logo" />
          TrackVest
        </a>
        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn-ghost" href="#download">
            Get the app
          </a>
        </div>
      </div>
    </header>
  );
}
