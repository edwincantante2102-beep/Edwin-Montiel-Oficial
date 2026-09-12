import React, { useState } from 'react';
import { SONGS_DATA, ARTIST_INFO } from '../data/artistData';
import { Song } from '../types';

interface DiscographyProps {
  currentPlayingSong: Song | null;
  isPlaying: boolean;
  onTogglePlay: (song: Song) => void;
}

export const Discography: React.FC<DiscographyProps> = ({
  currentPlayingSong,
  isPlaying,
  onTogglePlay,
}) => {
  const [selectedSongModal, setSelectedSongModal] = useState<Song | null>(null);

  return (
    <section id="exitos" className="py-20 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1 rounded-full bg-neutral-900 border border-[#D4AF37]/30 mb-3">
            <i className="fa-solid fa-compact-disc text-[#D4AF37]"></i>
            <span>Repertorio & Éxitos Propios</span>
          </div>
          <h2 className="font-['Cinzel',serif] text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Canciones Destacadas
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Las obras autorales e interpretaciones que marcan la trayectoria de Edwin Montiel y prenden las cantinas de Colombia.
          </p>
        </div>

        {/* Songs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SONGS_DATA.map((song, index) => {
            const isThisPlaying = currentPlayingSong?.id === song.id && isPlaying;

            return (
              <div
                key={song.id}
                id={`song-card-${song.id}`}
                className="group relative bg-neutral-950 rounded-2xl border border-neutral-800 hover:border-[#D4AF37]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              >
                {/* Image Cover */}
                <div className="relative aspect-square overflow-hidden bg-neutral-900">
                  <img
                    src={song.coverImage}
                    alt={song.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/70 text-[#D4AF37] border border-[#D4AF37]/40 backdrop-blur-sm">
                      {song.year}
                    </span>
                    {song.isHit && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#E11D48] text-white backdrop-blur-sm">
                        Éxito
                      </span>
                    )}
                  </div>

                  {/* Simulated Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => onTogglePlay(song)}
                      id={`play-btn-${song.id}`}
                      aria-label={isThisPlaying ? `Pausar ${song.title}` : `Reproducir muestra de ${song.title}`}
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl ${
                        isThisPlaying
                          ? 'bg-[#E11D48] text-white ring-4 ring-[#E11D48]/40 animate-pulse scale-105'
                          : 'bg-[#D4AF37] text-black hover:bg-white'
                      }`}
                    >
                      {isThisPlaying ? (
                        <i className="fa-solid fa-pause text-xl"></i>
                      ) : (
                        <i className="fa-solid fa-play text-xl ml-1"></i>
                      )}
                    </button>
                  </div>

                  {/* Audio Waveform Simulation when active */}
                  {isThisPlaying && (
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-1 bg-black/80 py-1 px-3 rounded-full border border-[#D4AF37]/40">
                      <span className="w-1 h-3 bg-[#E11D48] animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1 h-5 bg-[#D4AF37] animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1 h-4 bg-[#E11D48] animate-bounce" style={{ animationDelay: '300ms' }} />
                      <span className="w-1 h-6 bg-[#D4AF37] animate-bounce" style={{ animationDelay: '75ms' }} />
                      <span className="w-1 h-2 bg-[#E11D48] animate-bounce" style={{ animationDelay: '200ms' }} />
                      <span className="text-[10px] uppercase font-bold text-[#D4AF37] ml-2">
                        Reproduciendo Preview
                      </span>
                    </div>
                  )}
                </div>

                {/* Song Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 font-medium mb-1">
                      <span>{song.genre}</span>
                      <span>{song.duration}</span>
                    </div>

                    <h3 className="font-['Cinzel',serif] text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                      {song.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                      {song.description}
                    </p>

                    <blockquote className="mt-2 text-[11px] italic text-[#F9E79F]/80 border-l-2 border-[#D4AF37]/50 pl-2">
                      {song.lyricsExcerpt}
                    </blockquote>
                  </div>

                  {/* Streaming Platforms Links */}
                  <div className="pt-4 mt-4 border-t border-neutral-850">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">
                        Escuchar en:
                      </span>
                      <div className="flex items-center gap-3">
                        <a
                          href={song.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Escuchar en Spotify"
                          className="text-neutral-400 hover:text-[#1DB954] transition-colors text-base"
                        >
                          <i className="fa-brands fa-spotify"></i>
                        </a>
                        <a
                          href={song.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Ver en YouTube"
                          className="text-neutral-400 hover:text-[#FF0000] transition-colors text-base"
                        >
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a
                          href={song.appleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Apple Music"
                          className="text-neutral-400 hover:text-[#FC3C44] transition-colors text-base"
                        >
                          <i className="fa-brands fa-apple"></i>
                        </a>
                        <a
                          href={song.deezerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Deezer"
                          className="text-neutral-400 hover:text-[#EF5466] transition-colors text-base"
                        >
                          <i className="fa-brands fa-deezer"></i>
                        </a>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedSongModal(song)}
                      className="mt-3 w-full py-1.5 px-2 text-[11px] font-semibold text-neutral-300 hover:text-[#D4AF37] hover:bg-neutral-900 rounded border border-neutral-800 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <i className="fa-solid fa-circle-info text-[10px]"></i>
                      <span>Ver Ficha & Letra Completa</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Spotify Artist Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-black border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#1DB954]/20 border border-[#1DB954] flex items-center justify-center text-[#1DB954] text-2xl">
              <i className="fa-brands fa-spotify"></i>
            </div>
            <div>
              <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white">
                Sigue el perfil oficial de Edwin Montiel en Spotify
              </h4>
              <p className="text-xs text-neutral-400">
                Únete a miles de oyentes mensuales y agrega sus canciones a tus playlists favoritas de cantina.
              </p>
            </div>
          </div>
          <a
            href={ARTIST_INFO.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1DB954] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-[0_0_20px_rgba(29,185,84,0.3)] transition-all whitespace-nowrap"
          >
            <i className="fa-brands fa-spotify text-base"></i>
            <span>Abrir en Spotify</span>
          </a>
        </div>
      </div>

      {/* Song Details Modal */}
      {selectedSongModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setSelectedSongModal(null)}
        >
          <div
            className="bg-[#121212] border border-[#D4AF37]/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 text-neutral-200 relative shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedSongModal(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1"
              aria-label="Cerrar modal"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>

            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedSongModal.coverImage}
                alt={selectedSongModal.title}
                className="w-20 h-20 rounded-xl object-cover border border-[#D4AF37]/30"
              />
              <div>
                <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                  {selectedSongModal.album} ({selectedSongModal.year})
                </span>
                <h3 className="font-['Cinzel',serif] text-xl font-bold text-white">
                  {selectedSongModal.title}
                </h3>
                <span className="text-xs text-neutral-400">{selectedSongModal.genre} • {selectedSongModal.duration}</span>
              </div>
            </div>

            <div className="space-y-4 my-4">
              <div>
                <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                  Reseña de la Obra
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {selectedSongModal.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                  Estrofa Emblema
                </h4>
                <div className="p-3 bg-neutral-900 rounded-lg border-l-4 border-[#E11D48] text-xs text-neutral-200 italic">
                  {selectedSongModal.lyricsExcerpt}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  onTogglePlay(selectedSongModal);
                }}
                className="flex-1 py-2.5 px-4 rounded-lg bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider hover:brightness-110 flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-play"></i>
                <span>Probar Reproductor</span>
              </button>
              <a
                href={selectedSongModal.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-lg bg-[#1DB954] text-black text-xs font-bold uppercase tracking-wider hover:brightness-110 flex items-center justify-center gap-2"
              >
                <i className="fa-brands fa-spotify"></i>
                <span>Spotify</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
