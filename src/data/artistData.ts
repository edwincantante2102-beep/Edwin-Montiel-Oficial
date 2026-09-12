import { Song, TourDate, PressAsset, GalleryPhoto } from '../types';

export const ARTIST_INFO = {
  name: 'Edwin Montiel',
  stageName: 'Edwin Montiel',
  slogan: '¡Sírvalo, Sírvalo!',
  subtitle: 'La Voz del Despecho y la Música Popular',
  phone: '+57 311 255 3001',
  phoneRaw: '3112553001',
  countryCode: '57',
  whatsappUrl: 'https://wa.me/573112553001',
  whatsappBookingUrl: 'https://wa.me/573112553001?text=Hola,%20deseo%20informacion%20para%20una%20contratacion%20de%20Edwin%20Montiel',
  spotifyUrl: 'https://open.spotify.com/artist/6C43pp9NwhUIlGhvDPizHT',
  youtubeChannelUrl: 'https://www.youtube.com/@EdwinMontielOficial',
  featuredVideoUrl: 'https://www.youtube.com/watch?v=2wml-jSchGQ',
  featuredVideoEmbed: 'https://www.youtube.com/embed/2wml-jSchGQ?rel=0&modestbranding=1',
  appleMusicUrl: 'https://music.apple.com/search?term=Edwin+Montiel',
  deezerUrl: 'https://www.deezer.com/search/Edwin%20Montiel',
  email: 'contacto@edwinmontiel.com',
  city: 'Ibagué / San Antonio (Tolima) & Medellín, Colombia',
  origin: 'Vereda Corazón de Peralonso, San Antonio / Ortega, Tolima',
  fanbaseName: 'Los Montielistas',
  heroImage: '/images/hero_edwin.jpg',
  portraitImage: '/images/portrait_edwin.jpg',
  studioImage: '/images/studio_edwin.jpg',
  pressImage: '/images/press_qhubo.jpg',
  tourImage: '/images/tour_street_edwin.jpg',
  bioShort: 'Edwin Montiel, la potente voz del despecho tolimense conocido por su emblemático grito "¡Sírvalo, Sírvalo!", representa la viva estampa de superación: de maestro de construcción a conquistar los escenarios del género popular y norteño en Colombia, Ecuador, España y México.',
  bioFull: 'Nacido en la vereda Corazón de Peralonso (Tolima) de una humilde familia campesina del territorio pijao, Edwin Montiel forjó su carácter combinando el esfuerzo diario de la construcción con su inquebrantable pasión por el canto. Inspirado inicialmente en leyendas como Darío Gómez, Luis Alberto Posada y El Charrito Negro, dio el paso decisivo hacia la composición de sus propias obras como "Soy Tolimense", "Amor Clandestino", "El Amor De Mi Vida", "El Relajado" y el gran himno nacional "El Último En Saber". Con 14 músicos en tarima y el respaldo incondicional de sus "Montielistas", cada concierto es una fiesta inolvidable de cantina y sentimiento.'
};

export const SONGS_DATA: Song[] = [
  {
    id: 'el-ultimo-en-saber',
    title: 'El Último En Saber',
    album: 'Sencillo Oficial',
    year: '2024',
    duration: '3:42',
    genre: 'Música Popular / Despecho',
    description: 'El éxito que conmociona a los amantes de la buena cantina. Una lírica desgarradora sobre la traición y enterarse al final cuando ya todo el pueblo hablaba.',
    lyricsExcerpt: '"Y pensar que hasta el cantinero ya sabía... y yo fui el último en saber de tu partida..."',
    spotifyUrl: 'https://open.spotify.com/artist/6C43pp9NwhUIlGhvDPizHT',
    youtubeUrl: 'https://www.youtube.com/watch?v=2wml-jSchGQ',
    appleUrl: 'https://music.apple.com/search?term=Edwin+Montiel+El+Ultimo+En+Saber',
    deezerUrl: 'https://www.deezer.com/search/Edwin%20Montiel%20El%20Ultimo%20En%20Saber',
    coverImage: '/images/studio_edwin.jpg',
    isHit: true
  },
  {
    id: 'cabron-yo-puedo',
    title: 'Cabrón Yo Puedo',
    album: 'Sencillo de Poder',
    year: '2024',
    duration: '3:15',
    genre: 'Regional Bravío / Motivación',
    description: 'Un himno de resiliencia y templanza que invita a levantarse ante cualquier adversidad, con el característico sonido de guitarras y trompetas de impacto.',
    lyricsExcerpt: '"Me dijeron que no iba a llegar, que la vida me iba a quebrar... pero hoy me miro al espejo y me digo: ¡Cabrón, yo puedo!"',
    spotifyUrl: 'https://open.spotify.com/artist/6C43pp9NwhUIlGhvDPizHT',
    youtubeUrl: 'https://www.youtube.com/@EdwinMontielOficial',
    appleUrl: 'https://music.apple.com/search?term=Edwin+Montiel+Cabron+Yo+Puedo',
    deezerUrl: 'https://www.deezer.com/search/Edwin%20Montiel+Cabron+Yo+Puedo',
    coverImage: '/images/hero_edwin.jpg',
    isHit: true
  },
  {
    id: 'el-amor-de-mi-vida',
    title: 'El Amor De Mi Vida',
    album: 'Romance Popular',
    year: '2023',
    duration: '3:50',
    genre: 'Balada Popular Sentimental',
    description: 'La balada ranchera más aclamada por el público femenino. Un tributo al amor verdadero que trasciende el despecho y abraza el corazón.',
    lyricsExcerpt: '"Tú llegaste a curar las heridas que el trago no pudo borrar... eres tú, sin dudar, el amor de mi vida."',
    spotifyUrl: 'https://open.spotify.com/artist/6C43pp9NwhUIlGhvDPizHT',
    youtubeUrl: 'https://www.youtube.com/@EdwinMontielOficial',
    appleUrl: 'https://music.apple.com/search?term=Edwin+Montiel+El+Amor+De+Mi+Vida',
    deezerUrl: 'https://www.deezer.com/search/Edwin%20Montiel+El+Amor+De+Mi+Vida',
    coverImage: '/images/portrait_edwin.jpg',
    isHit: false
  },
  {
    id: 'el-patron',
    title: 'El Patrón',
    album: 'Álbum ¡Sírvalo, Sírvalo!',
    year: '2023',
    duration: '3:28',
    genre: 'Corrido Popular Colombiano',
    description: 'Canción insignia del repertorio de Edwin Montiel. Ritmo recio, estrofas contundentes y el grito que enciende toda cantina.',
    lyricsExcerpt: '"Aquí manda el trabajo duro y la lealtad... ¡Sírvalo, sírvalo, compadre, que el patrón va a brindar!"',
    spotifyUrl: 'https://open.spotify.com/artist/6C43pp9NwhUIlGhvDPizHT',
    youtubeUrl: 'https://www.youtube.com/@EdwinMontielOficial',
    appleUrl: 'https://music.apple.com/search?term=Edwin+Montiel+El+Patron',
    deezerUrl: 'https://www.deezer.com/search/Edwin%20Montiel+El+Patron',
    coverImage: '/images/tour_street_edwin.jpg',
    isHit: true
  }
];

export const TOUR_DATES: TourDate[] = [
  {
    id: 'tour-1',
    date: '24 Oct 2025',
    dayMonth: { day: '24', month: 'OCT' },
    city: 'Bogotá D.C.',
    department: 'Cundinamarca',
    venue: 'Movistar Arena / Carpa Las Américas',
    eventName: 'Gran Festival del Despecho & Cantina VIP',
    status: 'available',
    statusLabel: 'Boletos Disponibles',
    ticketUrl: 'https://wa.me/573112553001?text=Hola,%20deseo%20reservar%20boletos%20para%20Edwin%20Montiel%20en%20Bogota'
  },
  {
    id: 'tour-2',
    date: '08 Nov 2025',
    dayMonth: { day: '08', month: 'NOV' },
    city: 'Medellín',
    department: 'Antioquia',
    venue: 'Centro de Eventos La Macarena',
    eventName: 'Noche de Oro Popular - ¡Sírvalo, Sírvalo!',
    status: 'sold_out',
    statusLabel: 'Entradas Agotadas',
    ticketUrl: 'https://wa.me/573112553001?text=Hola,%20consulto%20lista%20de%20espera%20Edwin%20Montiel%20en%20Medellin'
  },
  {
    id: 'tour-3',
    date: '29 Nov 2025',
    dayMonth: { day: '29', month: 'NOV' },
    city: 'Villavicencio',
    department: 'Meta',
    venue: 'Coliseo Parque Las Malocas',
    eventName: 'Encuentro Llanero & Cantinero de Colombia',
    status: 'available',
    statusLabel: 'Boletos Disponibles',
    ticketUrl: 'https://wa.me/573112553001?text=Hola,%20deseo%20informacion%20de%20boletas%20Edwin%20Montiel%20Villavicencio'
  },
  {
    id: 'tour-4',
    date: '12 Ene 2026',
    dayMonth: { day: '12', month: 'ENE' },
    city: 'Manizales',
    department: 'Caldas',
    venue: 'Plaza de Bolívar / Carpa Olé',
    eventName: 'Feria de Manizales - Concierto Estelar',
    status: 'available',
    statusLabel: 'Boletos Disponibles',
    ticketUrl: 'https://wa.me/573112553001?text=Hola,%20deseo%20asistir%20al%20concierto%20Edwin%20Montiel%20Feria%20de%20Manizales'
  },
  {
    id: 'tour-5',
    date: '28 Feb 2026',
    dayMonth: { day: '28', month: 'FEB' },
    city: 'Pereira',
    department: 'Risaralda',
    venue: 'Hacienda Campestre La Esperanza',
    eventName: 'Gala Privada Aniversario Empresarial',
    status: 'private',
    statusLabel: 'Evento Privado'
  },
  {
    id: 'tour-6',
    date: '21 Mar 2026',
    dayMonth: { day: '21', month: 'MAR' },
    city: 'Ibagué',
    department: 'Tolima',
    venue: 'Estadio Manuel Murillo Toro (Explanada)',
    eventName: 'Festival Tolima Canta al Despecho',
    status: 'available',
    statusLabel: 'Boletos Disponibles',
    ticketUrl: 'https://wa.me/573112553001?text=Hola,%20deseo%20boletas%20Edwin%20Montiel%20en%20Ibague'
  }
];

export const PRESS_ASSETS: PressAsset[] = [
  {
    id: 'asset-logos',
    title: 'Logos Oficiales HD (Vector & PNG)',
    category: 'logos',
    fileType: 'ZIP (SVG, PNG Alpha, AI)',
    fileSize: '18.4 MB',
    description: 'Versiones oficiales del logotipo de Edwin Montiel en oro pulido, blanco puro y negro para afiches, vallas y piezas digitales.',
    downloadName: 'Edwin_Montiel_Logos_Oficiales_HD.zip'
  },
  {
    id: 'asset-photos',
    title: 'Fotos de Prensa / Afiches High-Res',
    category: 'photos',
    fileType: 'ZIP (JPEG 300 DPI / RAW)',
    fileSize: '65.2 MB',
    description: 'Sesión fotográfica editorial de estudio y tarima con vestuario gala charro/popular para medios de comunicación e imprenta.',
    downloadName: 'Edwin_Montiel_Press_Kit_Photos_300DPI.zip'
  },
  {
    id: 'asset-rider',
    title: 'Rider Técnico & Stage Plan (PDF)',
    category: 'rider',
    fileType: 'PDF Oficial 2025',
    fileSize: '4.8 MB',
    description: 'Distribución de tarima para 14 músicos, lista de canales (Input List), especificaciones de monitores In-Ear y microfonía.',
    downloadName: 'Edwin_Montiel_Rider_Tecnico_Stage_Plan.pdf'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Edwin Montiel en el Campo Tolimense',
    category: 'prensa',
    url: '/images/hero_edwin.jpg',
    description: 'Edwin Montiel con sombrero vaquero, gafas oscuras y porte recio en los verdes paisajes del Tolima, tierra que inspiró su éxito "Soy Tolimense".'
  },
  {
    id: 'gal-2',
    title: 'Grabación en Master Studio',
    category: 'estudio',
    url: '/images/studio_edwin.jpg',
    description: 'Sesión de grabación vocal en cabina con audífonos de monitoreo y micrófono de condensador, entregando todo el sentimiento y desahogo de cantina.'
  },
  {
    id: 'gal-3',
    title: 'Artículo Q\'hubo: "Haciendo Realidad un Sueño"',
    category: 'prensa',
    url: '/images/press_qhubo.jpg',
    description: 'Reportaje histórico en el periódico Q\'hubo Ibagué destacando su admirable historia: de maestro de construcción al género popular norteño.'
  },
  {
    id: 'gal-4',
    title: 'Retrato de Prensa Oficial',
    category: 'prensa',
    url: '/images/portrait_edwin.jpg',
    description: 'Sesión fotográfica de prensa con fondo blanco, camiseta clara y tatuajes característicos, mostrando la cercanía y carisma del artista tolimense.'
  },
  {
    id: 'gal-5',
    title: 'De Gira con la Gente - LMP',
    category: 'conciertos',
    url: '/images/tour_street_edwin.jpg',
    description: 'Edwin Montiel portando la indumentaria oficial con bordado en oro "LMP - Lo Nuevo De La Música Popular", recorriendo municipios y compartiendo con los Montielistas.'
  },
  {
    id: 'gal-6',
    title: 'La Orquesta en Vivo - 14 Músicos',
    category: 'conciertos',
    url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop',
    description: 'Tarima encendida a todo volumen con vientos, cuerdas, percusión y requinto en las principales ferias del país al grito de ¡Sírvalo, Sírvalo!'
  }
];
