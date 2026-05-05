'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SKILLS, TIMELINE, CHAT_RESPONSES } from '@/data/content'

// ──────────────────────────────────────────────
// HOW I THINK
// ──────────────────────────────────────────────
const PRINCIPLES = [
  {
    icon: '🏗️',
    title: 'Systems-First',
    text: 'Every problem begins as an architecture question. I map data flow, failure modes, and scale constraints before writing a single line of code.',
  },
  {
    icon: '🧬',
    title: 'AI Reasoning',
    text: "I don't just call APIs — I understand embeddings, attention, and inference pipelines. The goal is models that reason, not just pattern-match.",
  },
  {
    icon: '🚀',
    title: 'Deploy or Die',
    text: 'Research is only valuable when it ships. I build with production in mind — latency budgets, security layers, and graceful degradation baked in.',
  },
]

const FLOW = ['Problem', 'Architect', 'AI Layer', 'Iterate', 'Deploy', 'Scale']

export function ThinkSection() {
  return (
    <section id="think" style={{ padding: 'var(--section-pad)', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ marginBottom: '1rem' }}><span className="tag tag-violet">02 / Mindset</span></div>
      <h2 className="sec-title">How I Think</h2>

      <div className="think-grid" style={{ display: 'grid', gap: '1.5rem' }}>
        {PRINCIPLES.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }}
            whileHover={{ y: -4 }}
            style={{
              background: 'rgba(6,15,30,0.8)', border: '1px solid var(--border)',
              borderRadius: 10, padding: '2rem', position: 'relative', overflow: 'hidden',
            }}
          >
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1.2rem' }}>{p.icon}</span>
            <h3 style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.9rem', color: 'var(--cyan)', letterSpacing: '2px', marginBottom: '1rem' }}>{p.title}</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.8 }}>{p.text}</p>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--cyan), var(--violet))' }} />
          </motion.div>
        ))}
      </div>

      {/* Flow diagram */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
        style={{ marginTop: '2.5rem', background: 'rgba(6,15,30,0.6)', border: '1px solid var(--border)', borderRadius: 10, padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, overflowX: 'auto' }}
      >
        {FLOW.map((step, i) => (
          <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 90 }}>
              <div style={{
                background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.3)',
                borderRadius: 6, padding: '10px 14px',
                fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: 'var(--cyan)', whiteSpace: 'nowrap',
              }}>
                {step}
              </div>
              <div style={{ fontSize: '0.6rem', color: 'var(--dim)', marginTop: 5, fontFamily: 'JetBrains Mono' }}>
                {['define', 'architect', 'model', 'refine', 'ship', 'grow'][i]}
              </div>
            </div>
            {i < FLOW.length - 1 && (
              <div style={{ position: 'relative', width: 40, height: 2, background: 'linear-gradient(90deg, var(--cyan), var(--violet))', flexShrink: 0, alignSelf: 'flex-start', marginTop: 20 }}>
                <span style={{ position: 'absolute', right: -8, top: -8, color: 'var(--violet)', fontSize: 12 }}>▶</span>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  )
}

// ──────────────────────────────────────────────
// SKILLS
// ──────────────────────────────────────────────
export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} style={{ padding: 'var(--section-pad)', maxWidth: 1200, margin: '0 auto', background: 'linear-gradient(180deg, transparent, rgba(124,58,237,0.03), transparent)' }}>
      <div style={{ marginBottom: '1rem' }}><span className="tag tag-pink">03 / Skills</span></div>
      <h2 className="sec-title">Technical Depth</h2>

      <div className="skills-grid" style={{ display: 'grid', gap: '2.5rem' }}>
        {SKILLS.map((group, gi) => (
          <motion.div key={group.group} initial={{ opacity: 0, x: gi % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: gi * 0.1 }} viewport={{ once: true }}>
            <h3 style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.85rem', color: group.accent === 'cyan' ? 'var(--cyan)' : '#a78bfa', letterSpacing: '2px', marginBottom: '1.5rem' }}>
              {group.group}
            </h3>
            {group.items.map(item => (
              <div key={item.name} style={{ marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text)' }}>{item.name}</span>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--muted)' }}>{item.level}%</span>
                </div>
                <div style={{ height: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 4, overflow: 'hidden' }}>
                  <div
                    className="skill-bar-fill"
                    style={{ width: visible ? `${item.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────
// JOURNEY
// ──────────────────────────────────────────────
export function JourneySection() {
  return (
    <section id="journey" style={{ padding: 'var(--section-pad)', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ marginBottom: '1rem' }}><span className="tag tag-cyan">04 / Journey</span></div>
      <h2 className="sec-title">Building Journey</h2>

      <div style={{ position: 'relative', paddingLeft: 40 }}>
        <div style={{ position: 'absolute', left: 12, top: 0, bottom: 0, width: 1, background: 'linear-gradient(180deg, var(--cyan), var(--violet), transparent)' }} />

        {TIMELINE.map((item, i) => (
          <motion.div
            key={item.time}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
            style={{ position: 'relative', marginBottom: '3rem' }}
          >
            <div style={{
              position: 'absolute', left: -34, top: 4,
              width: 12, height: 12, borderRadius: '50%',
              background: item.active ? 'var(--cyan)' : 'var(--bg)',
              border: `2px solid ${item.active ? 'var(--cyan)' : 'var(--dim)'}`,
              boxShadow: item.active ? '0 0 10px rgba(0,212,255,0.5)' : 'none',
            }} />
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: item.active ? 'var(--cyan)' : 'var(--dim)', letterSpacing: '2px', marginBottom: '0.4rem' }}>
              {item.time}
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: item.active ? '#fff' : 'var(--text)', marginBottom: '0.3rem' }}>
              {item.title}
              {item.active && <span style={{ marginLeft: 10, fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: '#4ade80', padding: '2px 8px', background: 'rgba(74,222,128,0.1)', borderRadius: 4 }}>● ACTIVE</span>}
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: 600 }}>{item.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────
// CHAT LAB
// ──────────────────────────────────────────────
interface Message { role: 'ai' | 'user'; text: string }

function detectTopic(q: string): keyof typeof CHAT_RESPONSES {
  const l = q.toLowerCase()
  if (l.includes('outfit') || l.includes('fashion') || l.includes('visual')) return 'outfit'
  if (l.includes('pii') || l.includes('privacy') || l.includes('security')) return 'pii'
  if (l.includes('finance') || l.includes('local') || l.includes('chatbot')) return 'finance'
  if (l.includes('mood') || l.includes('music') || l.includes('recommend')) return 'mood'
  if (l.includes('multimodal') || l.includes('chart') || l.includes('qna')) return 'multimodal'
  if (l.includes('approach') || l.includes('how') || l.includes('design')) return 'approach'
  return 'default'
}

const QUICK_PILLS = ['Outfit search system', 'PII detection engine', 'Finance chatbot', 'Mood recommender', 'How do you approach system design?']

export function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "Hey — I'm Manan's AI. Ask me about the outfit search system, PII engine, or any of the other systems I've built. Or just ask what I'm working on." },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })

  useEffect(() => { scrollBottom() }, [messages])

  const send = (q: string) => {
    if (!q.trim()) return
    const newMsgs: Message[] = [...messages, { role: 'user', text: q }]
    setMessages(newMsgs)
    setInput('')
    const topic = detectTopic(q)
    const arr = CHAT_RESPONSES[topic] || CHAT_RESPONSES.default
    const resp = arr[Math.floor(Math.random() * arr.length)]
    setTimeout(() => setMessages(prev => [...prev, { role: 'ai', text: resp }]), 600)
  }

  return (
    <section id="chat" style={{ padding: 'var(--section-pad)', maxWidth: 1200, margin: '0 auto', background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.02), transparent)' }}>
      <div style={{ marginBottom: '1rem' }}><span className="tag tag-violet">05 / Lab</span></div>
      <h2 className="sec-title">Ask My AI</h2>

      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ background: 'rgba(6,15,30,0.8)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ background: 'rgba(0,212,255,0.06)', padding: '1.2rem 1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, var(--cyan), var(--violet))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>🤖</div>
            <div>
              <div style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.8rem', color: '#fff', letterSpacing: '1px' }}>MANAN.AI</div>
              <div style={{ fontSize: '0.72rem', color: '#4ade80' }}>● Online — Ask about my work</div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ padding: '1.5rem', height: 320, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'ai' ? 'msg-ai' : 'msg-user'} style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'var(--muted)', marginBottom: '0.3rem' }}>
                  {m.role === 'ai' ? 'MANAN.AI' : 'YOU'}
                </div>
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{ display: 'flex', borderTop: '1px solid var(--border)' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send(input)}
              placeholder="Ask about my projects, skills, or approach..."
              style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                padding: '1rem 1.5rem', color: 'var(--text)', fontFamily: 'Sora, sans-serif', fontSize: '0.9rem',
              }}
              className="chat-input"
            />
            <button
              onClick={() => send(input)}
              style={{
                background: 'linear-gradient(135deg, var(--cyan), var(--violet))',
                border: 'none', padding: '1rem 1.5rem', color: '#fff', cursor: 'pointer',
                fontFamily: 'JetBrains Mono', fontSize: '0.8rem', letterSpacing: '1px',
              }}
            >
              SEND →
            </button>
          </div>
        </div>

        {/* Quick pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: '1rem' }}>
          {QUICK_PILLS.map(p => (
            <button
              key={p}
              onClick={() => send(p)}
              style={{
                background: 'rgba(0,212,255,0.06)', border: '1px solid var(--border)',
                color: 'var(--muted)', padding: '6px 14px', borderRadius: 20,
                fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'JetBrains Mono',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────
// CONTACT
// ──────────────────────────────────────────────
export function ContactSection() {
  return (
    <section id="contact" style={{ padding: 'var(--section-pad)', maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{
          fontFamily: 'Orbitron, monospace', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900,
          background: 'linear-gradient(135deg, var(--cyan), var(--violet), var(--pink))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem',
        }}
      >
        Let&apos;s Build<br />Something Insane.
      </motion.h2>

      <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 500, margin: '0 auto 3rem', lineHeight: 1.8 }}>
        If you&apos;re working on hard problems at the intersection of AI and real-world systems — let&apos;s talk. I&apos;m not looking for easy work.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        {[
          { label: '📧 Email', href: 'mailto:manangoel682@gmail.com' },
          { label: '⚡ GitHub', href: 'https://github.com/Manan-Goel' },
          { label: '🔗 LinkedIn', href: 'https://www.linkedin.com/in/manan-goel-711340251' },
          { label: '📄 Resume', href: 'https://drive.google.com/file/d/1s7EOWtZ1rM9nPhbhzTTzbVC4gBUrH9ex/view?usp=sharing' },
        ].map(link => (
          <a
            key={link.label}
            href={link.href}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              color: 'var(--muted)', textDecoration: 'none',
              fontFamily: 'JetBrains Mono', fontSize: '0.85rem',
              padding: '0.6rem 1.2rem', border: '1px solid var(--border)', borderRadius: 6,
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.background = 'rgba(0,212,255,0.04)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.background = 'transparent' }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
