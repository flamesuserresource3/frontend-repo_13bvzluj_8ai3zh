import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-20 w-full border-b border-white/5 bg-[#0b1020]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-600 via-lime-400 to-rose-500 shadow-[0_0_25px_rgba(99,102,241,.45)]" />
            <span className="bg-gradient-to-r from-blue-200 via-lime-200 to-rose-200 bg-clip-text text-sm font-semibold text-transparent">
              Blue Flame
            </span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#skills" className="hover:text-white">Skills</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <Hero />

        {/* About with photo card + socials */}
        <section id="about" className="relative mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            {/* Photo + socials */}
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-28 w-28 rounded-3xl bg-blue-500/30 blur-2xl" />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl bg-rose-500/30 blur-2xl" />
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-2 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
                  alt="Portrait"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>

              {/* Socials on card */}
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 transition hover:bg-white/20"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 transition hover:bg-white/20"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 transition hover:bg-white/20"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Intro + blurb */}
            <div>
              <h2 className="bg-gradient-to-r from-blue-400 via-lime-400 to-rose-400 bg-clip-text text-3xl font-semibold text-transparent">
                About Me
              </h2>
              <p className="mt-4 text-slate-200/90">
                Hi, I’m Your Name — a visual representation of Dora the Explorer, exploring
                design, color, and creativity in my own silly way!
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200/90 backdrop-blur">
                  <h3 className="text-sm font-medium text-blue-200">What I love</h3>
                  <p className="mt-1 text-sm">Playful composition, bold palettes, and micro-animations.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200/90 backdrop-blur">
                  <h3 className="text-sm font-medium text-rose-200">Currently</h3>
                  <p className="mt-1 text-sm">Experimenting with Spline, shaders, and interactive toys.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Experience />
        <Education />
        <Skills />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Blue Flame · Crafted with curiosity.
      </footer>
    </div>
  );
}
