import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Retro Runner',
    desc: 'Endless runner built with React + Canvas.',
    demo: 'https://codesandbox.io/s/react-canvas-runner-demo-3z8h2',
    tech: ['React', 'Canvas']
  },
  {
    title: 'API Forge',
    desc: 'FastAPI + Mongo starter with auth & CRUD.',
    demo: 'https://github.com',
    tech: ['FastAPI', 'MongoDB']
  },
  {
    title: 'UI Arena',
    desc: 'Component playground with Tailwind + motion.',
    demo: 'https://stackblitz.com',
    tech: ['Tailwind', 'Framer Motion']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Projects</h2>
        <span className="rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-200">3 Achievements</span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            className="group relative overflow-hidden rounded-2xl border border-blue-500/30 bg-slate-900/60 p-5 backdrop-blur transition hover:border-red-500/50 hover:bg-slate-900/80"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <span className="text-xs text-blue-200/70">{p.tech.join(' • ')}</span>
            </div>
            <p className="text-sm text-blue-100/90">{p.desc}</p>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-700">
              <div className="h-full w-0 bg-gradient-to-r from-blue-500 to-red-500 transition-all duration-700 group-hover:w-full" />
            </div>
            <span className="absolute right-3 top-3 rounded-md border border-blue-500/40 bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-100">Demo</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
