"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: 30, suffix: "+", label: "Jahre Erfahrung" },
  { value: 2, suffix: "", label: "Dachdeckermeister" },
  { value: 8, suffix: "", label: "Qualifizierte Dachdecker" },
  { value: 500, suffix: "+", label: "Zufriedene Kunden" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section id="ueber-uns" className="py-20 bg-navy relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 40px,
            white 40px,
            white 41px
          ), repeating-linear-gradient(
            90deg,
            transparent,
            transparent 40px,
            white 40px,
            white 41px
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-12 bg-orange" />
            <span className="text-orange font-sans text-xs font-bold tracking-[0.3em] uppercase">
              Zahlen die für uns sprechen
            </span>
            <div className="h-px w-12 bg-orange" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mt-4">
            30 JAHRE. REGIONAL. MEISTERBETRIEB.
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center py-10 px-4 border-r border-white/10 last:border-r-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="font-display text-[clamp(56px,7vw,88px)] text-white leading-none mb-3">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="h-[3px] w-10 bg-orange mb-3" />
              <p className="font-sans text-white/55 text-sm text-center tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          className="text-center font-sans text-white/40 text-sm mt-12 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Als Mitglied der Dachdecker-Innung Groß-Gerau und Darmstadt-Dieburg stehen wir
          für geprüfte Qualität und regionales Handwerk auf höchstem Niveau.
        </motion.p>
      </div>

      {/* Team Photo Strip */}
      <motion.div
        className="relative mt-16 mx-auto max-w-4xl px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
          <Image
            src="/Oehme-Team-2020.png"
            alt="Das Team von Dachdeckermeister Frank Oehme GmbH"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <p className="font-display text-2xl text-white tracking-wide">DAS TEAM</p>
            <p className="font-sans text-white/60 text-sm">10 Fachleute. Ein Ziel: Ihr perfektes Dach.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
