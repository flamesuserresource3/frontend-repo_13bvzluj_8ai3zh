import FeatureCard from "./FeatureCard";
import { Palette, Feather, Sparkles } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Palette,
      title: "Pastel Palette",
      description:
        "Lavender, blush pink, and soft beige set a calming tone that feels modern and feminine.",
    },
    {
      icon: Feather,
      title: "Featherlight UI",
      description:
        "Rounded cards, airy spacing, and gentle shadows keep everything light and breathable.",
    },
    {
      icon: Sparkles,
      title: "Smooth Motion",
      description:
        "Subtle transitions and micro‑interactions add a touch of delight without overwhelm.",
    },
  ];

  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-rose-900">Designed for calm</h2>
        <p className="mt-2 text-rose-700">
          A thoughtful set of choices that bring serenity to every interaction.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <FeatureCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
            delay={i * 0.05}
          />
        ))}
      </div>
    </section>
  );
}
