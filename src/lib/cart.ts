'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { byId } from './data'

type Lines = Record<string, number>
type State = {
  lines: Lines
  setQty: (id: string, qty: number) => void
  add: (id: string) => void
  clear: () => void
}

export const cartCount = (lines: Lines) => Object.values(lines).reduce((a, b) => a + b, 0)
export const cartTotal = (lines: Lines) => Object.entries(lines).reduce((sum, [id, q]) => sum + (byId(id)?.price ?? 0) * q, 0)

/** Persisted in localStorage. Hydrated manually (see Providers) to avoid SSR mismatches. */
export const useCart = create<State>()(
  persist(
    (set, get) => ({
      lines: {},
      setQty: (id, qty) =>
        set(({ lines }) => {
          const { [id]: _removed, ...rest } = lines
          return { lines: qty > 0 ? { ...rest, [id]: qty } : rest }
        }),
      add: (id) => get().setQty(id, (get().lines[id] ?? 0) + 1),
      clear: () => set({ lines: {} }),
    }),
    { name: 'volt-cart', skipHydration: true },
  ),
)
