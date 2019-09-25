import { combineReducers } from 'redux'

import favorites from './favoriteMovies'

const rootReducer = combineReducers({
  watchList: () => ({}),
  favorites
})

export default rootReducer
