import * as types from './types'

export const addToWatchList = (movie) => {
  return {
    type: types.ADD_TO_WATCHLIST,
    payload: movie
  }
}

export const removeFromWatchList = (movie) => {
  return {
    type: types.REMOVE_FROM_WATCHLIST,
    payload: movie
  }
}

export const addToFavorite = (movie) => {
  return {
    type: types.ADD_TO_FAVORITE,
    payload: movie
  }
}

export const removeFromFavorite = (movie) => {
  return {
    type: types.REMOVE_FROM_FAVORITE,
    payload: movie
  }
}
