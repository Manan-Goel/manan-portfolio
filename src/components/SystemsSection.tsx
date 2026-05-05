'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SYSTEMS } from '@/data/content'

export default function SystemsSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id)

  return (
    <section id="systems" style={{ padding: '7rem 2.5rem', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ marginBottom: '1rem' }}>
        <span className="tag tag-cyan">01 / Systems</span>
      </div>
      <h2 className="sec-title">Intelligent Systems</h2>

      <div className="systems-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.5rem',
      }}>
        {SYSTEMS.map((sys, i) => {
          const isOpen = openId === sys.id
          return (
            <motion.div
              key={sys.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => toggle(sys.id)}
              style={{
                background: isOpen ? 'rgba(124,58,237,0.06)' : 'var(--card)',
                border: `1px solid ${isOpen ? 'var(--violet)' : 'var(--border)'}`,
                borderRadius: 10, padding: '1.8rem',
                cursor: 'pointer', position: 'relative', overflow: 'hidden',
                gridColumn: isOpen ? '1 / -1' : undefined,
                transition: 'border-color 0.3s, background 0.3s',
              }}
              whileHover={!isOpen ? { y: -4, boxShadow: '0 20px 60px rgba(0,212,255,0.1)' } : {}}
            >
              <div style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.7rem', color: 'var(--cyan)', letterSpacing: '3px', marginBottom: '0.8rem' }}>
                {sys.num}
              </div>
              <div style={{ marginBottom: '0.8rem' }}>
                <span className={`tag ${sys.tagClass}`}>{sys.tagline}</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>
                {sys.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                {sys.problem}
              </p>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem', overflow: 'hidden' }}
                  >
                    <div className="info-block-grid" style={{ display: 'grid', gap: '1rem' }}>
                      <InfoBlock title="Approach" text={sys.approach} />
                      <InfoBlock title="Tech Stack">
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4 }}>
                          {sys.tech.map(t => (
                            <span key={t} className="tag tag-cyan" style={{ fontSize: '0.65rem', margin: '2px 0' }}>{t}</span>
                          ))}
                        </div>
                      </InfoBlock>
                      <InfoBlock title="Impact" text={sys.impact} accent="var(--cyan)" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!isOpen && (
                <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: 'var(--dim)', marginTop: '0.8rem' }}>
                  ↗ Click to explore architecture
                </p>
              )}

              {/* Status badge */}
              <div style={{
                position: 'absolute', top: '1.2rem', right: '1.2rem',
                display: 'flex', alignItems: 'center', gap: 6,
                fontFamily: 'JetBrains Mono', fontSize: '0.65rem',
                color: sys.status === 'active' ? '#4ade80' : '#fbbf24',
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: sys.status === 'active' ? '#4ade80' : '#fbbf24',
                  animation: 'float 2s infinite',
                }} />
                {sys.status}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

function InfoBlock({ title, text, accent, children }: { title: string; text?: string; accent?: string; children?: React.ReactNode }) {
  return (
    <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 6, padding: '1rem' }}>
      <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: accent || 'var(--cyan)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
        {title}
      </div>
      {text && <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>{text}</p>}
      {children}
    </div>
  )
}
