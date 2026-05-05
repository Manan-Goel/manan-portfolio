# MANAN — AI/ML Portfolio

> A futuristic, cinematic portfolio for an AI/ML systems builder.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# → http://localhost:3000
```

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🗂 Project Structure

```
manan-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← Root layout + metadata
│   │   ├── page.tsx          ← Main page (assembles all sections)
│   │   └── globals.css       ← Global styles, CSS variables, animations
│   ├── components/
│   │   ├── ParticleBackground.tsx  ← Canvas neural network particles
│   │   ├── Navbar.tsx              ← Fixed navigation with scroll effect
│   │   ├── HeroSection.tsx         ← Hero + typewriter + terminal widget
│   │   ├── SystemsSection.tsx      ← 5 expandable project cards
│   │   └── Sections.tsx            ← Think / Skills / Journey / Chat / Contact
│   └── data/
│       └── content.ts        ← ALL content lives here (edit this!)
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## ✏️ Customizing Content

**All content is centralized in `src/data/content.ts`:**

### Change Projects (SYSTEMS)
Edit the `SYSTEMS` array — each project has:
- `name` — project title
- `problem` — what problem it solves
- `approach` — your technical solution
- `tech` — array of tech stack items
- `impact` — measurable outcome
- `status` — 'active' | 'building'

### Change Skills
Edit the `SKILLS` array — each group has a `group` name and `items` array with `name` and `level` (0–100).

### Change Timeline
Edit the `TIMELINE` array with your real journey milestones.

### Change Chat Responses
Edit `CHAT_RESPONSES` — keys are topic keywords, values are arrays of responses (one is picked randomly).

### Change Contact Links
Edit the links array inside `ContactSection` in `src/components/Sections.tsx`.

### Change Your Name / Meta
- Name: Replace "MANAN" in `Navbar.tsx`, `HeroSection.tsx`, and `layout.tsx`
- Meta description: Edit `layout.tsx`

---

## 🎨 Design System

CSS variables (in `globals.css`):

| Variable | Value | Use |
|----------|-------|-----|
| `--cyan` | `#00d4ff` | Primary accent |
| `--violet` | `#7c3aed` | Secondary accent |
| `--pink` | `#ff006e` | Tertiary highlight |
| `--bg` | `#030a14` | Page background |
| `--text` | `#e2e8f0` | Body text |
| `--muted` | `#8899aa` | Secondary text |

**Fonts:**
- `Orbitron` — headings, logo, section titles
- `JetBrains Mono` — labels, code, navigation
- `Sora` — body text, descriptions

---

## 🌐 Deployment

**Vercel (recommended):**
```bash
npm install -g vercel
vercel
```

**Or push to GitHub and connect to Vercel — it auto-deploys.**

---

## 🛠 Tech Stack

- **Next.js 15** — React framework
- **TypeScript** — type safety
- **Tailwind CSS** — utility styling
- **Framer Motion** — animations
- **Canvas API** — particle background

---

## 📝 Notes

- The AI chat is simulated (keyword-based responses). To make it real, connect to an actual LLM API in `ChatSection` inside `Sections.tsx`.
- Particle count is 90 by default — lower it on mobile for performance in `ParticleBackground.tsx`.
- All animations use `whileInView` with `once: true` for performance.
