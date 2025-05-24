import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black/80 border-t border-hacker-green/40 text-hacker-green font-mono text-center py-4 mt-8 neon-border shadow-lg shadow-hacker-green/10">
      <div>
        <span className="text-hacker-green glitch drop-shadow-glow">&copy; {new Date().getFullYear()} PHISHERMEN</span> &mdash; <span className="text-hacker-blue">Masters of Digital Deceit</span>
      </div>
      <div className="text-xs mt-1 opacity-60">
        <span>Built for Tharang 2024 | <span className="text-hacker-purple">#HackerMode</span></span>
      </div>
    </footer>
  );
}
