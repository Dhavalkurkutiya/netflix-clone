export type Movie = {
  id: string;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  description: string;
  poster: string; // emoji for now
  backdrop: string; // emoji for now
  featured?: boolean;
};

export const movies: Movie[] = [
  {
    id: '1',
    title: 'The Space Odyssey',
    year: 1968,
    genre: ['Sci-Fi', 'Adventure'],
    rating: 8.3,
    description:
      'A journey beyond the stars. An epic tale of humanity’s evolution and cosmic mystery.',
    poster: '🚀',
    backdrop: '🌌',
    featured: true,
  },
  {
    id: '2',
    title: 'Jungle Quest',
    year: 2021,
    genre: ['Adventure', 'Action'],
    rating: 7.1,
    description:
      'A wild ride through the heart of the jungle. Survival, friendship, and danger await.',
    poster: '🦁',
    backdrop: '🌴',
  },
  {
    id: '3',
    title: 'Laugh Riot',
    year: 2019,
    genre: ['Comedy'],
    rating: 6.8,
    description:
      'A hilarious comedy about a group of friends navigating the ups and downs of life.',
    poster: '😂',
    backdrop: '🎭',
  },
  {
    id: '4',
    title: 'Haunted Manor',
    year: 2022,
    genre: ['Horror', 'Mystery'],
    rating: 7.5,
    description:
      'A chilling story set in a haunted mansion. Secrets, scares, and suspense.',
    poster: '👻',
    backdrop: '🏚️',
  },
  {
    id: '5',
    title: 'Romance in Paris',
    year: 2020,
    genre: ['Romance', 'Drama'],
    rating: 7.9,
    description:
      'Love blooms in the city of lights. A heartwarming romantic drama.',
    poster: '💖',
    backdrop: '🗼',
  },
  {
    id: '6',
    title: 'The Last Samurai',
    year: 2003,
    genre: ['Action', 'Drama'],
    rating: 8.1,
    description:
      'A tale of honor, tradition, and transformation in feudal Japan.',
    poster: '🗡️',
    backdrop: '⛩️',
  },
  {
    id: '7',
    title: 'Galactic Wars',
    year: 1977,
    genre: ['Sci-Fi', 'Action'],
    rating: 8.6,
    description:
      'An interstellar battle between good and evil. Heroes rise, empires fall.',
    poster: '🌠',
    backdrop: '🚀',
  },
  {
    id: '8',
    title: 'The Detective',
    year: 2018,
    genre: ['Crime', 'Thriller'],
    rating: 7.3,
    description:
      'A gritty crime thriller following a detective on the hunt for the truth.',
    poster: '🕵️‍♂️',
    backdrop: '🌃',
  },
  {
    id: '9',
    title: 'Frozen Peaks',
    year: 2013,
    genre: ['Animation', 'Family'],
    rating: 7.7,
    description:
      'A magical adventure in a land of ice and snow. Friendship conquers all.',
    poster: '⛄',
    backdrop: '🏔️',
  },
  {
    id: '10',
    title: 'The Pianist',
    year: 2002,
    genre: ['Drama', 'Biography'],
    rating: 8.5,
    description:
      'The inspiring true story of a musician’s survival during wartime.',
    poster: '🎹',
    backdrop: '🎼',
  },
];
