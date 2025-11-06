import { motion } from "framer-motion";

const pieces = [
  {
    title: "Moonlit Giggle",
    img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Bubble Chorus",
    img: "https://images.unsplash.com/photo-1520975922215-c0f9f1c83ab2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Nebula Confetti",
    img: "https://images.unsplash.com/photo-1517816732267-2c2d83f0f98f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Curious Comet",
    img: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop",
  },
];

function Card({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex items-center justify-between p-4">
        <h4 className="text-slate-100">{item.title}</h4>
        <span className="rounded-full bg-sky-400/20 px-3 py-1 text-xs text-sky-200 ring-1 ring-sky-300/30">
          playful
        </span>
      </div>
    </motion.div>
  );
}

export default function Artworks() {
  return (
    <section id="artworks" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-3xl font-semibold text-transparent">
          My Artworks
        </h2>
        <p className="mt-2 text-slate-200/90">Bright, curious, and a little mischievous.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pieces.map((p, i) => (
          <Card key={p.title} item={p} i={i} />
        ))}
      </div>
    </section>
  );
}
