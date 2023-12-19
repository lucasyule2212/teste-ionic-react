import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <main className={`font-sans  text-zinc-50 antialiased dark:bg-zinc-950`}>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  )
}
