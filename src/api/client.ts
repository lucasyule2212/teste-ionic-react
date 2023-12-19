import axios from 'axios'
const client = axios.create({
  baseURL: 'https://tmdb-proxy.cubos-academy.workers.dev/3/'
})

export default client
