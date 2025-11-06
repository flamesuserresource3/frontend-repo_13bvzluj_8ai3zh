import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "This aesthetic feels like opening a window on a gentle spring morning. It's soothing and inspiring.",
    author: "Maya R.",
    role: "Designer",
  },
  {
    quote:
      "Soft, thoughtful, and modern. It calms the mind while keeping everything beautifully clear.",
    author: "Isabella K.",
    role: "Product Lead",
  },
  {
    quote:
      "A perfect blend of elegance and comfort. My team keeps complimenting the vibe!",
    author: "Sofia L.",
    role: "Founder",
  },
];

function TestimonialCard({ t, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-rose-100 backdrop-blur"
    >
      <p className="text-rose-900">“{t.quote}”</p>
      <div className="mt-4 text-sm text-rose-700">
        <span className="font-medium text-rose-800">{t.author}</span> · {t.role}
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-rose-900">Loved by calm creatives</h2>
        <p className="mt-2 text-rose-700">
          Words from people who appreciate a softer, more intentional rhythm.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.author} t={t} delay={i * 0.05} />
        ))}
      </div>
    </section>
  );
}
