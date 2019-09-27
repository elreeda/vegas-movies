import React from 'react'

import MovieCard from 'components/MovieCard'
import { StyleBase } from './style'

const MoviesList = ({ movies }) => {
  return (
    <StyleBase>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </StyleBase>
  )
}

export default MoviesList
