import React, { useState, useEffect } from 'react';
import { ARTIST_INFO } from '../data/artistData';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Lanzamiento', href: '#lanzamiento' },
    { name: 'Éxitos', href: '#exitos' },
    { name: 'Tour', href: '#tour' },
    { name: 'Prensa & EPK', href: '#prensa' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Slogan */}
        <a
          href="#inicio"
          id="brand-logo"
          className="group flex flex-col focus:outline-none"
        >
          <span className="font-['Cinzel',serif] text-xl sm:text-2xl font-extrabold tracking-wider text-[#D4AF37] group-hover:text-yellow-300 transition-colors drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
            EDWIN MONTIEL
          </span>
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-neutral-400 uppercase group-hover:text-[#D4AF37] transition-colors flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-ping" />
            ¡Sírvalo, Sírvalo!
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
              className="text-xs tracking-wider uppercase font-medium text-neutral-300 hover:text-[#D4AF37] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button: Contrataciones */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={ARTIST_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-btn-contrataciones"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F9E79F] via-[#D4AF37] to-[#B78727] hover:brightness-110 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.35)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <i className="fa-brands fa-whatsapp text-sm text-black"></i>
            <span>Contrataciones</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle"
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir menú de navegación"
          className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
        >
          {mobileMenuOpen ? (
            <i className="fa-solid fa-xmark text-2xl text-[#D4AF37]"></i>
          ) : (
            <i className="fa-solid fa-bars text-xl"></i>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-[#D4AF37]/30 px-6 py-6 shadow-2xl transition-all animate-fadeIn"
        >
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-neutral-800 flex items-center justify-between">
              <span className="text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
                Menú Oficial
              </span>
              <span className="text-[11px] text-neutral-400">
                Edwin Montiel EPK Pro
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-semibold tracking-wider uppercase text-neutral-200 hover:text-[#D4AF37] py-1 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <i className="fa-solid fa-chevron-right text-[10px] text-neutral-600"></i>
              </a>
            ))}

            <div className="pt-4 border-t border-neutral-800/80 flex flex-col gap-3">
              <a
                href={ARTIST_INFO.whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                id="mobile-btn-whatsapp"
                className="w-full py-3 px-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold text-center text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center justify-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-base"></i>
                <span>Contrataciones Directas (+57 311 255 3001)</span>
              </a>

              <div className="flex justify-center items-center gap-6 pt-2 text-neutral-400">
                <a
                  href={ARTIST_INFO.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1DB954] transition-colors text-lg"
                  aria-label="Spotify"
                >
                  <i className="fa-brands fa-spotify"></i>
                </a>
                <a
                  href={ARTIST_INFO.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF0000] transition-colors text-lg"
                  aria-label="YouTube"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a
                  href={ARTIST_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors text-lg"
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
