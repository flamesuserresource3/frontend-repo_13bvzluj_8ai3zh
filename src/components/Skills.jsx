import { motion } from "framer-motion";
import { Sparkles, PenTool, Palette } from "lucide-react";

const groups = [
  {
    title: "Expertise",
    icon: Sparkles,
    color: "from-royal-500 to-blue-500",
    items: ["Brand & Visual Design", "Illustration", "Motion & Micro-animations"],
  },
  {
    title: "Tools",
    icon: PenTool,
    color: "from-coral-500 to-rose-500",
    items: ["Figma", "Illustrator", "After Effects", "Blender (basics)"],
  },
  {
    title: "Palette",
    icon: Palette,
    color: "from-lime-500 to-emerald-500",
    items: ["Royal Blue", "Lime Green", "Coral Red", "Pastels"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-lime-500 to-coral-500">
          Skills & Expertise
        </h2>
        <p className="mt-2 text-slate-200/90">A toolbox of color, craft, and curiosity.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <div className={`inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br ${g.color} px-3 py-2 text-white ring-1 ring-white/10`}>
              <g.icon className="h-4 w-4" />
              <span className="text-sm font-medium">{g.title}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-200/90">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
