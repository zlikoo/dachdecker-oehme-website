"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

const kontaktInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 6152 39905",
    href: "tel:+4961523905",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "ddmoehme.frank@gmail.com",
    href: "mailto:ddmoehme.frank@gmail.com",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Schützenstraße 13, 64521 Groß-Gerau",
    href: null,
  },
  {
    icon: Clock,
    label: "Öffnungszeiten",
    value: "Mo–Fr: 07:00–17:00 Uhr",
    href: null,
  },
];

export default function KontaktSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const betreff = (form.elements.namedItem("betreff") as HTMLSelectElement).value;
    const nachricht = (form.elements.namedItem("nachricht") as HTMLTextAreaElement).value;
    const body = encodeURIComponent(
      `${nachricht}\n\nVon: ${name}\nKontakt: ${email}`
    );
    window.location.href = `mailto:ddmoehme.frank@gmail.com?subject=Anfrage: ${betreff} von ${name}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 bg-[#0c1a30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-orange" />
              <span className="text-orange font-sans text-xs font-bold tracking-[0.3em] uppercase">
                Jetzt anfragen
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-white tracking-wide leading-none mb-6">
              LASSEN SIE
              <br />
              UNS REDEN.
            </h2>
            <p className="font-sans text-white/50 text-sm leading-relaxed mb-12 max-w-sm">
              Kontaktieren Sie uns für eine kostenlose Erstberatung.
              Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>

            <div className="flex flex-col gap-7">
              {kontaktInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-5 group">
                    <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-orange transition-colors duration-200">
                      <Icon className="w-5 h-5 text-orange group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <div className="font-sans text-white/35 text-xs uppercase tracking-widest mb-0.5">
                        {item.label}
                      </div>
                      <div className="font-sans text-white text-sm group-hover:text-orange/90 transition-colors duration-200">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-white/40 text-[11px] uppercase tracking-widest">
                      Name *
                    </label>
                    <input
                      name="name"
                      required
                      className="bg-white/5 border border-white/10 focus:border-orange/60 rounded-xl px-4 py-3 font-sans text-white text-sm placeholder-white/15 outline-none transition-colors duration-200"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-white/40 text-[11px] uppercase tracking-widest">
                      Telefon / E-Mail *
                    </label>
                    <input
                      name="email"
                      required
                      className="bg-white/5 border border-white/10 focus:border-orange/60 rounded-xl px-4 py-3 font-sans text-white text-sm placeholder-white/15 outline-none transition-colors duration-200"
                      placeholder="Ihre Kontaktdaten"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-white/40 text-[11px] uppercase tracking-widest">
                    Thema
                  </label>
                  <select
                    name="betreff"
                    className="bg-white/5 border border-white/10 focus:border-orange/60 rounded-xl px-4 py-3 font-sans text-white text-sm outline-none transition-colors duration-200 appearance-none"
                  >
                    <option value="Allgemein" className="bg-[#0c1a30]">Bitte wählen</option>
                    <option value="Satteldach" className="bg-[#0c1a30]">Satteldach</option>
                    <option value="Flachdach" className="bg-[#0c1a30]">Flachdach</option>
                    <option value="Reparatur" className="bg-[#0c1a30]">Reparatur / Notfall</option>
                    <option value="Dachcheck" className="bg-[#0c1a30]">Dachcheck</option>
                    <option value="Fassade" className="bg-[#0c1a30]">Fassadenverkleidung</option>
                    <option value="Sonstiges" className="bg-[#0c1a30]">Sonstiges</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-white/40 text-[11px] uppercase tracking-widest">
                    Nachricht *
                  </label>
                  <textarea
                    name="nachricht"
                    required
                    rows={5}
                    className="bg-white/5 border border-white/10 focus:border-orange/60 rounded-xl px-4 py-3 font-sans text-white text-sm placeholder-white/15 outline-none transition-colors duration-200 resize-none"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-orange hover:bg-orange-dark text-white font-sans font-bold py-4 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange/20 tracking-widest text-sm"
                >
                  ANFRAGE ABSENDEN →
                </button>

                <p className="font-sans text-white/25 text-xs text-center">
                  Kostenlos und unverbindlich. Keine Weitergabe Ihrer Daten.
                </p>
              </form>
            ) : (
              <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-14 flex flex-col items-center text-center gap-5">
                <div className="w-16 h-16 rounded-full bg-orange/15 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-orange" />
                </div>
                <h3 className="font-display text-4xl text-white tracking-wide">DANKE!</h3>
                <p className="font-sans text-white/50 text-sm max-w-xs leading-relaxed">
                  Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <a
                  href="tel:+4961523905"
                  className="font-sans text-orange text-sm font-semibold hover:text-orange-dark transition-colors"
                >
                  Oder rufen Sie uns direkt an: 06152 39905
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
