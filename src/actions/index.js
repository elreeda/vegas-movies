export const getDiscoveryMovies = async () => {
  const response = await fetch(`${process.env.MOVIE_DB_URL}/discover/movie?api_key=${process.env.MOVIE_DB_KEY}&sort_by=popularity.desc`)
  const body = await response.json()
  return body
}

export const getTrendingMovies = async () => {
  const response = await fetch(`${process.env.MOVIE_DB_URL}/trending/movie?api_key=${process.env.MOVIE_DB_KEY}`)
  const body = await response.json()
  return body
}
