import { combineReducers } from 'redux'

import favorites from './favoriteMovies'
import watchList from './watchList'

const rootReducer = combineReducers({
  watchList,
  favorites
})

export default rootReducer
