'use client'
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { byId } from './data'

type Lines = Record<string, number>
const Ctx = createContext<{
  lines: Lines
  count: number
  total: number
  add: (id: string) => void
  setQty: (id: string, q: number) => void
  clear: () => void
}>(null!)

export const useCart = () => useContext(Ctx)

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Lines>({})
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setLines(JSON.parse(localStorage.getItem('cart') ?? '{}'))
    setReady(true)
  }, [])
  useEffect(() => {
    if (ready) localStorage.setItem('cart', JSON.stringify(lines))
  }, [lines, ready])

  const setQty = (id: string, q: number) =>
    setLines((l) => {
      const next = { ...l, [id]: q }
      if (q <= 0) delete next[id]
      return next
    })
  const add = (id: string) => setQty(id, (lines[id] ?? 0) + 1)
  const count = Object.values(lines).reduce((a, b) => a + b, 0)
  const total = Object.entries(lines).reduce((s, [id, q]) => s + (byId(id)?.price ?? 0) * q, 0)

  return <Ctx.Provider value={{ lines, count, total, add, setQty, clear: () => setLines({}) }}>{children}</Ctx.Provider>
}
