import React, { useState } from 'react';
import { ARTIST_INFO, PRESS_ASSETS } from '../data/artistData';
import { PressAsset } from '../types';

export const EpkSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'bio' | 'rider' | 'descargas' | 'prensa'>('bio');
  const [showQhuboModal, setShowQhuboModal] = useState<boolean>(false);

  const handleDownload = (asset: PressAsset) => {
    // Generate actual downloadable structured asset blob so the buttons function seamlessly
    let content = '';
    let mimeType = 'text/plain';

    if (asset.category === 'rider') {
      content = `=====================================================
EDWIN MONTIEL - RIDER TÉCNICO & STAGE PLAN OFICIAL 2025/2026
"¡Sírvalo, Sírvalo!" - La Voz del Despecho
Contacto Booking Directo: +57 311 255 3001
=====================================================

1. INFORMACIÓN GENERAL:
- Artista Principal: Edwin Montiel (Voz Líder)
- Músicos en Escenario: 14 Músicos profesionales
- Formato: Show Completo Banda Regional & Popular Colombiana
- Duración del Concierto: 90 a 120 minutos continuos

2. ALINEACIÓN INSTRUMENTAL EN TARIMA:
- Canal 01: Bombo / Kick (Shure Beta 52A)
- Canal 02: Caja / Snare (Shure SM57)
- Canal 03: Hi-Hat (Shure SM81)
- Canal 04: Toms / Percusión Menor (Sennheiser e604)
- Canal 05: Timbales & Campana (Shure SM57)
- Canal 06: Bajo Eléctrico (Caja Directa Activa BSS AR-133)
- Canal 07: Guitarra Electroacústica Marcante (DI BSS)
- Canal 08: Requinto Colombiano Acústico (DI Radial)
- Canal 09: Acordeón Hohner (Microfonía Condensador Shure Beta 98)
- Canal 10: Trompeta 1 (Shure Beta 57A)
- Canal 11: Trompeta 2 (Shure Beta 57A)
- Canal 12: Trombón de Varas (Sennheiser MD421)
- Canal 13: Coros Masculinos 1 (Shure SM58)
- Canal 14: Coros Masculinos 2 (Shure SM58)
- Canal 15-16: Secuencias / Teclados Estéreo
- Canal 17: Micrófono Voz Principal EDWIN MONTIEL (Sistema Inalámbrico Shure Axient Digital o UHF-R cápsula KSM9 / Beta 58A)
- Canal 18: Micrófono Backup Voz Principal (Con cable Shure Beta 58A)

3. SISTEMA DE MONITOREO (IN-EAR & RETORNOS):
- 06 Sistemas In-Ear inalámbricos estéreo (Sennheiser G4 / Shure PSM900).
- 04 Cuñas / Monitores de piso doble 12" o 15" de alta presión sonora (Meyer Sound / d&b / L-Acoustics / RCF) para refuerzo escénico frontal.
- 01 Drum Subwoofer activo para baterista.

4. SISTEMA DE FOH (SALA):
- Sistema Line Array dimensionado según aforo (mínimo 110 dB SPL continuos en FOH, libre de distorsión).
- Consola Digital FOH: DiGiCo SD9/SD12, Yamaha CL5/QL5, Allen&Heath dLive o Midas M32.

5. ILUMINACIÓN & EFECTOS:
- Luces robóticas móviles Beam / Spot.
- Bañadores LED RGBW.
- Máquina de humo / Haze profesional.
- Chispas frías (Sparkular) autorizadas para el clímax del show.

6. HOSPITALITY & CAMERINO:
- Camerino privado con espejo de cuerpo entero y aire acondicionado / calefacción según la ciudad.
- Servicio de catering: Agua mineral sin gas templada, café colombiano, fruta fresca, miel y jengibre.
- Licor de cortesía: Aguardiente Antioqueño tapa azul o Whisky 12 años para el protocolo de cantina ¡Sírvalo, Sírvalo!

CONTACTO DE PRODUCCIÓN TÉCNICA & MANAGEMENT:
Tel / WhatsApp: +57 311 255 3001
Web Oficial: https://open.spotify.com/artist/6C43pp9NwhUIlGhvDPizHT
`;
      mimeType = 'text/plain;charset=utf-8';
    } else if (asset.category === 'logos') {
      content = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 400" width="1000" height="400">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F9E79F" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#996515" />
    </linearGradient>
  </defs>
  <rect width="1000" height="400" fill="#0D0D0D"/>
  <text x="500" y="190" font-family="'Cinzel', 'Georgia', serif" font-size="76" font-weight="900" fill="url(#goldGrad)" text-anchor="middle" letter-spacing="12">EDWIN MONTIEL</text>
  <line x1="200" y1="230" x2="800" y2="230" stroke="#D4AF37" stroke-width="3" opacity="0.6"/>
  <text x="500" y="275" font-family="'Montserrat', sans-serif" font-size="28" font-weight="800" fill="#E11D48" text-anchor="middle" letter-spacing="6">¡SÍRVALO, SÍRVALO!</text>
  <text x="500" y="325" font-family="'Montserrat', sans-serif" font-size="16" font-weight="500" fill="#A3A3A3" text-anchor="middle" letter-spacing="4">LA VOZ DEL DESPECHO Y LA MÚSICA POPULAR • COLOMBIA</text>
</svg>`;
      mimeType = 'image/svg+xml;charset=utf-8';
    } else {
      content = `FOTOS DE PRENSA & AFICHES OFICIALES - EDWIN MONTIEL
Paquete de Prensa 2025/2026.
Para acceder a la carpeta Drive en alta resolución 300 DPI y afiches listos para imprenta, por favor comuníquese directamente al WhatsApp de Prensa: +57 311 255 3001.

Archivos incluidos en este kit:
1. Edwin_Montiel_Foto_Oficial_Sombrero_300DPI.jpg
2. Edwin_Montiel_Afiche_Concierto_Editable.psd
3. Edwin_Montiel_En_Vivo_Tarima_Horizontal.jpg
4. Edwin_Montiel_Banner_Valla_Publicitaria.pdf

Contacto Management: +57 311 255 3001
`;
      mimeType = 'text/plain;charset=utf-8';
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = asset.downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(asset.title);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  return (
    <section id="prensa" className="py-20 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1 rounded-full bg-neutral-900 border border-[#D4AF37]/30 mb-3">
            <i className="fa-solid fa-briefcase text-[#D4AF37]"></i>
            <span>Kit de Prensa Digital (EPK Pro)</span>
          </div>
          <h2 className="font-['Cinzel',serif] text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Prensa & Material para Empresarios
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Información técnica, biográfica y recursos de alta resolución para alcaldías, empresarios de espectáculos y medios de comunicación.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-xl bg-neutral-950 border border-neutral-800">
            <button
              type="button"
              onClick={() => setActiveTab('bio')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'bio'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-user-pen"></i>
              <span>Biografía & Trayectoria</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('prensa')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'prensa'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-newspaper"></i>
              <span>Prensa & Q'hubo</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('rider')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'rider'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-sliders"></i>
              <span>Rider Técnico & Tarima</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('descargas')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'descargas'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-download"></i>
              <span>Zona de Descargas HD</span>
            </button>
          </div>
        </div>

        {/* Feedback alert on download */}
        {downloadSuccess && (
          <div className="max-w-xl mx-auto mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-300 text-xs flex items-center gap-3 animate-fadeIn shadow-xl">
            <i className="fa-solid fa-circle-check text-lg text-emerald-400"></i>
            <div>
              <p className="font-bold">¡Descarga generada con éxito!</p>
              <p className="text-emerald-400/80">Has descargado el archivo oficial: {downloadSuccess}</p>
            </div>
          </div>
        )}

        {/* Tab 1: Biografía Oficial */}
        {activeTab === 'bio' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-950 rounded-3xl border border-neutral-800 p-6 sm:p-10 shadow-2xl animate-fadeIn">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl aspect-[3/4]">
                <img
                  src={ARTIST_INFO.portraitImage}
                  alt="Edwin Montiel Foto Oficial de Prensa"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center p-3 bg-black/75 backdrop-blur-sm rounded-xl border border-[#D4AF37]/30">
                  <div className="font-['Cinzel',serif] text-base font-bold text-[#D4AF37]">
                    Edwin Montiel
                  </div>
                  <div className="text-[11px] text-neutral-300">
                    "¡Sírvalo, Sírvalo!" • Vereda Corazón de Peralonso
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-[#D4AF37]/30 text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                <i className="fa-solid fa-microphone-lines"></i>
                <span>Perfil Artístico Acreditado</span>
              </div>

              <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-white leading-tight">
                La Autenticidad de la Cantina en su Máxima Expresión
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {ARTIST_INFO.bioShort}
              </p>

              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                {ARTIST_INFO.bioFull}
              </p>

              {/* Teaser banner to Q'hubo report */}
              <div
                onClick={() => setActiveTab('prensa')}
                className="p-3.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-900 border border-[#D4AF37]/30 hover:border-[#D4AF37] cursor-pointer transition-all flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E11D48]/20 border border-[#E11D48]/40 flex items-center justify-center text-[#E11D48] text-base shrink-0">
                    <i className="fa-solid fa-newspaper"></i>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block">
                      Artículo Destacado de Prensa
                    </span>
                    <span className="text-xs font-semibold text-white group-hover:text-[#F9E79F] transition-colors">
                      Periódico Q'hubo: "Haciendo Realidad un Sueño"
                    </span>
                  </div>
                </div>
                <span className="text-xs text-[#D4AF37] font-bold flex items-center gap-1">
                  <span>Leer</span>
                  <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                </span>
              </div>

              {/* Key EPK Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 border-t border-neutral-800">
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800">
                  <div className="text-xs text-neutral-400">Formato Escénico</div>
                  <div className="text-sm font-bold text-[#D4AF37] mt-0.5">14 Músicos Pro</div>
                </div>
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800">
                  <div className="text-xs text-neutral-400">Duración del Show</div>
                  <div className="text-sm font-bold text-[#D4AF37] mt-0.5">90 - 120 Minutos</div>
                </div>
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800 col-span-2 sm:col-span-1">
                  <div className="text-xs text-neutral-400">Fanaticada Oficial</div>
                  <div className="text-sm font-bold text-[#E11D48] mt-0.5">Los Montielistas</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={ARTIST_INFO.whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 flex items-center gap-2"
                >
                  <i className="fa-brands fa-whatsapp text-sm"></i>
                  <span>Solicitar Cotización para Evento</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Cobertura de Prensa Escrita & Diario Q'hubo */}
        {activeTab === 'prensa' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-neutral-950 rounded-3xl border border-neutral-800 p-6 sm:p-10 shadow-2xl animate-fadeIn">
            {/* Left: Newspaper Article Image with Click-to-Zoom */}
            <div className="lg:col-span-5 space-y-3">
              <div
                onClick={() => setShowQhuboModal(true)}
                className="group relative rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl bg-black cursor-zoom-in"
              >
                <img
                  src={ARTIST_INFO.pressImage}
                  alt="Artículo Periódico Q'hubo: Haciendo Realidad un Sueño Edwin Montiel"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full bg-black/80 border border-[#D4AF37] text-xs font-bold text-[#D4AF37] flex items-center gap-2 shadow-xl">
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                    <span>Clic para Ampliar Reportaje</span>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 p-2 rounded-lg bg-black/80 backdrop-blur-sm border border-neutral-800 text-[11px] text-neutral-300 flex items-center justify-between">
                  <span className="font-semibold text-white">Q'hubo Ibagué - Zona Rosa</span>
                  <span className="text-[#D4AF37]">Edición Impresa</span>
                </div>
              </div>
              <p className="text-[11px] text-neutral-500 text-center italic">
                * Haz clic sobre el recorte de prensa para visualizar el artículo completo en alta definición.
              </p>
            </div>

            {/* Right: Article Story, Quotes & Data */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-[#D4AF37]/30 text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                <i className="fa-solid fa-newspaper text-[#E11D48]"></i>
                <span>Reportaje Histórico de Prensa</span>
              </div>

              <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-white leading-tight">
                "Haciendo Realidad un Sueño: De maestro de construcción al género popular norteño"
              </h3>

              <div className="p-4 rounded-xl bg-neutral-900/80 border-l-4 border-[#D4AF37] space-y-2">
                <p className="text-xs sm:text-sm text-neutral-200 italic font-light leading-relaxed">
                  "El tolimense Edwin Montiel deja a un lado la pala, brochas, palustre y demás herramientas de construcción para coger el micrófono y cantarle a su público. Acompañado de su talento y una voz recia, sigue haciendo sonar sus temas en las emisoras de la región y el país."
                </p>
                <div className="text-[11px] font-bold text-[#D4AF37]">
                  — Diario Q'hubo, Sección Zona Rosa
                </div>
              </div>

              {/* Highlights from the Newspaper */}
              <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                <p>
                  <strong className="text-white font-semibold">Orígenes y Raíces:</strong> Nacido en la vereda Corazón de Peralonso (San Antonio / Ortega, Tolima), creció en una humilde familia campesina de 10 hermanos. Para sostener el hogar, aprendió y ejerció el oficio de la construcción como maestro de obra, sin abandonar jamás el sueño de cantar.
                </p>
                <p>
                  <strong className="text-white font-semibold">Inicios Musicales:</strong> Comenzó interpretando los clásicos de la música de carrilera y cantina de sus ídolos Darío Gómez, Luis Alberto Posada y El Charrito Negro, para luego componer sus propias canciones en estilo popular norteño.
                </p>
                <p>
                  <strong className="text-white font-semibold">Canciones Propias Destacadas en Prensa:</strong> <em>"Soy Tolimense"</em> (dedicado a su tierra), <em>"Amor Clandestino"</em>, <em>"El Amor de Mi Vida"</em>, <em>"El Relajado"</em>, <em>"Qué Les Importa"</em> y <em>"El Infiel"</em>.
                </p>
              </div>

              {/* Badges / Stats from the article */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-neutral-800">
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800">
                  <div className="text-[11px] text-neutral-400">Fanaticada Bautizada</div>
                  <div className="text-sm font-bold text-[#D4AF37] mt-0.5">Los Montielistas</div>
                </div>
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800">
                  <div className="text-[11px] text-neutral-400">Alcance Internacional</div>
                  <div className="text-sm font-bold text-[#D4AF37] mt-0.5">Ecuador, España, México</div>
                </div>
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800 col-span-2 sm:col-span-1">
                  <div className="text-[11px] text-neutral-400">Cobertura Nacional</div>
                  <div className="text-sm font-bold text-[#E11D48] mt-0.5">Tolima, Antioquia, Boyacá</div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setShowQhuboModal(true)}
                  className="px-5 py-2.5 rounded-full bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 flex items-center gap-2 shadow-md"
                >
                  <i className="fa-solid fa-expand text-xs"></i>
                  <span>Ver Recorte en Pantalla Completa</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Rider Técnico & Stage Plan */}
        {activeTab === 'rider' && (
          <div className="bg-neutral-950 rounded-3xl border border-neutral-800 p-6 sm:p-10 shadow-2xl animate-fadeIn space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Especificaciones Oficiales
                </span>
                <h3 className="font-['Cinzel',serif] text-2xl font-bold text-white mt-1">
                  Rider Técnico & Planta Escénica (14 Músicos)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => handleDownload(PRESS_ASSETS[2])}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-md whitespace-nowrap self-start sm:self-auto"
              >
                <i className="fa-solid fa-file-pdf"></i>
                <span>Descargar Rider en PDF</span>
              </button>
            </div>

            {/* Grid of technical specs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tarima & Escenario */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] text-lg">
                  <i className="fa-solid fa-layer-group"></i>
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                  Dimensiones de Tarima
                </h4>
                <ul className="text-xs text-neutral-400 space-y-2 list-disc list-inside">
                  <li>Escenario mínimo: 10m de boca x 8m de fondo x 1.5m de alto.</li>
                  <li>Tarima despejada, alfombrada y nivelada.</li>
                  <li>02 Tarimas elevadas (risers) para Batería/Percusión (2x2m) y Metales (3x2m).</li>
                  <li>Techo estructural con cubierta impermeable para intemperie.</li>
                </ul>
              </div>

              {/* Monitoreo e In-Ears */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] text-lg">
                  <i className="fa-solid fa-headphones"></i>
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                  Monitoreo & Microfonía
                </h4>
                <ul className="text-xs text-neutral-400 space-y-2 list-disc list-inside">
                  <li>06 Sistemas In-Ear inalámbricos profesionales (Sennheiser G4 / Shure PSM900).</li>
                  <li>04 Cuñas de piso dobles frontales (Meyer / L-Acoustics / RCF).</li>
                  <li>Micrófono principal: Shure Axient Digital o UHF-R cápsula KSM9 / Beta 58A.</li>
                  <li>01 Micrófono cableado de backup en tarima.</li>
                </ul>
              </div>

              {/* FOH & Sonido Sala */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] text-lg">
                  <i className="fa-solid fa-volume-high"></i>
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                  Sonido Sala (FOH) & Luces
                </h4>
                <ul className="text-xs text-neutral-400 space-y-2 list-disc list-inside">
                  <li>Line Array profesional calibrado (110 dB SPL continuos limpios).</li>
                  <li>Consolas digitales compatibles: DiGiCo, Yamaha CL5, Allen&Heath dLive.</li>
                  <li>Consola dedicada para monitores en festivales masivos.</li>
                  <li>Luces robóticas Beam, bañadores LED y máquinas de niebla (Hazer).</li>
                </ul>
              </div>
            </div>

            {/* Direct Tech Contact Note */}
            <div className="p-4 rounded-xl bg-black/60 border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-300">
                <span className="font-bold text-[#D4AF37]">¿Dudas técnicas con el rider?</span> Comuníquese con la dirección técnica de Edwin Montiel al WhatsApp: <span className="text-white font-mono">+57 311 255 3001</span>.
              </div>
              <a
                href={ARTIST_INFO.whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#D4AF37] hover:underline uppercase tracking-wider whitespace-nowrap"
              >
                Contactar Ingeniero
              </a>
            </div>
          </div>
        )}

        {/* Tab 3: Zona de Descargas HD */}
        {activeTab === 'descargas' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {PRESS_ASSETS.map((asset) => (
              <div
                key={asset.id}
                id={`asset-card-${asset.id}`}
                className="bg-neutral-950 rounded-2xl border border-neutral-800 hover:border-[#D4AF37]/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-neutral-900 text-[#D4AF37] border border-[#D4AF37]/30">
                      {asset.fileType}
                    </span>
                    <span className="text-xs text-neutral-500 font-mono">{asset.fileSize}</span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] text-2xl mb-4 group-hover:scale-110 transition-transform">
                    {asset.category === 'logos' && <i className="fa-solid fa-shapes"></i>}
                    {asset.category === 'photos' && <i className="fa-solid fa-images"></i>}
                    {asset.category === 'rider' && <i className="fa-solid fa-file-invoice"></i>}
                  </div>

                  <h3 className="font-['Cinzel',serif] text-lg font-bold text-white group-hover:text-[#F9E79F] transition-colors">
                    {asset.title}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {asset.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-900">
                  <button
                    type="button"
                    onClick={() => handleDownload(asset)}
                    id={`btn-download-${asset.id}`}
                    className="w-full py-3 px-4 rounded-xl bg-neutral-900 hover:bg-[#D4AF37] text-white hover:text-black font-bold text-xs uppercase tracking-wider border border-neutral-800 hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2 shadow-md group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  >
                    <i className="fa-solid fa-download text-xs"></i>
                    <span>Descargar Archivo HD</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal for full newspaper viewing */}
        {showQhuboModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setShowQhuboModal(false)}
          >
            <div
              className="max-w-4xl w-full max-h-[90vh] bg-neutral-950 border border-[#D4AF37] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="p-4 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-newspaper text-[#D4AF37]"></i>
                  <span className="text-sm font-bold text-white font-['Cinzel',serif]">
                    Periódico Q'hubo Ibagué - Edición Histórica Impresa
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowQhuboModal(false)}
                  className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-[#E11D48] text-white flex items-center justify-center transition-colors text-sm"
                  aria-label="Cerrar modal"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              {/* Modal Image Area with Scroll */}
              <div className="overflow-auto p-4 flex justify-center bg-neutral-900/50">
                <img
                  src={ARTIST_INFO.pressImage}
                  alt="Artículo completo Q'hubo Edwin Montiel"
                  className="max-w-full h-auto rounded-lg shadow-xl"
                />
              </div>

              {/* Modal Bottom Bar */}
              <div className="p-3.5 bg-neutral-900/90 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-300 gap-2">
                <div>
                  <span className="text-[#D4AF37] font-semibold">Titular:</span> "Haciendo Realidad un Sueño - Edwin Montiel"
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={ARTIST_INFO.pressImage}
                    download="Edwin_Montiel_Periodico_Qhubo.jpg"
                    className="text-[#D4AF37] hover:underline flex items-center gap-1 font-bold"
                  >
                    <i className="fa-solid fa-download"></i>
                    <span>Descargar Imagen</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setShowQhuboModal(false)}
                    className="px-4 py-1 rounded-md bg-neutral-800 text-white hover:bg-neutral-700"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
