// skill: design-system — tokens via theme Tailwind, 0 valeur en dur dans composants
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#090b18',
        panel: '#0e1226',
        line: 'rgba(148, 163, 255, 0.14)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'cube-spin': {
          from: { transform: 'rotateX(-18deg) rotateY(0deg)' },
          to: { transform: 'rotateX(-18deg) rotateY(360deg)' },
        },
        orb: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(24px, -18px) scale(1.08)' },
          '66%': { transform: 'translate(-18px, 14px) scale(0.94)' },
        },
        bar: {
          '0%, 100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'spin-slow': 'spin-slow 22s linear infinite',
        'cube-spin': 'cube-spin 14s linear infinite',
        orb: 'orb 9s ease-in-out infinite',
        bar: 'bar 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
