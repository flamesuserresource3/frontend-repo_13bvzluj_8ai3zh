import { motion } from "framer-motion";
import { Mail, Instagram, Twitter, Github } from "lucide-react";

export default function Contact() {
  const links = [
    { href: "mailto:hello@example.com", label: "Email", icon: Mail },
    { href: "https://instagram.com", label: "Instagram", icon: Instagram },
    { href: "https://twitter.com", label: "Twitter/X", icon: Twitter },
    { href: "https://github.com", label: "GitHub", icon: Github },
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-3xl font-semibold text-transparent">
          Contact / Social Links
        </h2>
        <p className="mt-2 text-slate-200/90">
          Let’s connect — I love friendly messages and creative collabs.
        </p>
      </div>

      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {links.map((l, i) => (
          <motion.a
            key={l.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200/90 backdrop-blur transition hover:bg-white/10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/20 text-sky-200 ring-1 ring-sky-300/30">
              <l.icon className="h-5 w-5" />
            </span>
            <div className="flex flex-col">
              <span className="font-medium">{l.label}</span>
              <span className="text-xs opacity-80">{l.href}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
