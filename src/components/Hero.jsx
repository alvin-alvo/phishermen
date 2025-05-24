import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Matrix background effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        {Array(100).fill(0).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-green-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 10 + 10}px`
            }}
            animate={{
              y: [0, window.innerHeight],
              opacity: [1, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {Math.random() > 0.5 ? '0' : '1'}
          </motion.span>
        ))}
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-hacker-green glitch drop-shadow-glow">
            PHISHERMEN<span className="text-hacker-red">2.0</span>
          </h1>
          <div className="text-xl md:text-2xl mb-8 h-12">
            <TypeAnimation
              sequence={[
                'Masters of Digital Deceit',
                2000,
                'Cybersecurity Challenge',
                2000,
                'Social Engineering Event',
                2000,
                'Hack the System',
                2000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-hacker-green drop-shadow-glow"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-hacker-green text-black neon-border font-bold uppercase tracking-widest shadow-lg hover:bg-hacker-blue hover:text-white transition-all duration-300"
            >
              Register Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-hacker-green neon-border font-bold text-hacker-green bg-black/70 hover:bg-hacker-purple hover:text-white transition-all duration-300 uppercase tracking-widest"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <div className="animate-bounce">
            <svg className="h-8 w-8 text-hacker-green drop-shadow-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  )
}