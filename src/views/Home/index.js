import React, { useState, useEffect } from 'react'

import MoviesList from 'components/MoviesList'
import LoadingSpinner from 'components/LoadingSpinner'

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState({
    loading: true,
    error: null,
    list: []
  })

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_MOVIE_DB_URL}trending/movie/week?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}`
        )
        const body = await response.json()
        setTrendingMovies({
          loading: false,
          error: null,
          list: body.results
        })
      } catch (error) {
        setTrendingMovies({
          list: [],
          loading: false,
          error: 'Opps! osomething went wrong'
        })
      }
    }
    fetchTrending()
  }, [])

  if (trendingMovies.loading) {
    return <LoadingSpinner />
  }
  if (trendingMovies.error) {
    return 'ops something went wrong'
  }
  return (
    <MoviesList movies={trendingMovies.list} />
  )
}

export default Home
