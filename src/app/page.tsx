import EventCard from '@/components/EventCard';

const MOCK_EVENTS = [
  {
    id: '1',
    title: 'MCP: The Future of Model Context',
    date: 'March 15, 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'San Francisco, CA',
    description: 'Deep dive into the Model Context Protocol (MCP). Learn how to create standardized interfaces for AI models to interact with your data and tools.',
  },
  {
    id: '2',
    title: 'Mastering AI Skills & Tool Use',
    date: 'March 22, 2026',
    time: '1:00 PM - 5:00 PM',
    location: 'Miami, FL',
    description: 'Hands-on workshop on teaching LLMs new skills. We will cover function calling, tool definitions, and orchestration for complex workflows.',
  },
  {
    id: '3',
    title: 'Autonomous Agents Symposium',
    date: 'April 5, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'New York City, NY',
    description: 'Explore the architecture of autonomous agents. Discuss multi-agent systems, planning, and long-term memory in production environments.',
  },
  {
    id: '4',
    title: 'LLM Optimization & Fine-tuning',
    date: 'April 12, 2026',
    time: '9:00 AM - 12:00 PM',
    location: 'Kansas City, MO',
    description: 'Practical guide to optimizing Large Language Models. Compare RAG vs. Fine-tuning and learn about quantization and low-latency inference.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-slate-200 selection:bg-blue-500/30">
      {/* Hero Section with Animated Gradient */}
      <header className="relative overflow-hidden border-b border-white/5 bg-slate-950 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f633,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6 backdrop-blur-sm">
            AI Innovation Series 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Shape the Future <br />of Intelligence
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Join the world's leading engineers and researchers to explore the frontier of MCP, Autonomous Agents, and Large Language Models.
          </p>
        </div>
      </header>

      {/* Events Grid */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          <p>&copy; 2026 AI RSVP Portal. Powered by Next.js & Tailwind.</p>
        </div>
      </footer>
    </main>
  );
}
