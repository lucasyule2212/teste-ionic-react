import useMoviesByGenre from 'hooks/useMoviesByGenre'
import { block } from 'million/react'
import MoviePosterBlock from './moviePoster'

const ListComponentBlock = block(
  ({
    genre
  }: {
    genre: {
      id: number
      name: string
    }
  }) => {
    const { data, isLoading } = useMoviesByGenre({
      genreId: genre.id
    })

    if (isLoading) {
      return (
        <div key={genre.id} className="flex max-w-[90vw] flex-col">
          <h1 className="ml-2 text-3xl font-semibold text-zinc-700 underline decoration-ionic decoration-solid dark:text-white">
            {genre.name}
          </h1>
          {Array.from(Array(5).keys()).map((_, index) => (
            <div key={index} className="skeleton h-60 w-44"></div>
          ))}
        </div>
      )
    }

    return (
      <div key={genre.id} className="flex max-w-[90vw] flex-col">
        <h1 className="ml-2 text-3xl font-semibold text-zinc-700 underline decoration-ionic decoration-solid dark:text-white">
          {genre.name}
        </h1>
        <div className="carousel carousel-center mt-2 w-full gap-4 space-x-4">
          {data &&
            data.map((movie) => <MoviePosterBlock key={movie.id} {...movie} />)}
        </div>
      </div>
    )
  }
)

export default ListComponentBlock
