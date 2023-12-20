import { useQuery } from '@tanstack/react-query'
import client from 'api/client'

const useFeaturedMovies = () => {
  return useQuery({
    queryKey: ['featuredMovies'],
    queryFn: async () => {
      const { data } = await client.get('/discover/movie')
      return data.results.slice(0, 10)
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24 // 1 day
  })
}

export default useFeaturedMovies
