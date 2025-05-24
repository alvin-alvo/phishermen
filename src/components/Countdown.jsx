import { useState, useEffect } from 'react'

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const distance = target - now

      if (distance <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="text-center">
      <h3 className="text-2xl mb-6 text-green-400 font-orbitron drop-shadow-glow">EVENT STARTS IN</h3>
      <div className="flex justify-center items-end gap-0">
        {Object.entries(timeLeft).map(([unit, value], idx, arr) => (
          <>
            <div key={unit} className="flex flex-col items-center mx-1">
              <div className="w-20 h-20 flex items-center justify-center bg-gray-800 rounded-lg border-2 neon-border shadow-lg mb-1 animate-pulse-slow">
                <span className="text-4xl font-bold text-hacker-green font-orbitron glitch drop-shadow-glow transition-all duration-300">
                  {String(value).padStart(2, '0')}
                </span>
              </div>
              <span className="mt-1 text-hacker-blue uppercase text-xs font-mono tracking-widest drop-shadow-glow">
                {unit}
              </span>
            </div>
            {/* Separator between boxes, except after last */}
            {idx < arr.length - 1 && (
              <span key={unit + '-sep'} className="text-hacker-purple text-4xl font-bold select-none mx-1 mb-6 animate-glitch flex items-center">:</span>
            )}
          </>
        ))}
      </div>
    </div>
  )
}