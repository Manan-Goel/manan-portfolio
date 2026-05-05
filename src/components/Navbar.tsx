'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Systems', href: '#systems' },
  { label: 'Mindset', href: '#think' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Lab', href: '#chat' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggle = () => setIsOpen(!isOpen)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem 2.5rem',
        backdropFilter: 'blur(20px)',
        background: scrolled ? 'rgba(3,10,20,0.95)' : 'rgba(3,10,20,0.7)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.3s',
      }}
    >
      <div style={{
        fontFamily: 'Orbitron, monospace', fontSize: '1.1rem', fontWeight: 900,
        background: 'linear-gradient(90deg, var(--cyan), var(--violet))',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        letterSpacing: '3px',
      }}>
        MANAN
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex" style={{ display: 'flex', gap: '2rem' }}>
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setActive(link.href)}
            style={{
              color: active === link.href ? 'var(--cyan)' : 'var(--muted)',
              textDecoration: 'none',
              fontSize: '0.78rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: 'JetBrains Mono, monospace',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
            onMouseLeave={e => (e.currentTarget.style.color = active === link.href ? 'var(--cyan)' : 'var(--muted)')}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button 
        onClick={toggle}
        className="md:hidden"
        style={{ 
          background: 'none', border: 'none', color: 'var(--cyan)', 
          cursor: 'pointer', display: 'flex', alignItems: 'center' 
        }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'rgba(3,10,20,0.98)',
              borderBottom: '1px solid var(--border)',
              padding: '2rem',
              display: 'flex', flexDirection: 'column', gap: '1.5rem',
              zIndex: 99
            }}
          >
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => { setActive(link.href); setIsOpen(false) }}
                style={{
                  color: active === link.href ? 'var(--cyan)' : 'var(--muted)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  fontFamily: 'JetBrains Mono, monospace',
                  textAlign: 'center'
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  )
}
