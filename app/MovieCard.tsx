import { Movie } from "./types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

export function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <Card
      className="group cursor-pointer transition-transform hover:scale-105 bg-gradient-to-b from-zinc-900/80 to-zinc-800 border-zinc-700 shadow-lg overflow-hidden"
      onClick={() => onClick(movie)}
      tabIndex={0}
      aria-label={`View details for ${movie.title}`}
    >
      <div className="flex items-center justify-center aspect-[2/3] text-6xl md:text-7xl bg-zinc-800/80">
        <span>{movie.poster}</span>
      </div>
      <CardHeader className="pt-4 pb-2 px-4">
        <CardTitle className="truncate text-lg font-bold text-white">
          {movie.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4 flex flex-col gap-1">
        <div className="flex items-center gap-2 text-sm text-zinc-300">
          <span>{movie.year}</span>
          <span className="mx-1">•</span>
          <span className="truncate">{movie.genre}</span>
        </div>
        <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
          <StarIcon className="w-4 h-4" />
          <span>{movie.rating}</span>
        </div>
      </CardContent>
    </Card>
  );
}
