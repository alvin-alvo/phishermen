import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navbar({ konamiActive }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  
  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/events', name: 'Events' },
    { path: '/blog', name: 'Blog' },
    ...(konamiActive ? [{ path: '/terminal', name: 'Terminal' }] : [])
  ]

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-hacker-green/30 sticky top-0 z-50 shadow-lg shadow-hacker-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-hacker-green font-bold text-xl glitch drop-shadow-glow">
                PHISHERMEN<span className="text-hacker-red">2.0</span>
              </h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-mono font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-hacker-green/20 text-hacker-green neon-border drop-shadow-glow'
                      : 'text-hacker-green hover:bg-hacker-blue/30 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={false}
        animate={{ height: mobileOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-black/90 border-t border-hacker-green/20"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-mono font-medium transition-all duration-200 ${
                location.pathname === item.path
                  ? 'bg-hacker-green/20 text-hacker-green neon-border drop-shadow-glow'
                  : 'text-hacker-green hover:bg-hacker-blue/30 hover:text-white'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  )
}