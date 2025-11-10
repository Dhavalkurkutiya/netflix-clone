import { MovieSection, Movie } from "./types";
import { MovieCard } from "./MovieCard";

interface MovieSectionRowProps {
  section: MovieSection;
  onMovieClick: (movie: Movie) => void;
}

export function MovieSectionRow({ section, onMovieClick }: MovieSectionRowProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 px-2 md:px-0 text-white">
        {section.title}
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-2 px-2 md:px-0 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
        {section.movies.map((movie) => (
          <div key={movie.id} className="min-w-[160px] max-w-[180px] w-[45vw] md:w-[180px]">
            <MovieCard movie={movie} onClick={onMovieClick} />
          </div>
        ))}
      </div>
    </section>
  );
}
