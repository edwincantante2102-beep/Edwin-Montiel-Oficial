import React, { useState } from 'react';
import { ARTIST_INFO } from '../data/artistData';
import { BookingFormData } from '../types';

export const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    city: '',
    eventType: 'Concierto público',
    date: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const eventTypes = [
    'Concierto público',
    'Privado / Fiesta VIP',
    'Fiestas patronales / Municipal',
    'Discoteca / Club',
    'Festival Departamental',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct professional WhatsApp message with promoter details
    const textLines = [
      `🌟 *SOLICITUD DE CONTRATACIÓN - EDWIN MONTIEL* 🌟`,
      ``,
      `👤 *Nombre / Empresa:* ${formData.name || 'No especificado'}`,
      `📞 *Teléfono de Contacto:* ${formData.phone || 'No especificado'}`,
      `📍 *Ciudad del Evento:* ${formData.city || 'No especificada'}`,
      `🎪 *Tipo de Evento:* ${formData.eventType}`,
      `📅 *Fecha Tentativa:* ${formData.date || 'Por definir'}`,
      formData.notes ? `📝 *Observaciones / Aforo:* ${formData.notes}` : '',
      ``,
      `_Enviado desde el formulario oficial EPK de Edwin Montiel - ¡Sírvalo, Sírvalo!_`,
    ].filter(Boolean);

    const fullMessage = textLines.join('\n');
    const whatsappUrl = `https://wa.me/${ARTIST_INFO.countryCode}${ARTIST_INFO.phoneRaw}?text=${encodeURIComponent(fullMessage)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setSubmitted(false);
    }, 600);
  };

  return (
    <section id="contacto" className="py-20 bg-[#0D0D0D] relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#E11D48]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1 rounded-full bg-neutral-900 border border-[#D4AF37]/30 mb-3">
            <i className="fa-solid fa-file-signature text-[#D4AF37]"></i>
            <span>Booking & Management Oficial</span>
          </div>
          <h2 className="font-['Cinzel',serif] text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Contrataciones para Eventos
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Lleva la energía y el sentimiento de Edwin Montiel a tu feria, concierto masivo o celebración privada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Management Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main WhatsApp Card Highlight */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-black border-2 border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3 text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <span>Línea Directa 24/7 de Contrataciones</span>
              </div>

              <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-white mb-2">
                Hablemos por WhatsApp
              </h3>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                Atención preferencial a alcaldías, secretarías de cultura, empresarios de espectáculos y organizadores privados.
              </p>

              {/* Direct Phone Banner */}
              <div className="p-4 rounded-2xl bg-black/80 border border-[#D4AF37]/50 flex items-center justify-between gap-3 mb-6 shadow-inner">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center text-[#25D366] text-2xl shrink-0">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block">
                      WhatsApp & Llamadas
                    </span>
                    <a
                      href={ARTIST_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-lg sm:text-xl font-black text-white hover:text-[#D4AF37] transition-colors"
                    >
                      {ARTIST_INFO.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={ARTIST_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-md flex items-center gap-1 shrink-0"
                >
                  <span>Chatear</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </div>

              {/* Management Guarantee Items */}
              <div className="space-y-3 pt-4 border-t border-neutral-800 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-circle-check text-[#D4AF37] mt-0.5"></i>
                  <span>Contratos legales con facturación electrónica y pólizas de cumplimiento.</span>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-circle-check text-[#D4AF37] mt-0.5"></i>
                  <span>Staff completo: Músicos, sonidistas, iluminadores y personal de producción.</span>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-circle-check text-[#D4AF37] mt-0.5"></i>
                  <span>Disponibilidad para gira nacional e internacional.</span>
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-850 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#D4AF37]">
                Canales Digitales Oficiales
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={ARTIST_INFO.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-900 hover:bg-[#1DB954]/10 hover:border-[#1DB954]/40 border border-neutral-800 transition-colors flex items-center gap-2 text-neutral-300"
                >
                  <i className="fa-brands fa-spotify text-[#1DB954]"></i>
                  <span>Spotify Oficial</span>
                </a>
                <a
                  href={ARTIST_INFO.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-900 hover:bg-[#FF0000]/10 hover:border-[#FF0000]/40 border border-neutral-800 transition-colors flex items-center gap-2 text-neutral-300"
                >
                  <i className="fa-brands fa-youtube text-[#FF0000]"></i>
                  <span>YouTube Oficial</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Promoter Form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-950 rounded-3xl border border-neutral-800 p-6 sm:p-10 shadow-2xl relative">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Cotización Rápida
                </span>
                <h3 className="font-['Cinzel',serif] text-2xl font-bold text-white mt-1">
                  Formulario de Reserva para Empresarios
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Diligencia los datos del evento y nuestro sistema generará un mensaje estructurado directo al WhatsApp del artista.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                    >
                      Nombre o Empresa Promotora *
                    </label>
                    <input
                      type="text"
                      id="booking-name"
                      required
                      placeholder="Ej. Alcaldía / Juan Pérez Producciones"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] focus:outline-none text-white text-sm placeholder-neutral-500 transition-colors"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                    >
                      Teléfono / WhatsApp de Contacto *
                    </label>
                    <input
                      type="tel"
                      id="booking-phone"
                      required
                      placeholder="Ej. +57 300 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] focus:outline-none text-white text-sm placeholder-neutral-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Ciudad */}
                  <div>
                    <label
                      htmlFor="booking-city"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                    >
                      Ciudad o Municipio del Evento *
                    </label>
                    <input
                      type="text"
                      id="booking-city"
                      required
                      placeholder="Ej. Medellín, Manizales, Villavicencio..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] focus:outline-none text-white text-sm placeholder-neutral-500 transition-colors"
                    />
                  </div>

                  {/* Fecha Tentativa */}
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                    >
                      Fecha Tentativa del Evento *
                    </label>
                    <input
                      type="date"
                      id="booking-date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Tipo de Evento */}
                <div>
                  <label
                    htmlFor="booking-event-type"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                  >
                    Tipo de Evento *
                  </label>
                  <select
                    id="booking-event-type"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] focus:outline-none text-white text-sm transition-colors"
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type} className="bg-neutral-900 text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Notas / Aforo */}
                <div>
                  <label
                    htmlFor="booking-notes"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                  >
                    Detalles Adicionales / Aforo Estimado (Opcional)
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={3}
                    placeholder="Describe el aforo esperado, lugar específico, requerimientos o presupuesto preliminar..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-[#D4AF37] focus:outline-none text-white text-sm placeholder-neutral-500 transition-colors"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="booking-submit-btn"
                    disabled={submitted}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#F9E79F] via-[#D4AF37] to-[#B78727] text-black font-extrabold text-sm uppercase tracking-wider hover:brightness-110 shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75"
                  >
                    <i className="fa-brands fa-whatsapp text-xl text-black"></i>
                    <span>
                      {submitted
                        ? 'Generando mensaje de WhatsApp...'
                        : 'Enviar Solicitud a WhatsApp (+57 311 255 3001)'}
                    </span>
                  </button>
                  <p className="text-center text-[11px] text-neutral-500 mt-2">
                    Al presionar enviar, serás redirigido de inmediato a la aplicación de WhatsApp con el mensaje preformateado.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
