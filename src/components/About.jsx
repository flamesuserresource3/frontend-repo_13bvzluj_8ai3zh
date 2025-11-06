import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-3xl bg-sky-400/30 blur-2xl" />
          <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl bg-indigo-500/30 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-2 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>

        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-3xl font-semibold text-transparent">
            About Me
          </h2>
          <p className="mt-4 text-slate-200/90">
            I’m a visual explorer who follows sparks of curiosity. My work plays
            at the intersection of illustration, motion, and digital whimsy —
            where gradients glow and shapes dance.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200/90 backdrop-blur">
            <h3 className="text-lg font-medium text-sky-200">My Creative Process</h3>
            <p className="mt-2 text-sm leading-relaxed">
              Start with a feeling. Wander through references. Sketch loosely.
              Then bring it to life with color, light, and playful motion.
            </p>
          </div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200/90 backdrop-blur">
            <h3 className="text-lg font-medium text-sky-200">Silly Artwork Section</h3>
            <p className="mt-2 text-sm leading-relaxed">
              I keep a pocket of goofy doodles and charming accidents — because
              art should giggle sometimes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
