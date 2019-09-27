import React from 'react'
import { connect } from 'react-redux'

import MoviesList from 'components/MoviesList'

const WatchListView = ({ watchList }) => {
  return (
    <MoviesList movies={watchList} />
  )
}

const mapStateToProps = ({ watchList }) => ({ watchList })

export default connect(mapStateToProps)(WatchListView)
