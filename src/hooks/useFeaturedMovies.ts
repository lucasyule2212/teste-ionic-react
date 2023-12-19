import { useQuery } from '@tanstack/react-query'
import client from 'api/client'

const useFeaturedMovies = () => {
  return useQuery({
    queryKey: ['featuredMovies'],
    queryFn: async () => {
      const { data } = await client.get('/discover/movie')
      return data.results
    }
  })
}

export default useFeaturedMovies
