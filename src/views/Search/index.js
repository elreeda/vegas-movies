import React, { useState, useEffect } from 'react'
import qs from 'qs'

import MoviesList from 'components/MoviesList'
import LoadingSpinner from 'components/LoadingSpinner'

const SearchView = (props) => {
  const [ searchResults, setSearchResults ] = useState({
    loading: true,
    error: null,
    list: []
  })
  useEffect(() => {
    const urlQuery = props.location.search.split('?')[1]
    const { q } = qs.parse(urlQuery)

    const searchMovies = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_MOVIE_DB_URL}search/movie?query=${q}&api_key=${process.env.REACT_APP_MOVIE_DB_KEY}`
        )
        const body = await response.json()
        setSearchResults({
          loading: false,
          error: null,
          list: body.results
        })
      } catch (error) {
        setSearchResults({
          list: [],
          loading: false,
          error: 'Opps! osomething went wrong'
        })
      }
    }
    searchMovies()
  }, [props.location.search])

  if (searchResults.loading) {
    return <LoadingSpinner />
  }
  return (
    <MoviesList movies={searchResults.list} />
  )
}

export default SearchView
