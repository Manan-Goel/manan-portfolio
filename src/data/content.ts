export const SYSTEMS = [
  {
    id: 'sys01',
    num: 'SYS_01',
    name: 'AI Outfit Search Engine',
    tagline: 'Visual intelligence for fashion',
    tagClass: 'tag-cyan',
    problem: 'Visual search for fashion is broken — text queries fail to capture style, fit, and aesthetics. Current solutions miss the nuance of outfit composition.',
    approach: 'Computer vision pipeline with outfit segmentation, style embedding space, and e-commerce similarity search — like Google Lens but purpose-built for fashion intelligence.',
    tech: ['CLIP', 'Vision Transformers', 'FAISS', 'FastAPI', 'React', 'Python'],
    impact: 'Sub-second visual search over 1M+ product catalog with multi-modal query support (image + text)',
    status: 'active',
  },
  {
    id: 'sys02',
    num: 'SYS_02',
    name: 'PII Detection & Filter Engine',
    tagline: 'LLM security layer',
    tagClass: 'tag-violet',
    problem: 'LLMs leak sensitive data. Enterprise pipelines have zero protection against PII flowing in and out of model context — a compliance and security nightmare.',
    approach: 'Multi-layer detection using regex patterns, NER models, and semantic classifiers. Real-time bidirectional filtering with configurable policies for any LLM integration.',
    tech: ['spaCy', 'Presidio', 'Transformers', 'FastAPI', 'Redis', 'Docker'],
    impact: '99.2% PII recall with <5ms overhead on LLM I/O streams — production-ready middleware',
    status: 'building',
  },
  {
    id: 'sys03',
    num: 'SYS_03',
    name: 'Multimodal QnA Engine',
    tagline: 'Understand charts, graphs, visual data',
    tagClass: 'tag-pink',
    problem: 'Analysts spend hours extracting insights from charts and graphs manually. Valuable data is trapped in visual formats that language models cannot natively process.',
    approach: 'Multimodal pipeline combining OCR, chart parsing, and LLM reasoning to answer natural language questions over visual data with full context awareness.',
    tech: ['GPT-4V', 'PaddleOCR', 'LangChain', 'Streamlit', 'Python', 'Pandas'],
    impact: 'Reduces chart-to-insight time from 15 minutes to under 30 seconds for analysts',
    status: 'active',
  },
  {
    id: 'sys04',
    num: 'SYS_04',
    name: 'Finance LLM Chatbot',
    tagline: 'Private, local, intelligent',
    tagClass: 'tag-cyan',
    problem: 'Financial queries demand precision and privacy. Cloud LLMs are a compliance liability for sensitive portfolio data — but local models lacked financial intelligence.',
    approach: 'Fully local deployment of quantized LLMs with finance-specific RAG over SEC filings, earnings reports, and market data. 100% offline, zero data exposure.',
    tech: ['Ollama', 'LlamaIndex', 'Qdrant', 'Mistral 7B', 'FinBERT', 'Python'],
    impact: '100% private, offline-capable financial assistant with hallucination guardrails on numeric claims',
    status: 'building',
  },
  {
    id: 'sys05',
    num: 'SYS_05',
    name: 'Mood-Based Recommender',
    tagline: 'Emotional context meets discovery',
    tagClass: 'tag-violet',
    problem: 'Recommendation systems ignore emotional state — Spotify doesn\'t know you\'re stressed, anxious, or in a creative flow. Context beyond history is missing.',
    approach: 'Multimodal mood detection (text sentiment, facial expression, behavioral patterns) feeds a cross-domain recommendation engine for music, fashion, and places.',
    tech: ['Transformers', 'MediaPipe', 'Collaborative Filtering', 'Flask', 'React', 'Python'],
    impact: '35% higher satisfaction vs. standard CF baseline in A/B testing — cross-domain mood correlation',
    status: 'active',
  },
]

export const SKILLS = [
  {
    group: 'AI / ML Core',
    accent: 'cyan',
    items: [
      { name: 'Large Language Models', level: 92 },
      { name: 'Computer Vision', level: 85 },
      { name: 'Multimodal AI', level: 88 },
      { name: 'RAG Systems', level: 90 },
      { name: 'Model Fine-Tuning', level: 78 },
    ],
  },
  {
    group: 'Backend / Systems',
    accent: 'violet',
    items: [
      { name: 'FastAPI / Flask', level: 88 },
      { name: 'System Design', level: 85 },
      { name: 'Vector Databases', level: 87 },
      { name: 'Redis / Caching', level: 80 },
      { name: 'Docker / DevOps', level: 75 },
    ],
  },
  {
    group: 'ML Stack',
    accent: 'cyan',
    items: [
      { name: 'PyTorch', level: 90 },
      { name: 'HuggingFace Transformers', level: 92 },
      { name: 'LangChain / LlamaIndex', level: 88 },
      { name: 'scikit-learn', level: 85 },
      { name: 'OpenCV', level: 82 },
    ],
  },
  {
    group: 'Frontend',
    accent: 'violet',
    items: [
      { name: 'React / Next.js', level: 80 },
      { name: 'Streamlit', level: 90 },
      { name: 'Tailwind CSS', level: 82 },
      { name: 'Data Visualization', level: 78 },
      { name: 'TypeScript', level: 75 },
    ],
  },
]

export const TIMELINE = [
  {
    time: 'Now — 2025',
    title: 'AI Systems Builder',
    sub: 'Building 5 production-grade AI systems in parallel. Focus on multimodal AI, LLM security, and intelligent recommendation. Shipping real systems, not demos.',
    active: true,
  },
  {
    time: '2024',
    title: 'Deep Dive: LLMs & RAG',
    sub: 'Immersed in large language model architectures, fine-tuning, and retrieval-augmented generation. Shipped internal tools and open-source utilities.',
    active: false,
  },
  {
    time: '2023',
    title: 'Full-Stack ML Engineering',
    sub: 'Combined backend systems engineering with ML pipelines. Built first production CV system and discovered the power of system design thinking applied to AI.',
    active: false,
  },
  {
    time: '2022',
    title: 'The First Spark',
    sub: 'Started with classical ML, moved to deep learning. Realized the real challenge isn\'t the model — it\'s the system around it.',
    active: false,
  },
]

export const CHAT_RESPONSES: Record<string, string[]> = {
  outfit: [
    "The outfit search system is my take on Google Lens for fashion. I built a CLIP-based embedding pipeline that converts product images into a high-dimensional style space, then uses FAISS for sub-second similarity search. The hard part was outfit segmentation — isolating garments from complex backgrounds — which I solved with a custom ViT-based detector. The e-commerce integration queries multiple product APIs in parallel and re-ranks results by style similarity score.",
  ],
  pii: [
    "The PII engine was born from a real compliance problem. I built a bidirectional filter that wraps any LLM call — anonymizes inputs before they hit the model, de-anonymizes outputs after. Three-layer approach: fast regex for obvious patterns, spaCy NER for named entities, and a semantic classifier for contextual PII. Runs in under 5ms overhead, which makes it viable for real-time LLM pipelines.",
  ],
  finance: [
    "The finance chatbot is fully local — no cloud dependencies, no data leaving the machine. Ollama serves a quantized Mistral 7B with FinBERT re-ranking. The RAG system indexes SEC filings and earnings transcripts via LlamaIndex with Qdrant. Key innovation: for any numeric claim, the system requires a source document citation or it refuses to answer — financial data has zero tolerance for confident wrong answers.",
  ],
  mood: [
    "The mood recommender takes signals from three modalities: text sentiment, optional facial expression via MediaPipe, and behavioral patterns like time of day. These feed into a unified mood vector that maps to cross-domain recommendations. What I find interesting is how mood correlates across domains — the music for 'focused but tired' maps to minimalist fashion and quiet coffee shops. The system learns these correlations from feedback.",
  ],
  multimodal: [
    "The multimodal QnA engine uses a pipeline of OCR (PaddleOCR for accuracy), chart structure detection, and LLM reasoning. The key challenge was teaching the system to understand different chart types — bar, line, scatter, pie — and extract the right context for each. I fine-tuned a vision model on chart-QA datasets, then built a LangChain pipeline that combines visual understanding with structured reasoning.",
  ],
  approach: [
    "My approach is always systems-first. Before writing code, I map data flows, identify failure modes, and set latency budgets. The AI layer is just one component in a larger engineered system. This is why my projects tend to be production-focused rather than notebook-bound experiments. Every system I build has to answer: what happens at 10x load? What's the graceful degradation path?",
    "I think of myself as a systems engineer who specializes in the AI layer, not an ML researcher who occasionally writes APIs. The distinction matters. Research optimizes for accuracy. Engineering optimizes for the full system — accuracy, latency, cost, reliability, and maintainability all matter.",
  ],
  default: [
    "I build systems that think, not just predict. Each project starts with a real problem and I design architecture around solving it cleanly, at scale. I'm particularly interested in where LLMs meet real-world constraints: latency, security, hallucination, and cost. Ask me about a specific system!",
    "The thing that drives me is the gap between what AI *can* do and what actually ships. Most ML work lives in notebooks. I care about the last 20% — productionizing, securing, and scaling AI so it actually works for real users.",
  ],
}
