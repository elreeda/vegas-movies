import * as types from 'actions/types'

const initialState = []

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_TO_FAVORITE:
      return [
        ...state,
        payload
      ]

    case types.REMOVE_FROM_FAVORITE:
      return state.filter(movie => movie.id !== payload.id)
  
    default:
      return state
  }
}
