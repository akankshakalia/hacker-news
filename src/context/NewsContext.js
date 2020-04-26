import createDataContext from './createDataContext'
import { fetch } from '../actions/News'
import { initialState, newsReducer } from '../reducers/News'

export const { Context, Provider } = createDataContext(newsReducer,
  { fetch },
  { ...initialState }
)
