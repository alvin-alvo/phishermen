import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Blog from './pages/Blog'
import TerminalModal from './components/Terminal'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import BlogRedirect from "./pages/BlogRedirect"

const AppContent = () => {
  const location = useLocation()
  const [konami, setKonami] = useState(false)
  const [showTerminal, setShowTerminal] = useState(false)
  
  // Konami code detection
  useEffect(() => {
    const pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    let current = 0
    
    const keyHandler = (e) => {
      if (e.key === pattern[current]) {
        current++
        if (current === pattern.length) {
          setKonami(true)
          setShowTerminal(true)
          current = 0
        }
      } else {
        current = 0
      }
    }
    
    window.addEventListener('keydown', keyHandler)
    return () => window.removeEventListener('keydown', keyHandler)
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Navbar konamiActive={konami} />
      {showTerminal && (
        <TerminalModal onClose={() => setShowTerminal(false)} />
      )}
      
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogRedirect />} />
        </Routes>
      </motion.div>
      
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}