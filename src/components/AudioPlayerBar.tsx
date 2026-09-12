import React, { useEffect, useState, useRef } from 'react';
import { Song } from '../types';

interface AudioPlayerBarProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onTogglePlay: (song: Song) => void;
  onClose: () => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  currentSong,
  isPlaying,
  onTogglePlay,
  onClose,
}) => {
  const [progress, setProgress] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Synthesize a pleasant warm acoustic guitar / cantina melody tone on web audio when playing
  useEffect(() => {
    if (!currentSong) return;

    if (isPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          audioContextRef.current = ctx;

          // Create an acoustic guitar-like warm sequence
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'triangle';
          // Note frequency based on song
          const baseFreq = currentSong.id === 'el-ultimo-en-saber' ? 220 : currentSong.id === 'cabron-yo-puedo' ? 261.63 : 196;
          osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);

          // Subtle vibrato
          gain.gain.setValueAtTime(0.08, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 3.5);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();

          oscillatorRef.current = osc;
          gainNodeRef.current = gain;
        }
      } catch (e) {
        console.log('AudioContext initialized');
      }
    } else {
      if (oscillatorRef.current) {
        try {
          oscillatorRef.current.stop();
        } catch (e) {}
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        try {
          audioContextRef.current.close();
        } catch (e) {}
      }
    }

    return () => {
      if (oscillatorRef.current) {
        try {
          oscillatorRef.current.stop();
        } catch (e) {}
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        try {
          audioContextRef.current.close();
        } catch (e) {}
      }
    };
  }, [isPlaying, currentSong]);

  // Progress timer simulation
  useEffect(() => {
    let interval: any;
    if (isPlaying && currentSong) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 1.5;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSong]);

  if (!currentSong) return null;

  return (
    <div
      id="bottom-audio-player"
      className="fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-xl border-t border-[#D4AF37]/40 shadow-2xl py-3 px-4 sm:px-8 transition-transform animate-fadeIn"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Track info */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <img
            src={currentSong.coverImage}
            alt={currentSong.title}
            className="w-12 h-12 rounded-lg object-cover border border-[#D4AF37]/40"
          />
          <div className="text-left overflow-hidden">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white truncate font-['Cinzel',serif]">
                {currentSong.title}
              </span>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold uppercase bg-[#E11D48] text-white">
                Preview
              </span>
            </div>
            <div className="text-[11px] text-neutral-400 truncate">
              Edwin Montiel • {currentSong.album}
            </div>
          </div>
        </div>

        {/* Play controls and progress */}
        <div className="flex flex-col items-center gap-1.5 w-full sm:max-w-md">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => onTogglePlay(currentSong)}
              className="w-9 h-9 rounded-full bg-[#D4AF37] text-black hover:brightness-110 flex items-center justify-center text-sm shadow-md transition-all"
              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? (
                <i className="fa-solid fa-pause"></i>
              ) : (
                <i className="fa-solid fa-play ml-0.5"></i>
              )}
            </button>
            <div className="text-[10px] text-neutral-400 font-mono">
              0:{Math.floor((progress / 100) * 30).toString().padStart(2, '0')} / 0:30 (Muestra)
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#D4AF37] to-[#E11D48] h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Actions: Spotify full track link & Close */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={currentSong.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1DB954] hover:brightness-110 text-black text-xs font-bold uppercase tracking-wider transition-all"
          >
            <i className="fa-brands fa-spotify"></i>
            <span>Escuchar Completa</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 text-sm"
            aria-label="Cerrar reproductor"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
