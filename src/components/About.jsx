import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">About Me</h2>
          <p className="text-blue-100/90">
            I'm a web developer focused on crafting responsive, accessible, and fun digital experiences. I love turning complex ideas into intuitive interfaces, blending performance with a playful touch inspired by game design.
          </p>
          <div className="mt-6 rounded-xl border border-red-500/30 bg-slate-900/60 p-6 backdrop-blur">
            <p className="text-sm text-blue-100/80">Achievement Unlocked: "Pixel Perfectionist" — Shipped 30+ production features with 99.9% uptime.</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-blue-500/40 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-[0_0_30px_rgba(59,130,246,0.25)]">
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: 'Frontend', value: 90 },
                { label: 'Backend', value: 70 },
                { label: 'UI/UX', value: 85 },
              ].map((s) => (
                <div key={s.label}>
                  <div className="mx-auto mb-2 h-24 w-24 rounded-full border-4 border-red-500/50 p-1">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900 text-2xl font-bold text-white">
                      {s.value}%
                    </div>
                  </div>
                  <p className="text-sm font-medium text-blue-100/90">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-blue-200/70">Progress rings represent skill levels earned from past quests.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
