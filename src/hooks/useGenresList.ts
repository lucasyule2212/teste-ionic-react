import { useQuery } from '@tanstack/react-query'
import client from 'api/client'

const useGenresList = () => {
  return useQuery({
    queryKey: ['genresList'],
    queryFn: async () => {
      const { data } = await client.get('/genre/movie/list')
      return data.genres
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24 // 1 day
  })
}

export default useGenresList
