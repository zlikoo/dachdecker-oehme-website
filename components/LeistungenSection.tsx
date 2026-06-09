"use client";

import { motion } from "framer-motion";
import { Home, Layers, Wrench, Building2, Zap, Search } from "lucide-react";

const leistungen = [
  {
    icon: Home,
    title: "Satteldach",
    description:
      "Dachziegel, Betonstein und Schiefer — fachgerecht verlegt für Jahrzehnte. Neueindeckung, Sanierung und Umdeckung nach Maß.",
  },
  {
    icon: Layers,
    title: "Flachdach",
    description:
      "Professionelle Abdichtung, Renovation und Neubau von Flachdächern. Wir arbeiten mit hochwertigen Materialien führender Hersteller.",
  },
  {
    icon: Wrench,
    title: "Klempnerarbeiten",
    description:
      "Kupfer- und Titaniumzink-Systeme für Dachentwässerung, Kehlen und Fassadendetails — langlebig und optisch anspruchsvoll.",
  },
  {
    icon: Building2,
    title: "Fassade",
    description:
      "Schiefer, Metall und Ton für eine wetterfeste, ansprechende Fassadenverkleidung — zeitlos in der Optik und robust im Material.",
  },
  {
    icon: Zap,
    title: "Reparaturen & Notfälle",
    description:
      "Schnelle Hilfe bei Sturmschäden, Leckagen und dringenden Notfällen. Regional, zuverlässig und erfahren seit 30 Jahren.",
  },
  {
    icon: Search,
    title: "Dachcheck",
    description:
      "Zertifizierte Dachinspektion mit offiziellem Innungssiegel. Wir prüfen Ihr Dach professionell und erstellen einen ausführlichen Befundbericht.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export default function LeistungenSection() {
  return (
    <section id="leistungen" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-16 bg-orange" />
            <span className="text-orange font-sans text-xs font-bold tracking-[0.3em] uppercase">
              Was wir bieten
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-navy tracking-wide leading-none">
            UNSERE
            <br />
            LEISTUNGEN
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {leistungen.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group bg-white rounded-2xl p-8 border border-slate-100 hover:bg-navy transition-all duration-400 cursor-default shadow-sm hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Top accent line that expands on hover */}
                <div className="h-[3px] w-10 bg-orange mb-7 group-hover:w-full transition-all duration-500 ease-out" />

                <Icon className="w-9 h-9 text-navy group-hover:text-orange transition-colors duration-300 mb-5" />

                <h3 className="font-display text-2xl text-navy group-hover:text-white transition-colors duration-300 tracking-wide mb-3">
                  {item.title.toUpperCase()}
                </h3>

                <p className="font-sans text-slate-500 group-hover:text-white/65 transition-colors duration-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-sans font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl tracking-wide"
          >
            Alle Leistungen anfragen →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
