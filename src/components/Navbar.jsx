import { Menu } from "lucide-react";
import { useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-blue-500/30 bg-slate-900/70 backdrop-blur-md px-4 py-3 shadow-[0_0_30px_rgba(59,130,246,0.25)]">
          <button onClick={() => scrollTo("hero")} className="group flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-red-500 shadow-lg" />
            <span className="font-bold tracking-tight text-white">DevQuest</span>
          </button>

          <nav className="hidden gap-6 md:flex">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-sm font-medium text-blue-100/80 transition-colors hover:text-white"
              >
                {s.label}
              </button>
            ))}
          </nav>

          <button
            className="inline-flex items-center justify-center rounded-lg border border-blue-500/40 bg-blue-500/10 px-3 py-2 text-sm font-semibold text-blue-100 shadow-inner shadow-blue-500/20 transition hover:bg-blue-500/20 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-xl border border-blue-500/30 bg-slate-900/80 backdrop-blur-md md:hidden">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="block w-full px-4 py-3 text-left text-blue-100/90 hover:bg-blue-500/10"
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
