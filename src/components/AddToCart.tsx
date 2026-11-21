'use client'
import { ShoppingCart } from 'lucide-react'
import { toast } from 'sonner'
import { useCart } from '@/lib/cart'
import { byId } from '@/lib/data'

/** Single add-to-cart action shared by cards and the product page. */
export default function AddToCart({ id, className = '' }: { id: string; className?: string }) {
  const add = useCart((s) => s.add)
  return (
    <button
      onClick={() => {
        add(id)
        toast.success(`${byId(id)?.name} added to cart`)
      }}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 font-semibold text-white transition hover:bg-orange-600 active:scale-95 ${className}`}
    >
      <ShoppingCart className="size-4" /> Add to cart
    </button>
  )
}
