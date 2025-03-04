export interface Film {
  title: string;
  year: string;
  director: string;
  rating: number;
  imageUrl: string;
  genres: string[];
}

export interface Director {
  name: string;
  avgRating: number;
  filmCount: number;
  bestFilm: string;
  imageUrl: string;
}

export interface Actor {
  name: string;
  avgRating: number;
  filmCount: number;
  bestFilm: string;
  imageUrl: string;
}