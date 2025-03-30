export interface Topic {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  playlists: {
    id: string;
    title: string;
  }[];
} 