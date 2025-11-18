import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-20 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] sm:text-6xl"
        >
          Level Up Your Web Experience
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="max-w-2xl text-lg text-blue-100/90"
        >
          I build fast, playful, and accessible web apps with a gamer heart. Explore my quests, unlock achievements, and try interactive challenges.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-3"
        >
          <a href="#projects" className="rounded-xl bg-gradient-to-r from-blue-500 to-red-500 px-5 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(59,130,246,0.4)] transition hover:opacity-90">Play Demos</a>
          <a href="#about" className="rounded-xl border border-blue-500/40 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-blue-100 backdrop-blur-md hover:bg-blue-500/10">About Me</a>
        </motion.div>

        <div className="mt-6 flex items-center gap-4">
          <div className="h-2 w-48 overflow-hidden rounded-full bg-slate-700">
            <div className="h-full w-2/3 animate-[progress_3s_ease_infinite] rounded-full bg-gradient-to-r from-blue-500 to-red-500" />
          </div>
          <span className="text-sm font-medium text-blue-100/80">XP: Frontend 70%</span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/60 to-slate-950" />

      <style>{`
        @keyframes progress { 0%{ transform: translateX(-66%);} 100%{ transform: translateX(100%);} }
      `}</style>
    </section>
  );
}
