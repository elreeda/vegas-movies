import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  movies: () => ({}),
  trending: () => ({}),
  watchList: () => ({}),
  favorites: () => ({})
})

export default rootReducer
