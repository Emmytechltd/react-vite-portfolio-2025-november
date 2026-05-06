/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', 'monospace'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        background: '#030712', // Slightly deeper blue-black
        surface: '#111827',
        primary: {
          500: '#10b981', // Emerald
          600: '#059669',
        },
        secondary: {
          500: '#06b6d4', // Cyan
          600: '#0891b2',
        },
        accent: {
          500: '#8b5cf6', // Electric Purple
          600: '#7c3aed',
        }
      },
      animation: {
        'blob': 'blob 10s infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.2) rotate(10deg)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.8) rotate(-10deg)' },
          '100%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: []
}
