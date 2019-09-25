import React from 'react'

import MovieCard from 'components/MovieCard'
import { StyleBase } from './style'

const MoviesList = ({ movies }) => {
  return (
    <StyleBase>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          poster={movie.poster_path}
          title={movie.original_title}
          releaseDate={movie.release_date}
          avgVote={movie.vote_average}
        />
      ))}
    </StyleBase>
  )
}

export default MoviesList
