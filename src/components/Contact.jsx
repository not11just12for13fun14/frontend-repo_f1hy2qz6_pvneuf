import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent! (mock)');
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Contact</h2>
          <p className="text-blue-100/90">Have a quest in mind? Send a message and let’s build something epic.</p>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-blue-200/80">
            <div className="rounded-xl border border-blue-500/30 bg-slate-900/60 p-4">Base: Neo-Tokyo</div>
            <div className="rounded-xl border border-blue-500/30 bg-slate-900/60 p-4">Guild: Freelance</div>
            <div className="rounded-xl border border-red-500/30 bg-slate-900/60 p-4">Rank: S+</div>
            <div className="rounded-xl border border-red-500/30 bg-slate-900/60 p-4">Status: Available</div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-blue-500/30 bg-slate-900/60 p-6 backdrop-blur"
        >
          <div className="grid gap-4">
            <input required placeholder="Your name" className="w-full rounded-lg border border-blue-500/30 bg-slate-800 px-4 py-3 text-sm text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:outline-none" />
            <input required type="email" placeholder="Email address" className="w-full rounded-lg border border-blue-500/30 bg-slate-800 px-4 py-3 text-sm text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:outline-none" />
            <textarea required rows="4" placeholder="Your message" className="w-full rounded-lg border border-blue-500/30 bg-slate-800 px-4 py-3 text-sm text-white placeholder:text-blue-200/50 focus:border-blue-400 focus:outline-none" />
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button className="rounded-xl bg-gradient-to-r from-blue-500 to-red-500 px-5 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(244,63,94,0.35)] transition hover:opacity-90">Send</button>
            {status && <span className="text-sm text-blue-200/80">{status}</span>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
