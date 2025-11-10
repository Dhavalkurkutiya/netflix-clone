"use client";
import { useState } from 'react';
import { movies } from './movies-list';
import { MoviesList } from './MoviesList';
import { MovieModal } from './MovieModal';
import { HeroBanner } from './HeroBanner';
import { cn } from '@/lib/utils';
import { SunIcon, MoonIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sections = [
  { title: 'Trending Now', filter: (m: any) => m.rating > 7 },
  { title: 'Comedies', filter: (m: any) => m.genre.includes('Comedy') },
  { title: 'Action & Adventure', filter: (m: any) => m.genre.some((g: string) => ['Action', 'Adventure'].includes(g)) },
  { title: 'Family & Animation', filter: (m: any) => m.genre.some((g: string) => ['Family', 'Animation'].includes(g)) },
  { title: 'Dramas', filter: (m: any) => m.genre.includes('Drama') },
];

export default function Page() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleSelectMovie = (movie: any) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedMovie(null), 200);
  };

  return (
    <div className={cn('min-h-screen bg-zinc-950 text-zinc-100', darkMode ? 'dark' : '')}>
      <header className="sticky top-0 z-30 w-full bg-gradient-to-b from-zinc-950/95 via-zinc-950/80 to-transparent backdrop-blur border-b border-zinc-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-2xl font-bold tracking-tight select-none">
            <span className="text-red-600">🍿</span>
            <span>Netflx</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode((d) => !d)}
            className="text-zinc-400 hover:text-zinc-100"
          >
            {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </Button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 pb-10">
        <HeroBanner />
        <div className="space-y-12">
          {sections.map((section) => {
            const filtered = movies.filter(section.filter);
            if (!filtered.length) return null;
            return (
              <section key={section.title}>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-zinc-100">
                  {section.title}
                </h2>
                <MoviesList movies={filtered} onSelect={handleSelectMovie} />
              </section>
            );
          })}
        </div>
        <MovieModal movie={selectedMovie} open={modalOpen} onClose={handleCloseModal} />
      </main>
      <footer className="w-full border-t border-zinc-900 py-6 mt-10 text-center text-zinc-500 text-sm bg-zinc-950">
        <span>Not affiliated with Netflix. Demo app built with Next.js, Shadcn UI, and Tailwind CSS.</span>
      </footer>
    </div>
  );
}
