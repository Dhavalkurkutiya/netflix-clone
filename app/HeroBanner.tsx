import { Movie } from "./types";

interface HeroBannerProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

export function HeroBanner({ movie, onClick }: HeroBannerProps) {
  return (
    <section
      className="relative w-full min-h-[340px] md:min-h-[420px] flex items-end rounded-xl overflow-hidden mb-10 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 shadow-xl border border-zinc-800"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-zinc-900/90 via-zinc-900/70 to-zinc-800/80" />
      <div className="relative z-10 flex flex-col gap-4 p-8 md:p-12 max-w-2xl">
        <span className="text-6xl md:text-7xl mb-2 drop-shadow-lg">{movie.banner}</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          {movie.title}
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-xl drop-shadow">
          {movie.description}
        </p>
        <div className="flex items-center gap-4 mt-2">
          <button
            className="bg-white text-zinc-900 font-semibold px-6 py-2 rounded-md shadow hover:bg-zinc-200 transition text-base"
            onClick={() => onClick(movie)}
          >
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}
