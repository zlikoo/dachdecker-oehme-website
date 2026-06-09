"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamSection() {
  return (
    <section className="relative h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
      {/* Team photo full-bleed */}
      <Image
        src="/Oehme-Team-2020.png"
        alt="Das Team von Dachdeckermeister Frank Oehme GmbH"
        fill
        className="object-cover object-top"
        sizes="100vw"
      />

      {/* Overlay: dunkel unten für Lesbarkeit des Kontakt-Übergangs */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a30]/90 via-[#0c1a30]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/60 to-transparent" />

      {/* Text */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-16 bg-orange" />
          <span className="text-orange font-sans text-xs font-bold tracking-[0.3em] uppercase">
            Unser Team
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-none">
          10 FACHLEUTE.
          <br />
          EIN ZIEL.
        </h2>
      </motion.div>
    </section>
  );
}
