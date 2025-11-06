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
        <div className="absolute -left-10 -top-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-2xl" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="pointer-events-none inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-blue-100/90 backdrop-blur-sm"
        >
          Elegant, dreamy, and creative — Blue Flame
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 bg-gradient-to-r from-sky-200 via-cyan-200 to-indigo-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Visual representation of Dora the Explorer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base text-blue-100/90"
        >
          Curious, playful, and a little bit magical. I wander through color and light
          to find new ways to make pixels feel alive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#about"
            className="pointer-events-auto rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-sky-700/30 transition-transform hover:-translate-y-0.5"
          >
            Meet me
          </a>
          <a
            href="#artworks"
            className="pointer-events-auto rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-blue-100/90 backdrop-blur-md transition-colors hover:bg-white/10"
          >
            See my art
          </a>
        </motion.div>
      </div>
    </section>
  );
}
