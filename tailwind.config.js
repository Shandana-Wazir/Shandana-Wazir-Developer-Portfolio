/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#020817',
          secondary: '#071426',
        },
        card: {
          DEFAULT: '#0A1930',
          hover: '#0E2344',
        },
        cyan: {
          DEFAULT: '#00E5FF',
          accent: '#00F5D4',
          glow: 'rgba(0, 229, 255, 0.4)',
        },
        turquoise: '#00F5D4',
        borderCyan: 'rgba(0, 229, 255, 0.18)',
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px rgba(0, 229, 255, 0.35)',
        'cyan-glow-sm': '0 0 15px rgba(0, 229, 255, 0.2)',
        'cyan-glow-lg': '0 0 45px rgba(0, 229, 255, 0.45)',
        'card-glow': '0 8px 32px 0 rgba(0, 229, 255, 0.08)',
        'neon-border': '0 0 0 1px rgba(0, 229, 255, 0.25), 0 0 20px rgba(0, 229, 255, 0.15)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'spin-reverse': 'spinReverse 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}
