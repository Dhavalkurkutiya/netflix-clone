import { movies } from './movies-list';
import { cn } from '@/lib/utils';

export function HeroBanner() {
  const featured = movies.find((m) => m.featured) || movies[0];
  return (
    <section
      className={cn(
        'relative w-full min-h-[320px] md:min-h-[420px] flex flex-col justify-end',
        'bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900',
        'rounded-xl overflow-hidden mb-10 shadow-xl'
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center text-[8rem] md:text-[12rem] opacity-20 select-none pointer-events-none">
        <span aria-hidden>{featured.backdrop}</span>
      </div>
      <div className="relative z-10 p-8 md:p-12">
        <h1 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-4 drop-shadow-lg">
          {featured.title}
        </h1>
        <p className="text-zinc-300 text-base md:text-lg max-w-xl mb-6 drop-shadow">
          {featured.description}
        </p>
        <div className="flex items-center gap-3">
          <span className="bg-zinc-700 text-zinc-100 rounded px-3 py-1 text-xs font-semibold">
            {featured.year}
          </span>
          <span className="bg-zinc-700 text-zinc-100 rounded px-3 py-1 text-xs font-semibold">
            {featured.genre.join(', ')}
          </span>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent" />
    </section>
  );
}
