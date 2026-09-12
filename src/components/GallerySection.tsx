import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/artistData';
import { GalleryPhoto } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [activeFilter, setActiveFilter] = useState<'todos' | 'conciertos' | 'estudio' | 'prensa'>('todos');

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (activeFilter === 'todos') return true;
    return photo.category === activeFilter;
  });

  return (
    <section id="galeria" className="py-20 bg-[#0A0A0A] relative overflow-hidden border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1 rounded-full bg-neutral-900 border border-[#D4AF37]/30 mb-3">
            <i className="fa-solid fa-camera-retro text-[#D4AF37]"></i>
            <span>Registro Visual Oficial</span>
          </div>
          <h2 className="font-['Cinzel',serif] text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Galería HD & Momentos de Show
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Capturas de conciertos multitudinarios, rodajes cinematográficos y la pasión de la cantina en cada rincón del país.
          </p>

          {/* Filter Pills */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap">
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'conciertos', label: 'Shows en Vivo' },
              { id: 'estudio', label: 'Rodajes & Estudio' },
              { id: 'prensa', label: 'Sesiones de Prensa' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#D4AF37] text-black shadow-md'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              id={`photo-${photo.id}`}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-950 border border-neutral-800 hover:border-[#D4AF37]/60 cursor-pointer shadow-xl transition-all duration-300"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-9 h-9 rounded-full bg-black/70 backdrop-blur-sm border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <i className="fa-solid fa-magnifying-glass-plus text-sm"></i>
              </div>

              {/* Title & Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                  {photo.category.toUpperCase()}
                </span>
                <h3 className="font-['Cinzel',serif] text-base font-bold text-white group-hover:text-[#F9E79F] transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 sm:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#111] border border-[#D4AF37]/50 rounded-2xl overflow-hidden shadow-2xl relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 border border-[#D4AF37]/50 text-white hover:text-[#D4AF37] flex items-center justify-center transition-colors"
              aria-label="Cerrar vista previa"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>

            <div className="relative aspect-[16/10] bg-black">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-['Cinzel',serif] text-xl font-bold text-white mt-0.5">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {selectedPhoto.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedPhoto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-bold text-neutral-200 uppercase tracking-wider flex items-center gap-2"
                >
                  <i className="fa-solid fa-arrow-down"></i>
                  <span>Ver Original</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
