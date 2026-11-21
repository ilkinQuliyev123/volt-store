'use client'
import { useEffect, type ReactNode } from 'react'
import { Toaster } from 'sonner'
import { useCart } from '@/lib/cart'

export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    void useCart.persist.rehydrate()
  }, [])
  return (
    <>
      {children}
      <Toaster position="bottom-right" closeButton />
    </>
  )
}
