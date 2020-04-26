export const initialState = {
  hits: [],
  page: 1
}
export const newsReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_news':
      return {
        ...state,
        hits: action.payload.hits,
        page: action.payload.page,
        nbPages: action.payload.nbPages,
        hitsPerPage: action.payload.hitsPerPage,
        error: null
      }
    case 'error':
      return {
        ...state,
        error: action.payload
      }
    case 'reset_page':
      return {
        ...state,
        paage: action.payload
      }
    default:
      return state
  }
}
