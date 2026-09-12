export interface Song {
  id: string;
  title: string;
  album: string;
  year: string;
  duration: string;
  genre: string;
  description: string;
  lyricsExcerpt: string;
  spotifyUrl: string;
  youtubeUrl: string;
  appleUrl: string;
  deezerUrl: string;
  coverImage: string;
  audioSampleTone?: string;
  isHit?: boolean;
}

export interface TourDate {
  id: string;
  date: string;
  dayMonth: { day: string; month: string };
  city: string;
  department: string;
  venue: string;
  eventName: string;
  status: 'available' | 'sold_out' | 'private';
  statusLabel: string;
  ticketUrl?: string;
}

export interface PressAsset {
  id: string;
  title: string;
  category: 'logos' | 'photos' | 'rider';
  fileType: string;
  fileSize: string;
  description: string;
  downloadName: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'conciertos' | 'estudio' | 'prensa';
  url: string;
  description: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  city: string;
  eventType: string;
  date: string;
  notes: string;
}
