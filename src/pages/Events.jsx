import React from "react";

const events = [
	{
		title: "Phishing Demo",
		desc: "Live social engineering breakdown.",
		color: "bg-cyan-400",
	},
	{
		title: "Password Cracking Challenge",
		desc: "Leaderboard & timer for fastest crack.",
		color: "bg-pink-400",
	},
	{
		title: "Capture the Flag (CTF)",
		desc: "Link to event site or GitHub repo.",
		color: "bg-green-400",
	},
];

export default function Events() {
	return (
		<main className="max-w-5xl mx-auto py-12 px-4">
			<h1 className="text-4xl text-green-400 font-mono mb-8">Events</h1>
			<div className="grid md:grid-cols-3 gap-8">
				{events.map((ev) => (
					<div
						key={ev.title}
						className={`relative rounded-xl p-6 shadow-lg border-2 border-cyan-900 bg-black/80 hover:scale-105 transition-transform duration-300 ${ev.color}/10`}
					>
						<div
							className={`absolute -top-3 -left-3 w-6 h-6 rounded-full ${ev.color} shadow-glow`}
						></div>
						<h2 className="text-2xl font-mono text-cyan-400 mb-2">
							{ev.title}
						</h2>
                        {/* Active/inactive dots below each event */}
						<div className="flex items-center gap-2 mb-2 mt-1">
							<span
								className="w-3 h-3 rounded-full bg-green-500 border-2 border-black shadow"
								title="Active"
							></span>
							<span
								className="w-3 h-3 rounded-full bg-red-500 border-2 border-black opacity-60"
								title="Inactive"
							></span>
						</div>
						<p className="text-gray-300 mb-4">{ev.desc}</p>
						<button className="mt-2 px-4 py-1 rounded bg-cyan-900 text-cyan-200 font-mono hover:bg-cyan-700 transition">
							Details
						</button>
					</div>
				))}
			</div>
			{/* Reward Tiers */}
			<div className="mt-12">
				<h2 className="text-xl text-pink-400 mb-2 font-mono">Reward Tiers</h2>
				<ul className="list-disc pl-6 text-gray-300">
					<li>Digital badges for top performers</li>
					<li>Free merch / stickers for top 30</li>
				</ul>
			</div>
		</main>
	);
}