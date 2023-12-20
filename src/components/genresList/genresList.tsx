import useGenresList from 'hooks/useGenresList'
import { For } from 'million/react'
import ListComponentBlock from './listComponent'

export default function GenresList() {
  const { data, isLoading } = useGenresList()

  if (isLoading) {
    return (
      <div className="flex max-w-[90vw] flex-col">
        <h1 className="ml-2 text-3xl font-semibold text-zinc-700 underline decoration-ionic decoration-solid dark:text-white">
          Loading
        </h1>
        <div className="carousel carousel-center mt-2 w-full space-x-4">
          {Array.from(Array(5).keys()).map((_, index) => (
            <div key={index} className="skeleton h-60 w-44"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="h-fit w-full p-4">
      <For each={data} className="flex flex-col gap-4">
        {({ id, name }: { id: number; name: string }) => (
          <ListComponentBlock key={name} genre={{ name, id }} />
        )}
      </For>
    </div>
  )
}
