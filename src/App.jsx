import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-purple-50">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-rose-300 shadow-inner" />
          <span className="font-semibold text-rose-900">Pastel Aura</span>
        </div>
        <nav className="hidden gap-6 text-rose-800 sm:flex">
          <a href="#features" className="hover:text-rose-900">Features</a>
          <a href="#testimonials" className="hover:text-rose-900">Testimonials</a>
          <a href="#" className="hover:text-rose-900">Contact</a>
        </nav>
      </header>

      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-rose-700/80">
        © {new Date().getFullYear()} Pastel Aura. All love, no stress.
      </footer>
    </div>
  );
}
