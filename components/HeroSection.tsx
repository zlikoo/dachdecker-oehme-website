"use client";

import { motion } from "framer-motion";
import { ChevronRight, ArrowDown } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
      >
        <source
          src="https://videos.pexels.com/video-files/3886214/3886214-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Layered Overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-navy/40" />

      {/* Diagonal accent stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-20">
          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-5">
              <div className="h-px w-16 bg-orange" />
              <span className="text-orange font-sans text-xs font-bold tracking-[0.3em] uppercase">
                Meisterbetrieb seit 1994
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-[clamp(56px,8vw,104px)] text-white leading-[0.9] tracking-wide mb-6"
            >
              IHR DACH.
              <br />
              <span className="text-orange">UNSERE</span>
              <br />
              MEISTERSCHAFT.
            </motion.h1>

            {/* Divider */}
            <motion.div variants={itemVariants} className="w-24 h-0.5 bg-white/20 mb-6" />

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-white/75 text-base md:text-lg max-w-lg mb-10 leading-relaxed"
            >
              30 Jahre Vertrauen in der Region Groß-Gerau.
              Ihr zuverlässiger Dachdecker für Satteldach, Flachdach und Klempnerarbeiten.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-sans font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl hover:shadow-orange/30 tracking-wide"
              >
                Kostenlos anfragen
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/70 text-white hover:bg-white/5 font-sans font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200 tracking-wide"
              >
                Unsere Leistungen
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Trust badge bottom right */}
      <motion.div
        className="absolute bottom-10 right-8 hidden lg:flex flex-col items-end gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="font-sans text-white/40 text-xs tracking-[0.15em] uppercase">
          Mitglied der Dachdecker-Innung
        </span>
        <span className="font-sans text-white/40 text-xs tracking-[0.15em] uppercase">
          Groß-Gerau · Darmstadt-Dieburg
        </span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown className="w-5 h-5 text-white/30" />
      </motion.div>
    </section>
  );
}
