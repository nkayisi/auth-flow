'use client'

import { HeroUIProvider } from '@heroui/react'

export function UIProviders({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col flex-1 border-2 border-pink-700">
      <HeroUIProvider>
        {children}
      </HeroUIProvider>
    </main>
  )
}