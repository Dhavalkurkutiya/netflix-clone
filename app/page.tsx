"use client";
import { useState, useCallback } from "react";
import { movieSections } from "./mock-data";
import { Movie } from "./types";
import { HeroBanner } from "./HeroBanner";
import { MovieSectionRow } from "./MovieSectionRow";
import { MovieModal } from "./MovieModal";
import { SunIcon, MoonIcon, FilmIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleMovieClick = useCallback((movie: Movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  }, []);

  const handleModalOpenChange = useCallback((open: boolean) => {
    setModalOpen(open);
    if (!open) setSelectedMovie(null);
  }, []);

  // Pick the first trending movie for the hero
  const heroMovie = movieSections[0].movies[0];

  return (
    <div className={darkMode ? "dark bg-zinc-950 min-h-screen" : "bg-white min-h-screen"}>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <header className="w-full px-4 md:px-8 py-4 flex items-center justify-between bg-gradient-to-b from-zinc-950/90 to-transparent z-20">
          <div className="flex items-center gap-3">
            <FilmIcon className="w-8 h-8 text-red-600" />
            <span className="text-2xl font-extrabold text-white tracking-tight">Netflux</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode((d) => !d)}
            className="text-white hover:bg-zinc-800"
          >
            {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </Button>
        </header>
        {/* Main Content */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-2 md:px-8 py-6">
          <HeroBanner movie={heroMovie} onClick={handleMovieClick} />
          {movieSections.map((section) => (
            <MovieSectionRow
              key={section.id}
              section={section}
              onMovieClick={handleMovieClick}
            />
          ))}
        </main>
        {/* Footer */}
        <footer className="w-full py-6 px-4 md:px-8 bg-zinc-950/80 border-t border-zinc-800 text-zinc-400 text-center text-sm">
          © {new Date().getFullYear()} Netflux. Not affiliated with Netflix.
        </footer>
      </div>
      <MovieModal movie={selectedMovie} open={modalOpen} onOpenChange={handleModalOpenChange} />
    </div>
  );
}
