import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import LoadingSpinner from 'components/LoadingSpinner'

import { StyleBase, Poster, Details, Genres, Stars } from './style'

const MovieView = (props) => {
  const [movieDetails, setmovieDetails] = useState({
    loading: true,
    error: null,
    data: null
  })

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_MOVIE_DB_URL}movie/${props.match.params.id}?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}`
        )
        const body = await response.json()
        setmovieDetails({
          loading: false,
          error: null,
          data: body
        })
      } catch (error) {
        setmovieDetails({
          data: [],
          loading: false,
          error: 'Opps! osomething went wrong'
        })
      }
    }
    fetchTrending()
  }, [props.match.params.id])

  if (movieDetails.loading) {
    return <LoadingSpinner />
  }
  if (movieDetails.data && movieDetails.data.status_code === 34) {
    return <Redirect to="/" />
  }
  const movie = movieDetails.data
  console.log(movie)
  return (
    <StyleBase>
      <Poster img={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} />
      <Details>
        <h3>{movie.title}</h3>
        <div>
          <span>{movie.release_date}</span>
          <span className="dot-separator">•</span>
          <span>{movie.runtime} min</span>
          <span className="dot-separator">•</span>
          <Genres>
            {movie.genres.map(genre => <span key={genre.id}>{genre.name}</span>)}
          </Genres>
          <span className="dot-separator">•</span>
          <Stars value={movie.vote_average * 10} />
        </div>
        <p>
          {movie.overview}
        </p>
      </Details>
    </StyleBase>
  )
}

export default MovieView
