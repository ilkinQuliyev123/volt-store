import { Star } from 'lucide-react'

export default function Stars({ rating, reviews, className = '' }: { rating: number; reviews?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-1 text-xs text-slate-500 ${className}`} aria-label={`${rating} out of 5`}>
      <Star className="size-3.5 fill-amber-400 text-amber-400" />
      <span className="font-medium text-slate-700">{rating.toFixed(1)}</span>
      {reviews !== undefined && <span>({reviews})</span>}
    </div>
  )
}
