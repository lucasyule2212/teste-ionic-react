import { block } from 'million/react'

const MoviePosterBlock = block(({ poster_path }: { poster_path: string }) => {
  return (
    <div className="carousel-item h-60 w-44">
      <img src={poster_path} className="w-full rounded-box" />
    </div>
  )
})

export default MoviePosterBlock
