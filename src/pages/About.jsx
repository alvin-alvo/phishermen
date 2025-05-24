import React from "react";

export default function About() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4 text-gray-200 font-mono">
      <h1 className="text-4xl text-green-400 mb-4">What is PHISHERMEN?</h1>
      <p className="mb-6 text-lg">
        <span className="text-cyan-400">[DEBRIEFING FILE]</span> <br />
        PHISHERMEN is a cybersecurity event at Tharang 2024, designed to
        challenge, educate, and inspire the next generation of digital defenders
        and ethical hackers. <br />
        <span className="text-pink-400">Purpose:</span> To simulate real-world
        cyber threats, foster teamwork, and reward curiosity.
      </p>
      {/* Timeline placeholder */}
      <div className="my-8">
        <h2 className="text-2xl text-pink-400 mb-2">Event Timeline</h2>
        <ul className="border-l-2 border-cyan-400 pl-6">
          <li className="mb-4 relative">
            <span className="absolute -left-3 top-1 w-4 h-4 bg-cyan-400 rounded-full shadow-glow"></span>
            <span className="font-bold">2022:</span> PHISHERMEN debuts at
            Tharang.
          </li>
          <li className="mb-4 relative">
            <span className="absolute -left-3 top-1 w-4 h-4 bg-pink-400 rounded-full shadow-glow"></span>
            <span className="font-bold">2023:</span> CTF and Social Engineering
            events added.
          </li>
          <li className="mb-4 relative">
            <span className="absolute -left-3 top-1 w-4 h-4 bg-green-400 rounded-full shadow-glow"></span>
            <span className="font-bold">2024:</span> Full digital rework, new
            challenges, and prizes.
          </li>
        </ul>
      </div>
      <div className="mt-8 text-sm text-gray-400">
        <span className="bg-black/60 px-2 py-1 rounded">
          "Curiosity is the only firewall you need." – Agent Nullbyte
        </span>
      </div>
    </main>
  );
}