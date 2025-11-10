export type Movie = {
  id: string;
  title: string;
  description: string;
  year: number;
  genre: string;
  rating: number;
  poster: string; // emoji for poster
  banner: string; // emoji for hero
};

export type MovieSection = {
  id: string;
  title: string;
  movies: Movie[];
};
