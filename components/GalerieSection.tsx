"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projekte = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    title: "Satteldach Neubau",
    ort: "Groß-Gerau",
    large: true,
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    title: "Gewerbedach",
    ort: "Darmstadt",
    large: false,
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    title: "Fassade & Dach",
    ort: "Rüsselsheim",
    large: false,
  },
  {
    src: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
    title: "Klempnerarbeiten",
    ort: "Nauheim",
    large: false,
  },
  {
    src: "https://images.unsplash.com/photo-1510218830377-2e994ea9087b?w=800&q=80",
    title: "Dachfenster",
    ort: "Wallerstädten",
    large: false,
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    title: "Wohnhaus Sanierung",
    ort: "Geinsheim",
    large: false,
  },
];

export default function GalerieSection() {
  return (
    <section id="referenzen" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-16 bg-orange" />
            <span className="text-orange font-sans text-xs font-bold tracking-[0.3em] uppercase">
              Unsere Arbeiten
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-navy tracking-wide leading-none">
            UNSERE
            <br />
            REFERENZEN
          </h2>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large featured item */}
          <motion.div
            className="md:col-span-2 md:row-span-2 relative h-80 md:h-auto md:min-h-[540px] overflow-hidden rounded-2xl group"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={projekte[0].src}
              alt={projekte[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-7">
              <h3 className="font-display text-3xl text-white tracking-wide">
                {projekte[0].title.toUpperCase()}
              </h3>
              <p className="font-sans text-white/60 text-sm">{projekte[0].ort}</p>
            </div>
          </motion.div>

          {/* Smaller items */}
          {projekte.slice(1).map((projekt, index) => (
            <motion.div
              key={projekt.title}
              className="relative h-64 overflow-hidden rounded-2xl group"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.07 }}
            >
              <Image
                src={projekt.src}
                alt={projekt.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <h3 className="font-display text-xl text-white tracking-wide">
                  {projekt.title.toUpperCase()}
                </h3>
                <p className="font-sans text-white/60 text-xs">{projekt.ort}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-sans font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 tracking-wide"
          >
            Projekt anfragen →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
