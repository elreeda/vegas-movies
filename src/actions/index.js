import * as types from './types'

export const getDiscoveryMovies = () => {
  return async (dispatch) => {
    dispatch({
      type: types.GET_DISCOVERY_MOVIES
    })
    try {
      const response = await fetch(`${process.env.REACT_APP_MOVIE_DB_URL}discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&sort_by=popularity.desc`)
      const body = await response.json()
      dispatch({
        type: types.GET_DISCOVERY_MOVIES_SUCCESS,
        payload: body
      })
    } catch (error) {
      dispatch({
        type: types.GET_DISCOVERY_MOVIES_FAILS,
        payload: 'Opps! something went wrong.'
      })
    }
  }
}

export const getTrendingMovies = () => {
  return async (dispatch) => {
    dispatch({
      type: types.GET_TRENDING_MOVIES
    })
    try {
      const response = await fetch(`${process.env.REACT_APP_MOVIE_DB_URL}trending/movie/week?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}`)
      const body = await response.json()
      dispatch({
        type: types.GET_TRENDING_MOVIES_SUCCESS,
        payload: body
      })
    } catch (error) {
      dispatch({
        type: types.GET_TRENDING_MOVIES_SUCCESS,
        payload: 'Opps! something went wrong.'
      })
    }
  }
}
