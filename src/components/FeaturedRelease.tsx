import React from 'react';
import { ARTIST_INFO, SONGS_DATA } from '../data/artistData';

export const FeaturedRelease: React.FC = () => {
  const featuredSong = SONGS_DATA[0]; // "El Último En Saber"

  return (
    <section
      id="lanzamiento"
      className="relative py-20 bg-[#0A0A0A] border-t border-b border-[#D4AF37]/15 overflow-hidden"
    >
      {/* Background Subtle Accent */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#E11D48]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1 rounded-full bg-neutral-900 border border-[#D4AF37]/30 mb-3">
            <i className="fa-solid fa-fire text-[#E11D48]"></i>
            <span>Sencillo Oficial Destacado</span>
          </div>
          <h2 className="font-['Cinzel',serif] text-3xl sm:text-5xl font-bold text-white tracking-tight">
            "El Último En Saber"
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            El éxito nacional de Edwin Montiel que retumba en todas las cantinas y escenarios de Colombia.
          </p>
        </div>

        {/* Video Player & Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* YouTube Embedded Video Player */}
          <div className="lg:col-span-7">
            <div
              id="featured-video-container"
              className="relative rounded-2xl overflow-hidden bg-black border border-[#D4AF37]/30 shadow-[0_0_35px_rgba(0,0,0,0.8)] group aspect-video"
            >
              <iframe
                src={ARTIST_INFO.featuredVideoEmbed}
                title="Edwin Montiel - El Último En Saber (Video Oficial)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded text-[11px] font-semibold text-[#D4AF37] border border-[#D4AF37]/30 flex items-center gap-1.5 pointer-events-none">
                <i className="fa-brands fa-youtube text-[#FF0000]"></i>
                <span>Video Oficial HD</span>
              </div>
            </div>
            <div className="mt-2 text-right">
              <a
                href={ARTIST_INFO.featuredVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-400 hover:text-[#D4AF37] inline-flex items-center gap-1 transition-colors"
              >
                <span>Abrir directamente en YouTube</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            </div>
          </div>

          {/* Details & Official Platform Direct Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wider uppercase bg-[#E11D48]/20 text-[#E11D48] border border-[#E11D48]/40">
                  Despecho 2024
                </span>
                <span className="text-xs text-neutral-400">Duración: {featuredSong.duration} min</span>
              </div>

              <h3 className="font-['Cinzel',serif] text-2xl font-bold text-[#F9E79F]">
                La Historia Que Conmovió al País
              </h3>

              <blockquote className="p-4 rounded-xl bg-neutral-900/70 border-l-4 border-[#D4AF37] text-neutral-300 text-sm italic font-light">
                {featuredSong.lyricsExcerpt}
              </blockquote>

              <p className="text-sm text-neutral-400 leading-relaxed">
                {featuredSong.description} Producido con los más altos estándares de la industria, combinando requintos lacerantes, metales brillantes y la inconfundible estirpe vocal de Edwin Montiel.
              </p>

              {/* Studio Recording Live Snapshot Card */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-neutral-950 border border-neutral-800/90 shadow-md">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-[#D4AF37]/30">
                  <img
                    src={ARTIST_INFO.studioImage}
                    alt="Edwin Montiel grabando en cabina"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse" />
                    <span>En Cabina de Master</span>
                  </div>
                  <p className="text-xs font-semibold text-white mt-0.5">
                    Grabación con máxima pureza acústica
                  </p>
                  <p className="text-[11px] text-neutral-400">
                    Interpretación vocal en vivo con micrófono a tubo y monitoreo In-Ear
                  </p>
                </div>
              </div>
            </div>

            {/* Official Platform Direct Buttons */}
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] mb-3">
                Disponible en todas las plataformas oficiales:
              </p>

              <div className="grid grid-cols-2 gap-3">
                {/* Spotify */}
                <a
                  href={ARTIST_INFO.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="platform-btn-spotify"
                  className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/90 hover:bg-[#1DB954]/20 border border-neutral-800 hover:border-[#1DB954] transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-black/60 flex items-center justify-center text-[#1DB954] text-xl group-hover:scale-110 transition-transform">
                    <i className="fa-brands fa-spotify"></i>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white group-hover:text-[#1DB954] transition-colors">
                      Spotify
                    </div>
                    <div className="text-[10px] text-neutral-400">Escuchar Artista</div>
                  </div>
                </a>

                {/* YouTube */}
                <a
                  href={ARTIST_INFO.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="platform-btn-youtube"
                  className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/90 hover:bg-[#FF0000]/20 border border-neutral-800 hover:border-[#FF0000] transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-black/60 flex items-center justify-center text-[#FF0000] text-xl group-hover:scale-110 transition-transform">
                    <i className="fa-brands fa-youtube"></i>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white group-hover:text-[#FF0000] transition-colors">
                      YouTube
                    </div>
                    <div className="text-[10px] text-neutral-400">Canal Oficial</div>
                  </div>
                </a>

                {/* Apple Music */}
                <a
                  href={ARTIST_INFO.appleMusicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="platform-btn-apple"
                  className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/90 hover:bg-[#FC3C44]/20 border border-neutral-800 hover:border-[#FC3C44] transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-black/60 flex items-center justify-center text-[#FC3C44] text-xl group-hover:scale-110 transition-transform">
                    <i className="fa-brands fa-apple"></i>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white group-hover:text-[#FC3C44] transition-colors">
                      Apple Music
                    </div>
                    <div className="text-[10px] text-neutral-400">Reproducir EP</div>
                  </div>
                </a>

                {/* Deezer */}
                <a
                  href={ARTIST_INFO.deezerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="platform-btn-deezer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/90 hover:bg-[#EF5466]/20 border border-neutral-800 hover:border-[#EF5466] transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-black/60 flex items-center justify-center text-[#EF5466] text-xl group-hover:scale-110 transition-transform">
                    <i className="fa-brands fa-deezer"></i>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white group-hover:text-[#EF5466] transition-colors">
                      Deezer
                    </div>
                    <div className="text-[10px] text-neutral-400">Stream HIFI</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
