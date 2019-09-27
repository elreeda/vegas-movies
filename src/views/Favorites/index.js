import React from 'react'
import { connect } from 'react-redux'

import MoviesList from 'components/MoviesList'

const Favorites = ({ favorites }) => {
  return (
    <MoviesList movies={favorites} />
  )
}

const mapStateToProps = ({ favorites }) => ({ favorites })

export default connect(mapStateToProps)(Favorites)
