import { movies, Movie } from './movies-list';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MoviesListProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export function MoviesList({ movies, onSelect }: MoviesListProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <button
          key={movie.id}
          className="group text-left focus:outline-none"
          onClick={() => onSelect(movie)}
          aria-label={`View details for ${movie.title}`}
        >
          <Card className="bg-gradient-to-b from-zinc-800 to-zinc-900 border-zinc-700 shadow-lg transition-transform group-hover:scale-105 group-focus:scale-105">
            <div className="flex flex-col items-center justify-center aspect-[2/3] text-6xl select-none">
              <span aria-hidden>{movie.poster}</span>
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-base text-zinc-100 truncate" title={movie.title}>{movie.title}</h3>
                <span className="flex items-center gap-1 text-yellow-400 text-xs font-bold">
                  <StarIcon className="w-4 h-4" />
                  {movie.rating}
                </span>
              </div>
              <div className="flex flex-wrap gap-1 mb-1">
                {movie.genre.map((g) => (
                  <Badge key={g} className="bg-zinc-700 text-xs px-2 py-0.5">{g}</Badge>
                ))}
              </div>
              <span className="text-xs text-zinc-400">{movie.year}</span>
            </div>
          </Card>
        </button>
      ))}
    </div>
  );
}
