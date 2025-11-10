import { Movie } from "./types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MovieModalProps {
  movie: Movie | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MovieModal({ movie, open, onOpenChange }: MovieModalProps) {
  if (!movie) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 border-zinc-700 text-white max-w-xl w-full">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <span className="text-4xl">{movie.banner}</span>
            <span>{movie.title}</span>
          </DialogTitle>
          <DialogDescription className="text-zinc-300 mt-2">
            {movie.description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="flex items-center justify-center aspect-[2/3] w-24 md:w-32 rounded-lg bg-zinc-800 text-5xl">
            {movie.poster}
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <span>{movie.year}</span>
              <span className="mx-1">•</span>
              <span>{movie.genre}</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-400 text-base">
              <StarIcon className="w-5 h-5" />
              <span className="font-semibold">{movie.rating}</span>
            </div>
            <Button variant="secondary" className="mt-4 w-fit">
              Play
            </Button>
          </div>
        </div>
        <DialogClose asChild>
          <Button variant="ghost" size="icon" className="absolute top-4 right-4">
            <span className="sr-only">Close</span>
            ×
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
