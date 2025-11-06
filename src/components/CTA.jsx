import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-3xl bg-gradient-to-r from-rose-50 via-pink-50 to-purple-50 p-8 ring-1 ring-rose-100">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-semibold text-rose-900">
              Ready to create your serene experience?
            </h3>
            <p className="mt-1 text-rose-700">
              Start with soft colors, rounded corners, and gentle motion.
            </p>
          </div>

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-rose-300 px-6 py-3 text-rose-900 shadow-md transition-colors hover:bg-rose-300/90"
          >
            Begin now
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
