import Hero from "./components/Hero";
import About from "./components/About";
import Artworks from "./components/Artworks";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1020] font-[Inter,ui-sans-serif,system-ui] text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-20 w-full border-b border-white/5 bg-[#0b1020]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-sky-400 via-cyan-400 to-indigo-500 shadow-[0_0_25px_rgba(56,189,248,.45)]" />
            <span className="bg-gradient-to-r from-sky-200 to-indigo-200 bg-clip-text text-sm font-semibold text-transparent">
              Blue Flame
            </span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#artworks" className="hover:text-white">Artworks</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Artworks />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Blue Flame · Crafted with curiosity.
      </footer>
    </div>
  );
}
