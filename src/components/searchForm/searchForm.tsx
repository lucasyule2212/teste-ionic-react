

import { Search } from 'lucide-react'
import { type FormEvent } from 'react'

export default function SearchForm() {
  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    const query = data.q as string

    if (!query) {
      return null
    }
    // router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full px-5 py-3 ring-zinc-900  dark:bg-zinc-900 dark:ring-zinc-700"
    >
      <Search className="h-5 w-5 text-zinc-500" />
      <input
        name="q"
        type="text"
        // defaultValue={query ?? ''}
        placeholder="Search for movies..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
      />
    </form>
  )
}
