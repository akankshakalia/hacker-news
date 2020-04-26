import createDataContext from './createDataContext'
import data from '../resources/data.json'
const newsReducer = (state, action) => {
  switch (action.type) {
    case 'add_news':
      return [...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ]
    default:
      return state
  }
}
const addNews = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_news', payload: { title, content } })
    callback()
  }
}

export const { Context, Provider } = createDataContext(newsReducer,
  { addNews },
  { data }
)
