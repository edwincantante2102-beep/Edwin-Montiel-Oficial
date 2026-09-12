import React from 'react';
import { ARTIST_INFO } from '../data/artistData';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-black border-t border-[#D4AF37]/25 text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Slogan */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <span className="font-['Cinzel',serif] text-2xl font-black tracking-wider text-[#D4AF37] block">
                EDWIN MONTIEL
              </span>
              <span className="text-xs font-bold text-[#E11D48] tracking-widest uppercase">
                "{ARTIST_INFO.slogan}"
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-md leading-relaxed">
              Sitio web oficial y Kit de Prensa Digital (EPK Pro). La potencia vocal y el sentimiento auténtico de la música popular y el despecho colombiano. Disponible para ferias, palenques y grandes escenarios.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* Spotify */}
              <a
                href={ARTIST_INFO.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Spotify Oficial"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#1DB954] text-neutral-300 hover:text-[#1DB954] flex items-center justify-center text-lg transition-all"
              >
                <i className="fa-brands fa-spotify"></i>
              </a>

              {/* YouTube */}
              <a
                href={ARTIST_INFO.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube Canal Oficial"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#FF0000] text-neutral-300 hover:text-[#FF0000] flex items-center justify-center text-lg transition-all"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>

              {/* WhatsApp */}
              <a
                href={ARTIST_INFO.whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Directo"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#25D366] text-neutral-300 hover:text-[#25D366] flex items-center justify-center text-lg transition-all"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>

              {/* Apple Music */}
              <a
                href={ARTIST_INFO.appleMusicUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Apple Music"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#FC3C44] text-neutral-300 hover:text-[#FC3C44] flex items-center justify-center text-lg transition-all"
              >
                <i className="fa-brands fa-apple"></i>
              </a>

              {/* Deezer */}
              <a
                href={ARTIST_INFO.deezerUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Deezer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#EF5466] text-neutral-300 hover:text-[#EF5466] flex items-center justify-center text-lg transition-all"
              >
                <i className="fa-brands fa-deezer"></i>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#D4AF37]">
              Secciones
            </h4>
            <ul className="text-xs space-y-2">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#lanzamiento" className="hover:text-white transition-colors">
                  Lanzamiento Oficial
                </a>
              </li>
              <li>
                <a href="#exitos" className="hover:text-white transition-colors">
                  Éxitos & Canciones
                </a>
              </li>
              <li>
                <a href="#tour" className="hover:text-white transition-colors">
                  Gira & Fechas
                </a>
              </li>
              <li>
                <a href="#prensa" className="hover:text-white transition-colors">
                  Prensa & Rider Técnico
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contrataciones
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Booking Column */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#D4AF37]">
              Contacto de Booking
            </h4>
            <div className="text-xs space-y-2 text-neutral-300">
              <p className="flex items-center gap-2">
                <i className="fa-brands fa-whatsapp text-emerald-400"></i>
                <a
                  href={ARTIST_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono hover:text-[#D4AF37] transition-colors"
                >
                  +57 311 255 3001
                </a>
              </p>
              <p className="flex items-center gap-2 text-neutral-400">
                <i className="fa-solid fa-envelope text-neutral-500"></i>
                <span>{ARTIST_INFO.email}</span>
              </p>
              <p className="flex items-center gap-2 text-neutral-400">
                <i className="fa-solid fa-map-pin text-neutral-500"></i>
                <span>{ARTIST_INFO.city}</span>
              </p>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] uppercase font-bold text-[#D4AF37]">
                  🇨🇴 Orgullo Colombiano
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>
            © {new Date().getFullYear()} Edwin Montiel. Todos los derechos reservados. Música Popular & Regional Colombiana.
          </p>
          <p className="flex items-center gap-2">
            <span>¡Sírvalo, Sírvalo!</span>
            <span>•</span>
            <a href="#inicio" className="text-[#D4AF37] hover:underline">
              Volver Arriba ↑
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
