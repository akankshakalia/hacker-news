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
      case 'upvote':
      const hits = state.hits
      hits.forEach(item => {
        if(item.objectID === action.payload.id)
        item.points = item.points + 1
      });
      return {
        ...state,
         hits
      }
    default:
      return state
  }
}
