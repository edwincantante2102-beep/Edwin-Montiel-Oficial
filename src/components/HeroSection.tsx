import React from 'react';
import { ARTIST_INFO } from '../data/artistData';

interface HeroSectionProps {
  onScrollToEpk: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToEpk }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0D0D0D]"
    >
      {/* Background Graphic Layers */}
      <div className="absolute inset-0 z-0">
        {/* Atmospheric Dark Image with Contrast Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('${ARTIST_INFO.heroImage}')`,
          }}
        />
        {/* Dark Vignettes & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/90 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-black" />

        {/* Ambient Warm Golden & Ruby Light Flares */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E11D48]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Top Eyebrow Tag / Official Badge */}
            <div
              id="hero-official-badge"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] mb-5 text-xs uppercase tracking-widest text-[#D4AF37]"
            >
              <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
              <span>EPK Pro & Web Oficial Colombia</span>
            </div>

            {/* Big Impact Main Title */}
            <h1
              id="hero-title"
              className="font-['Cinzel',serif] text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
            >
              <span className="block bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                EDWIN
              </span>
              <span className="block bg-gradient-to-r from-[#F9E79F] via-[#D4AF37] to-[#B78727] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                MONTIEL
              </span>
            </h1>

            {/* Slogan & Subtitle */}
            <div className="mt-4 space-y-2">
              <p
                id="hero-slogan"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#E11D48] italic tracking-wide drop-shadow-[0_2px_12px_rgba(225,29,72,0.4)]"
              >
                "{ARTIST_INFO.slogan}"
              </p>
              <p
                id="hero-subtitle"
                className="text-base sm:text-xl text-neutral-300 font-light tracking-wide"
              >
                {ARTIST_INFO.subtitle}
              </p>
            </div>

            {/* Short Bio Teaser */}
            <p className="mt-5 text-sm sm:text-base text-neutral-400 max-w-xl font-normal leading-relaxed">
              De maestro de construcción en las tierras del Tolima a referente del género popular y norteño. Con 14 músicos en tarima, requinto y metales para cantar y desahogar el alma.
            </p>

            {/* Call to Actions (CTAs) */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA: Reservar Fecha WhatsApp */}
              <a
                href={ARTIST_INFO.whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-btn-reservar-fecha"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F9E79F] via-[#D4AF37] to-[#B78727] hover:brightness-110 rounded-full shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <i className="fa-brands fa-whatsapp text-xl text-black"></i>
                <span>Reservar Fecha (WhatsApp)</span>
              </a>

              {/* Secondary CTA: Ver EPK de Prensa */}
              <a
                href="#prensa"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollToEpk();
                }}
                id="hero-btn-ver-epk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-semibold uppercase tracking-wider text-neutral-100 bg-neutral-900/90 hover:bg-neutral-800 border border-[#D4AF37]/50 hover:border-[#D4AF37] rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <i className="fa-solid fa-file-pdf text-[#D4AF37]"></i>
                <span>Ver EPK de Prensa</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Featured Artist Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Golden Glow & Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#D4AF37]/60 via-[#E11D48]/30 to-[#F9E79F]/40 rounded-3xl blur-md opacity-80 animate-pulse" />

              <div className="relative rounded-3xl overflow-hidden bg-neutral-950 border border-[#D4AF37]/40 shadow-2xl">
                {/* Photo of Edwin Montiel in Sombrero & Countryside */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={ARTIST_INFO.heroImage}
                    alt="Edwin Montiel con sombrero en el campo tolimense"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 text-[11px] font-bold text-[#D4AF37] flex items-center gap-1.5 shadow-lg">
                    <i className="fa-solid fa-certificate text-[#D4AF37]"></i>
                    <span>Artista Original</span>
                  </div>

                  {/* Bottom Card Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <p className="text-xs uppercase tracking-widest font-bold text-[#D4AF37]">
                      Tolima Para el Mundo
                    </p>
                    <h3 className="font-['Cinzel',serif] text-xl font-black text-white">
                      Edwin Montiel
                    </h3>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      Vereda Corazón de Peralonso • La Voz del Despecho
                    </p>
                  </div>
                </div>

                {/* Card Footer Stat */}
                <div className="p-3.5 bg-neutral-900/90 border-t border-neutral-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <i className="fa-solid fa-users text-[#D4AF37]"></i>
                    <span>Comunidad: <strong>Los Montielistas</strong></span>
                  </div>
                  <span className="text-[#E11D48] font-bold tracking-wider uppercase text-[11px]">
                    ¡Sírvalo, Sírvalo!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Credential Badges */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl mx-auto pt-8 border-t border-neutral-800/80">
          <div className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 text-center">
            <div className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#D4AF37]">
              +14 Músicos
            </div>
            <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium mt-0.5">
              Show En Vivo Full Banda
            </div>
          </div>
          <div className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 text-center">
            <div className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#D4AF37]">
              100% Popular
            </div>
            <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium mt-0.5">
              Despecho & Cantina
            </div>
          </div>
          <div className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 text-center">
            <div className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#D4AF37]">
              Gira 2025/26
            </div>
            <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium mt-0.5">
              Ferias & Palenques
            </div>
          </div>
          <div className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 text-center">
            <div className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#D4AF37]">
              311 255 3001
            </div>
            <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium mt-0.5">
              Línea Directa Booking
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
