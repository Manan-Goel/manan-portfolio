/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Orbitron', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Sora', 'sans-serif'],
      },
      colors: {
        bg: '#030a14',
        bg2: '#060f1e',
        bg3: '#0a1628',
        cyan: '#00d4ff',
        violet: '#7c3aed',
        pink: '#ff006e',
        muted: '#8899aa',
        dim: '#445566',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'fadeUp': 'fadeUp 0.6s ease forwards',
        'blink': 'blink 1s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        glow: { '0%,100%': { textShadow: '0 0 20px rgba(0,212,255,0.5)' }, '50%': { textShadow: '0 0 60px rgba(0,212,255,0.9)' } },
        fadeUp: { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        scanline: { '0%': { top: '-10%' }, '100%': { top: '110%' } },
      },
    },
  },
  plugins: [],
}
