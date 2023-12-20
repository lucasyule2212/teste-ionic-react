import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from 'components/ui/tooltip'
import { format } from 'date-fns'
import { useMemo } from 'react'

function MoviePosterBlock({
  poster_path,
  title,
  release_date,
  vote_average
}: {
  poster_path: string
  title: string
  release_date: string
  vote_average: number
}) {
  const ratingColorMap = useMemo(() => {
    const rating = vote_average
    if (rating >= 7) {
      return 'badge-success'
    }
    if (rating >= 5) {
      return 'badge-warning'
    }
    return 'badge-error'
  }, [vote_average])

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="carousel-item h-60 w-44 cursor-pointer">
            <img src={poster_path} className="w-full rounded-box shadow-lg" />
          </div>
        </TooltipTrigger>
        <TooltipContent className="card border-none bg-zinc-700 dark:border dark:border-solid dark:border-white dark:bg-base-100 ">
          <div className="card-body items-center">
            <h1 className="card-title min-w-[200px] justify-center">{title}</h1>
            <h2 className="font-semibold">
              {format(new Date(release_date), 'dd/MM/yyyy')}
            </h2>
            <div className={`badge badge-lg font-semibold ${ratingColorMap}`}>
              Rate: {vote_average}
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default MoviePosterBlock
