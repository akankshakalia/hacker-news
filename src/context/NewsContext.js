import createDataContext from './createDataContext'
import { fetch, upVote } from '../actions/News'
import { initialState, newsReducer } from '../reducers/News'

export const { Context, Provider } = createDataContext(newsReducer,
  { fetch, upVote },
  { ...initialState }
)
