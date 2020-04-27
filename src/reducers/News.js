
import { actions } from '../constants/default'
export const initialState = {
  hits: [],
  page: 1
}
export const newsReducer = (state, action) => {
  switch (action.type) {
    case actions.FETCH_NEWS:
      return {
        ...state,
        hits: action.payload.hits,
        page: action.payload.page,
        nbPages: action.payload.nbPages,
        hitsPerPage: action.payload.hitsPerPage,
        error: null
      }
    case actions.ERROR:
      return {
        ...state,
        error: action.payload
      }
    case actions.UPVOTE:
      state.hits.forEach(item => {
        if (item.objectID === action.payload.id) {
          item.points = item.points + 1
        }
      })
      return {
        ...state
      }
    case actions.HIDE_ITEM:
      return {
        ...state,
        hits: state.hits.filter((item) => { return item.objectID !== action.payload })
      }
    default:
      return state
  }
}
