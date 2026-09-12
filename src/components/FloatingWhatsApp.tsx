import React, { useState } from 'react';
import { ARTIST_INFO } from '../data/artistData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
    >
      {/* Tooltip bubble on desktop/tablet */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-xl bg-neutral-950/95 backdrop-blur-md border border-[#25D366]/60 text-white text-xs shadow-2xl animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span className="font-semibold">
            ¿Contrataciones? <span className="text-[#D4AF37]">¡Chatea aquí!</span>
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-neutral-400 hover:text-white ml-1 text-xs"
            aria-label="Cerrar sugerencia"
          >
            ×
          </button>
        </div>
      )}

      {/* Pulsing Outer Rings & Main Button */}
      <a
        href={ARTIST_INFO.whatsappBookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Contactar por WhatsApp para contrataciones de Edwin Montiel"
        className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.85)] transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
      >
        {/* Animated Radial Pulse Rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />
        <span className="absolute -inset-1 rounded-full border-2 border-[#25D366]/60 animate-pulse pointer-events-none" />

        {/* WhatsApp Icon */}
        <i className="fa-brands fa-whatsapp text-3xl sm:text-4xl text-white drop-shadow-md relative z-10 transition-transform group-hover:rotate-6"></i>

        {/* Small notification badge */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E11D48] border-2 border-black rounded-full flex items-center justify-center text-[9px] font-extrabold text-white">
          1
        </span>
      </a>
    </div>
  );
};
