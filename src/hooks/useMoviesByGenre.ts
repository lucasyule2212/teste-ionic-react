import { useQuery } from '@tanstack/react-query'
import client from 'api/client'

const useMoviesByGenre = ({ genreId }: { genreId: number }) => {
  return useQuery({
    queryKey: ['moviesByGenre', genreId],
    queryFn: async () => {
      const { data } = await client.get(`discover/movie?with_genres=${genreId}`)
      return data.results
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24 // 1 day
  })
}

export default useMoviesByGenre
