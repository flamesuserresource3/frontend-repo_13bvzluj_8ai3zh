import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";

const items = [
  {
    role: "Visual Designer",
    org: "Blue Flame Studio",
    time: "2023 — Present",
    desc: "Designing vibrant brand systems, playful illustrations, and motion experiments.",
  },
  {
    role: "Freelance Illustrator",
    org: "Self-Employed",
    time: "2021 — 2023",
    desc: "Created whimsical illustrations for web, print, and social campaigns.",
  },
  {
    role: "Design Intern",
    org: "Color Lab",
    time: "2020 — 2021",
    desc: "Explored color theory, palette development, and layout fundamentals.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-royal-500 via-lime-500 to-coral-500">
          Experiences
        </h2>
        <p className="mt-2 text-slate-200/90">A colorful path through design and play.</p>
      </div>

      {/* Pastel geometric accents */}
      <div className="pointer-events-none absolute inset-0 -z-[0]">
        <div className="absolute -top-6 left-4 h-24 w-24 rotate-12 rounded-3xl bg-emerald-300/20 blur-2xl" />
        <div className="absolute bottom-10 right-6 h-28 w-28 -rotate-6 rounded-full bg-rose-300/20 blur-2xl" />
      </div>

      <div className="space-y-4">
        {items.map((it, i) => (
          <motion.div
            key={it.role}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-800/80 p-5 backdrop-blur shadow-lg"
          >
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow ring-1 ring-white/10">
              <Briefcase className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold text-slate-100">{it.role}</h3>
                <span className="rounded-full bg-lime-400/20 px-2.5 py-1 text-xs font-medium text-lime-200 ring-1 ring-lime-300/40">
                  {it.org}
                </span>
                <span className="ml-auto text-xs text-slate-300/80">{it.time}</span>
              </div>
              <p className="mt-2 text-sm text-slate-200/90">{it.desc}</p>
              <button className="mt-3 inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-100 ring-1 ring-white/10 transition hover:bg-white/10">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
