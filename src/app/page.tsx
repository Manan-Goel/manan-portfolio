'use client'
import ParticleBackground from '@/components/ParticleBackground'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import SystemsSection from '@/components/SystemsSection'
import { ThinkSection, SkillsSection, JourneySection, ChatSection, ContactSection } from '@/components/Sections'

export default function Home() {
  return (
    <>
      {/* Fixed background effects */}
      <ParticleBackground />
      <div className="scanline-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <SystemsSection />
        <ThinkSection />
        <SkillsSection />
        <JourneySection />
        <ChatSection />
        <ContactSection />

        <footer style={{
          textAlign: 'center', padding: '2rem',
          fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem',
          color: 'var(--dim)', borderTop: '1px solid var(--border)',
        }}>
          © 2025 Manan · Built for the future · All systems operational
        </footer>
      </main>
    </>
  )
}
