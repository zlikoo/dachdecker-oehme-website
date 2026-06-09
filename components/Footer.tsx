import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070f1e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl text-white tracking-widest mb-1">
              OEHME
            </div>
            <div className="font-sans text-white/35 text-xs tracking-[0.2em] uppercase mb-5">
              Dachdeckermeister · Groß-Gerau
            </div>
            <p className="font-sans text-white/35 text-xs leading-relaxed max-w-xs">
              Ihr regionaler Meisterbetrieb für alle Dacharbeiten.
              Seit 1994 in der Region Groß-Gerau und Darmstadt-Dieburg.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base text-white/60 tracking-widest mb-5">
              KONTAKT
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+4961523905"
                className="flex items-center gap-3 font-sans text-white/50 hover:text-white text-xs transition-colors duration-200"
              >
                <Phone className="w-3.5 h-3.5 text-orange flex-shrink-0" />
                +49 6152 39905
              </a>
              <a
                href="mailto:ddmoehme.frank@gmail.com"
                className="flex items-center gap-3 font-sans text-white/50 hover:text-white text-xs transition-colors duration-200"
              >
                <Mail className="w-3.5 h-3.5 text-orange flex-shrink-0" />
                ddmoehme.frank@gmail.com
              </a>
              <div className="flex items-start gap-3 font-sans text-white/50 text-xs">
                <MapPin className="w-3.5 h-3.5 text-orange flex-shrink-0 mt-0.5" />
                <span>
                  Schützenstraße 13
                  <br />
                  64521 Groß-Gerau
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-base text-white/60 tracking-widest mb-5">
              LEISTUNGEN
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                "Satteldach",
                "Flachdach",
                "Klempnerarbeiten",
                "Fassadenverkleidung",
                "Reparaturen",
                "Dachcheck",
              ].map((item) => (
                <a
                  key={item}
                  href="#leistungen"
                  className="font-sans text-white/40 hover:text-white/80 text-xs transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-sans text-white/25 text-xs">
            © 2024 Dachdeckermeister Frank Oehme GmbH. Alle Rechte vorbehalten.
          </span>
          <div className="flex items-center gap-5">
            <a href="#" className="font-sans text-white/25 hover:text-white/60 text-xs transition-colors duration-200">
              Impressum
            </a>
            <span className="text-white/15">·</span>
            <a href="#" className="font-sans text-white/25 hover:text-white/60 text-xs transition-colors duration-200">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
