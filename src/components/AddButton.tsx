'use client'
import { useState } from 'react'
import { useCart } from '@/lib/cart'

export default function AddButton({ id }: { id: string }) {
  const { add } = useCart()
  const [done, setDone] = useState(false)
  return (
    <button
      onClick={() => {
        add(id)
        setDone(true)
        setTimeout(() => setDone(false), 1200)
      }}
      className="mt-8 w-full rounded-full bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600 active:scale-95 sm:w-auto sm:px-12"
    >
      {done ? 'Added ✓' : 'Add to cart'}
    </button>
  )
}
