import { Movie } from './movies-list';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { StarIcon, XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MovieModalProps {
  movie: Movie | null;
  open: boolean;
  onClose: () => void;
}

export function MovieModal({ movie, open, onClose }: MovieModalProps) {
  if (!movie) return null;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg bg-zinc-900 border-zinc-700">
        <button
          className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-100 focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          <XIcon className="w-5 h-5" />
        </button>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-zinc-100">
            <span className="text-4xl select-none" aria-hidden>{movie.poster}</span>
            {movie.title}
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            {movie.year} &middot; {movie.genre.join(', ')}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2 mb-2">
          <span className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
            <StarIcon className="w-4 h-4" />
            {movie.rating}
          </span>
          <div className="flex flex-wrap gap-1">
            {movie.genre.map((g) => (
              <Badge key={g} className="bg-zinc-700 text-xs px-2 py-0.5">{g}</Badge>
            ))}
          </div>
        </div>
        <p className="text-zinc-200 mb-2">{movie.description}</p>
        <div className="flex items-center gap-2">
          <span className="text-2xl select-none" aria-hidden>{movie.backdrop}</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
