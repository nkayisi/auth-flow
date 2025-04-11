'use client'

import { UIProviders } from "./ui-providers"


export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col flex-1 border-4 border-green-500">
            <UIProviders>
                {children}
            </UIProviders>
        </main>
    )
}