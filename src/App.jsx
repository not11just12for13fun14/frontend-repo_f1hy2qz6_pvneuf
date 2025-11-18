import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_40%)]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <footer className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-blue-200/70">
          © {new Date().getFullYear()} DevQuest — Built with love, blue & red.
        </footer>
      </main>
    </div>
  )
}

export default App
