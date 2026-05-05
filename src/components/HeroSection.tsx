'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINES = [
  'I build intelligent systems that think, adapt, and scale.',
  'LLMs · Vision AI · Systems that ship to production.',
  'From raw idea to deployed AI — end to end.',
  'Engineering the infrastructure of the intelligent future.',
]

function useTypewriter(lines: string[]) {
  const [text, setText] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const line = lines[lineIdx]
    const delay = deleting ? 30 : charIdx === line.length ? 2000 : 55

    const t = setTimeout(() => {
      if (!deleting) {
        setText(line.slice(0, charIdx + 1))
        if (charIdx === line.length) { setDeleting(true) } else { setCharIdx(c => c + 1) }
      } else {
        setText(line.slice(0, charIdx - 1))
        if (charIdx === 0) {
          setDeleting(false)
          setLineIdx(i => (i + 1) % lines.length)
        } else { setCharIdx(c => c - 1) }
      }
    }, delay)
    return () => clearTimeout(t)
  }, [charIdx, deleting, lineIdx, lines])

  return text
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (delay: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } }),
}

export default function HeroSection() {
  const typeText = useTypewriter(LINES)

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '9rem 2.5rem 5rem',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative' }}>

        {/* Label */}
        <motion.div
          variants={fadeUpVariant} initial="hidden" animate="show" custom={0.3}
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--cyan)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1.5rem' }}
        >
          // AI/ML Engineer & Systems Builder
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUpVariant} initial="hidden" animate="show" custom={0.5}
          style={{
            fontFamily: 'Orbitron, monospace', fontSize: 'clamp(3.5rem, 8vw, 6rem)',
            fontWeight: 900, lineHeight: 1, letterSpacing: '4px',
            background: 'linear-gradient(135deg, #fff 30%, var(--cyan) 60%, var(--violet) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
          }}
        >
          MANAN
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          variants={fadeUpVariant} initial="hidden" animate="show" custom={0.7}
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: 'var(--text)', fontWeight: 300, marginBottom: '0.8rem', maxWidth: 700 }}
        >
          {typeText}
          <span style={{ display: 'inline-block', width: 3, height: '1.2em', background: 'var(--cyan)', animation: 'blink 1s step-end infinite', verticalAlign: 'middle', marginLeft: 3 }} />
        </motion.div>

        {/* Sub */}
        <motion.p
          variants={fadeUpVariant} initial="hidden" animate="show" custom={0.9}
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '3rem', maxWidth: 600, lineHeight: 1.8 }}
        >
          Not chasing trends — building infrastructure for the intelligent future.<br />
          LLMs · Multimodal AI · Systems that scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUpVariant} initial="hidden" animate="show" custom={1.1}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a href="#systems" style={primaryBtn}>⚡ View Systems</a>
          <a href="#chat" style={outlineBtn}>🧪 Enter Lab</a>
        </motion.div>

        {/* Terminal widget */}
        <motion.div
          initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: 'easeOut' }}
          className="sm:hidden md:block"
          style={{
            position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
            width: 360, background: 'rgba(6,15,30,0.92)', border: '1px solid var(--border)',
            borderRadius: 8, overflow: 'hidden',
          }}
        >
          <div style={{ background: 'rgba(0,212,255,0.08)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid var(--border)' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--muted)', marginLeft: 'auto' }}>manan@lab ~ status</span>
          </div>
          <div style={{ padding: 16, fontFamily: 'JetBrains Mono', fontSize: '0.78rem', lineHeight: 2 }}>
            <div><span style={{ color: 'var(--muted)' }}>$ </span><span style={{ color: 'var(--cyan)' }}>cat current_systems.json</span></div>
            {[
              { name: 'ai_outfit_search', status: 'active' },
              { name: 'pii_filter_engine', status: 'building' },
              { name: 'multimodal_qna', status: 'active' },
              { name: 'finance_llm_bot', status: 'building' },
              { name: 'mood_recommender', status: 'active' },
            ].map((s, i) => (
              <div key={s.name}>
                <span style={{ color: 'var(--muted)' }}>{i < 4 ? '├' : '└'} </span>
                <span style={{ color: '#a78bfa' }}>{s.name}</span>
                {' '}
                <span style={{ color: '#4ade80' }}>● {s.status}</span>
              </div>
            ))}
            <div style={{ marginTop: '0.5rem' }}><span style={{ color: 'var(--muted)' }}>$ </span><span style={{ color: 'var(--cyan)' }}>whoami</span></div>
            <div style={{ color: '#f9a8d4' }}>→ builder. thinker. deployed.</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(transparent, var(--bg))', pointerEvents: 'none' }} />
    </section>
  )
}

const primaryBtn: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  padding: '0.75rem 1.8rem', borderRadius: 4,
  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', letterSpacing: '1px',
  cursor: 'pointer', textDecoration: 'none', color: '#fff',
  background: 'linear-gradient(135deg, var(--cyan), var(--violet))',
  border: 'none', fontWeight: 500, transition: 'all 0.3s',
}

const outlineBtn: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  padding: '0.75rem 1.8rem', borderRadius: 4,
  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', letterSpacing: '1px',
  cursor: 'pointer', textDecoration: 'none', color: 'var(--cyan)',
  background: 'transparent', border: '1px solid var(--cyan)', transition: 'all 0.3s',
}
