import { motion } from 'framer-motion'

const highlights = [
  {
    title: 'Live Social Engineering Battles',
    desc: 'Watch teams compete in real-time phishing and defense scenarios.'
  },
  {
    title: 'Red Team vs Blue Team',
    desc: 'Experience the thrill of hackers vs defenders in a cyberpunk arena.'
  },
  {
    title: 'Workshops & Demos',
    desc: 'Learn from the best with hands-on sessions and live hacking demos.'
  },
  {
    title: 'CTF & Prizes',
    desc: 'Capture the Flag challenges and exclusive cyber gear for winners.'
  }
]

export default function EventHighlights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {highlights.map((h, i) => (
        <motion.div
          key={h.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          className="bg-black/80 neon-border rounded-xl p-8 shadow-lg hover:shadow-hacker-green/50 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-hacker-green glitch drop-shadow-glow">
            {h.title}
          </h3>
          <p className="text-hacker-blue text-lg font-mono">{h.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}
