import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="group rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-rose-100 backdrop-blur transition-shadow hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
          {Icon && <Icon className="h-6 w-6" />}
        </div>
        <h3 className="text-lg font-semibold text-rose-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-rose-700">{description}</p>
    </motion.div>
  );
}
