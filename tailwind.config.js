module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hacker-green': '#00ff00',
        'matrix-green': '#20C20E',
        'terminal-green': '#33FF33',
        'hacker-red': '#ff0033',
        'hacker-blue': '#0066ff',
        'hacker-purple': '#9900ff',
      },
      fontFamily: {
        'mono': ['"Share Tech Mono"', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'pulse-slow': 'pulse 3s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%': { textShadow: '0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff' },
          '14%': { textShadow: '0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff' },
          '15%': { textShadow: '-0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff' },
          '49%': { textShadow: '-0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff' },
          '50%': { textShadow: '0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff' },
          '99%': { textShadow: '0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff' },
          '100%': { textShadow: '-0.025em 0 0 #00fffc, -0.025em -0.025em 0 #fc00ff' },
        },
      },
    },
  },
  plugins: [],
}