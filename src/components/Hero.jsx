import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-pink-200/60 blur-3xl" />
        <div className="absolute top-32 -right-10 h-80 w-80 rounded-full bg-purple-200/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-100/70 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-rose-500 shadow-sm ring-1 ring-rose-100 backdrop-blur"
        >
          <Sparkles className="h-4 w-4" />
          Gentle design for calm minds
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-4xl font-semibold leading-tight text-rose-900 sm:text-5xl md:text-6xl"
        >
          Create your serene corner
          <span className="block bg-gradient-to-r from-rose-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            with pastel elegance
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-rose-700"
        >
          Soft colors, rounded cards, and soothing motion come together to craft a
          modern, feminine aesthetic that feels like a deep, contented breath.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 px-6 py-3 text-rose-900 shadow-md transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Explore features
            <Heart className="h-4 w-4 transition-transform group-hover:scale-110" />
          </a>
          <a
            href="#testimonials"
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-6 py-3 text-rose-700 shadow-sm ring-1 ring-rose-100 backdrop-blur transition-colors hover:bg-white"
          >
            See the love
          </a>
        </motion.div>
      </div>
    </section>
  );
}
