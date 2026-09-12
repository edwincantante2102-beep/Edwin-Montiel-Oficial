import React, { useState } from 'react';
import { TOUR_DATES, ARTIST_INFO } from '../data/artistData';
import { TourDate } from '../types';

export const TourSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'available' | 'sold_out' | 'private'>('all');

  const filteredDates = TOUR_DATES.filter((item) => {
    if (filter === 'all') return true;
    return item.status === filter;
  });

  const getStatusBadge = (status: TourDate['status'], label: string) => {
    switch (status) {
      case 'available':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            {label}
          </span>
        );
      case 'sold_out':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-950/80 text-[#E11D48] border border-rose-600/40">
            <i className="fa-solid fa-ban text-[10px]"></i>
            {label}
          </span>
        );
      case 'private':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-900 text-[#D4AF37] border border-[#D4AF37]/40">
            <i className="fa-solid fa-lock text-[10px]"></i>
            {label}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="tour" className="py-20 bg-[#090909] border-t border-b border-[#D4AF37]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1 rounded-full bg-neutral-900 border border-[#D4AF37]/30 mb-3">
              <i className="fa-solid fa-location-dot text-[#E11D48]"></i>
              <span>Gira Nacional 2025 - 2026</span>
            </div>
            <h2 className="font-['Cinzel',serif] text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Tour & Próximas Fechas
            </h2>
            <p className="mt-2 text-neutral-400 text-sm max-w-xl">
              Acompaña a Edwin Montiel en las ferias, palenques y escenarios más importantes de Colombia. ¡Sírvalo, sírvalo en vivo!
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Todas las Fechas' },
              { id: 'available', label: 'Disponibles' },
              { id: 'sold_out', label: 'Agotados' },
              { id: 'private', label: 'Privados' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                  filter === tab.id
                    ? 'bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tour List / Modern Table Cards */}
        <div className="space-y-4">
          {filteredDates.map((tour) => (
            <div
              key={tour.id}
              id={`tour-item-${tour.id}`}
              className="group bg-neutral-950/80 hover:bg-neutral-900/90 rounded-2xl border border-neutral-800 hover:border-[#D4AF37]/50 p-5 sm:p-6 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-lg"
            >
              {/* Date Box & Location Info */}
              <div className="flex items-center gap-5">
                {/* Calendar Date Badge */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-neutral-900 border border-[#D4AF37]/30 flex flex-col items-center justify-center text-center shrink-0 group-hover:border-[#D4AF37] transition-colors">
                  <span className="font-['Cinzel',serif] text-xl sm:text-2xl font-black text-[#D4AF37] leading-none">
                    {tour.dayMonth.day}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest text-neutral-300 uppercase mt-1">
                    {tour.dayMonth.month}
                  </span>
                </div>

                {/* Event & City */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[#E11D48] tracking-wider uppercase">
                      {tour.city}
                    </span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-xs text-neutral-400">{tour.department}</span>
                  </div>
                  <h3 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold text-white group-hover:text-[#F9E79F] transition-colors">
                    {tour.eventName}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-neutral-400">
                    <i className="fa-solid fa-landmark text-[#D4AF37]/70 text-[11px]"></i>
                    <span>{tour.venue}</span>
                  </div>
                </div>
              </div>

              {/* Status & CTA Action */}
              <div className="flex items-center justify-between md:justify-end gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-neutral-850">
                <div>{getStatusBadge(tour.status, tour.statusLabel)}</div>

                {tour.status === 'available' ? (
                  <a
                    href={tour.ticketUrl || ARTIST_INFO.whatsappBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F9E79F] to-[#D4AF37] hover:brightness-110 shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all whitespace-nowrap"
                  >
                    <span>Reservar Entradas</span>
                    <i className="fa-solid fa-ticket text-xs"></i>
                  </a>
                ) : tour.status === 'sold_out' ? (
                  <a
                    href={`https://wa.me/573112553001?text=Hola,%20deseo%20consultar%20lista%20de%20espera%20para%20${encodeURIComponent(tour.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-700 transition-colors whitespace-nowrap"
                  >
                    <span>Lista de Espera</span>
                    <i className="fa-brands fa-whatsapp text-emerald-400"></i>
                  </a>
                ) : (
                  <span className="text-xs text-neutral-400 italic px-3 py-2">
                    Acceso Solo Invitación
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Real Artist On-The-Road Spotlight Banner */}
        <div className="mt-8 rounded-2xl overflow-hidden bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 p-5 sm:p-6 shadow-xl flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-full md:w-48 h-48 rounded-xl overflow-hidden shrink-0 border border-[#D4AF37]/30 shadow-md">
            <img
              src={ARTIST_INFO.tourImage}
              alt="Edwin Montiel de gira con su gente"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-bold text-[#D4AF37] bg-black/80 py-0.5 rounded border border-[#D4AF37]/30">
              LMP Oficial
            </div>
          </div>
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] px-2.5 py-0.5 rounded-full bg-neutral-900 border border-[#D4AF37]/30">
              <i className="fa-solid fa-road"></i>
              <span>En Ruta Por Colombia</span>
            </div>
            <h4 className="font-['Cinzel',serif] text-xl font-bold text-white">
              De Pueblo en Pueblo Llevando el Sentimiento Popular
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-2xl">
              Portando los colores de <strong>LMP (Lo Nuevo De La Música Popular)</strong>, Edwin Montiel recorre calles, veredas y municipios estrechando la mano de sus seguidores. La humildad y el cariño de su gente son la fuerza que llena cada plaza y coliseo.
            </p>
            <div className="text-xs text-[#E11D48] font-bold flex items-center justify-center md:justify-start gap-2">
              <i className="fa-solid fa-heart"></i>
              <span>"¡Gracias a cada Montielista que nos acompaña en el camino!"</span>
            </div>
          </div>
        </div>

        {/* Notice for Mayors and Promoters */}
        <div className="mt-10 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-calendar-plus text-[#D4AF37] text-2xl"></i>
            <div>
              <h4 className="text-sm font-bold text-white">
                ¿Deseas incluir tu ciudad o feria en la gira de Edwin Montiel?
              </h4>
              <p className="text-xs text-neutral-400">
                Agenda abierta para ferias patronales, festivales departamentales y eventos privados 2025/2026.
              </p>
            </div>
          </div>
          <a
            href={ARTIST_INFO.whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-emerald-400"></i>
            <span>Consultar Disponibilidad</span>
          </a>
        </div>
      </div>
    </section>
  );
};
