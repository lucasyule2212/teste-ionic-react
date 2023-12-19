
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { type ReactNode } from 'react'
const queryClient = new QueryClient()

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  )
}
