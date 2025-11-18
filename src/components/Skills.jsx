import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Tailwind', level: 90 },
  { name: 'FastAPI', level: 70 },
  { name: 'MongoDB', level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">Skills</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((s, idx) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            className="rounded-xl border border-blue-500/30 bg-slate-900/60 p-4 backdrop-blur"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-blue-100">{s.name}</span>
              <span className="text-blue-200/80">{s.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-red-500"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
