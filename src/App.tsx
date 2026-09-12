import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedRelease } from './components/FeaturedRelease';
import { Discography } from './components/Discography';
import { TourSection } from './components/TourSection';
import { EpkSection } from './components/EpkSection';
import { GallerySection } from './components/GallerySection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { Song } from './types';

export default function App() {
  const [currentPlayingSong, setCurrentPlayingSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = (song: Song) => {
    if (currentPlayingSong?.id === song.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentPlayingSong(song);
      setIsPlaying(true);
    }
  };

  const handleCloseAudio = () => {
    setIsPlaying(false);
    setCurrentPlayingSong(null);
  };

  const handleScrollToEpk = () => {
    const el = document.getElementById('prensa');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col selection:bg-[#D4AF37] selection:text-black">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onScrollToEpk={handleScrollToEpk} />

        {/* 2. Lanzamiento Destacado ("El Último En Saber" with embedded video & platform buttons) */}
        <FeaturedRelease />

        {/* 3. Discografía / Canciones Populares con reproducción simulada */}
        <Discography
          currentPlayingSong={currentPlayingSong}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
        />

        {/* 4. Tour & Próximas Fechas */}
        <TourSection />

        {/* 5. Zona de Prensa & Descargas (EPK para Empresarios & Alcaldías) */}
        <EpkSection />

        {/* 6. Galería HD */}
        <GallerySection />

        {/* 7. Formulario de Contrataciones & Management (Redirige a WhatsApp al 311 255 3001) */}
        <BookingSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button (visible across all screens) */}
      <FloatingWhatsApp />

      {/* Interactive Sticky Audio Bar when preview is active */}
      {currentPlayingSong && (
        <AudioPlayerBar
          currentSong={currentPlayingSong}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
          onClose={handleCloseAudio}
        />
      )}
    </div>
  );
}
