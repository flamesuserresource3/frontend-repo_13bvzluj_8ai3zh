import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-[#0b1020]">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Gradient glow overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 -top-10 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-rose-400/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/15 blur-2xl" />
        {/* playful stars */}
        <div className="absolute left-10 top-1/3 h-2 w-2 rotate-45 rounded-sm bg-white/70" />
        <div className="absolute right-16 top-1/4 h-1.5 w-1.5 rotate-45 rounded-sm bg-white/60" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="pointer-events-none inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs text-blue-50/90 backdrop-blur-sm shadow-[0_0_30px_rgba(56,189,248,.25)]"
        >
          Vivid, playful, and boldly colorful
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 bg-gradient-to-r from-blue-400 via-lime-300 to-rose-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Hi, I’m Your Name — a visual representation of Dora the Explorer,
          exploring design, color, and creativity in my own silly way!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base text-blue-50/90"
        >
          Royal blues, lime greens, and coral reds meet soft pastels — my work blends
          imagination with clean, modern craft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#about"
            className="pointer-events-auto rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-700/30 transition-transform hover:-translate-y-0.5"
          >
            About Me
          </a>
          <a
            href="#experience"
            className="pointer-events-auto rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-blue-50/90 backdrop-blur-md transition-colors hover:bg-white/20"
          >
            My Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
