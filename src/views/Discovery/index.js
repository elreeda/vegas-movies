import React, { useState, useEffect } from 'react'

import MoviesList from 'components/MoviesList'

const Home = () => {
  const [discoveryMovies, setDiscoveryMovies] = useState({
    loading: true,
    error: null,
    list: []
  })

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_MOVIE_DB_URL}discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&sort_by=popularity.desc`
        )
        const body = await response.json()
        setDiscoveryMovies({
          loading: false,
          error: null,
          list: body.results
        })
      } catch (error) {
        setDiscoveryMovies({
          list: [],
          loading: false,
          error: 'Opps! osomething went wrong'
        })
      }
    }
    fetchTrending()
  }, [])

  if (discoveryMovies.loading) {
    return <div>loading...</div>
  }
  if (discoveryMovies.error) {
    return 'ops something went wrong'
  }
  return (
    <MoviesList movies={discoveryMovies.list} />
  )
}

export default Home
