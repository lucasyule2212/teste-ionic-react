import Carousel from 'components/carousel/carousel'
import useFeaturedMovies from 'hooks/useFeaturedMovies'

export default function Home() {
  const { data, isLoading } = useFeaturedMovies()
  console.log(data)

  return (
    <main className="flex min-h-[90vh] w-full flex-col gap-8 bg-white p-8 dark:bg-zinc-900">
      <Carousel items={data} isLoading={isLoading} />
    </main>
  )
}
