import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const schools = [
  {
    degree: "B.A. in Visual Communication",
    school: "Color & Motion University",
    time: "2017 — 2021",
  },
  {
    degree: "Certificate in Motion Graphics",
    school: "Playful Arts Institute",
    time: "2022",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-coral-500 to-lime-500">
          Education
        </h2>
        <p className="mt-2 text-slate-200/90">Learning by exploring color, form, and joyful craft.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {schools.map((s, i) => (
          <motion.div
            key={s.degree}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-500 to-emerald-500 text-white ring-1 ring-white/10">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-100">{s.degree}</h3>
              <p className="text-sm text-slate-300/90">{s.school}</p>
              <p className="mt-1 text-xs text-slate-400">{s.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
