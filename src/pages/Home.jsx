import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import EventHighlights from '../components/EventHighlights'
import Countdown from '../components/Countdown'

export default function Home() {
  return (
    <div>
      <Hero />
      
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="py-16 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-12">
            <span className="border-b-2 border-green-500 pb-2">EVENT HIGHLIGHTS</span>
          </h2>
          <EventHighlights />
        </div>
      </motion.section>
      
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Countdown targetDate="2025-05-25T12:00:00" />
        </div>
      </section>
    </div>
  )
}