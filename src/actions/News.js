import yelp from '../api/yelp'
import { getHiddenItems, getVotedItems } from '../services/LocalStorage'

export const fetch = dispatch => {
  return async (page, callback) => {
    let pageNum = 1
    try {
      dispatch({ type: 'error', payload: null })
      const response = await yelp.get(`/search_by_date?numericFilters=points>0,num_comments>0&page=${page}`)
      pageNum = (response && response.data) ? (response.data.page || 1) : 1
      const removedItems = response.data.hits.filter((item) => {
        return !getHiddenItems().some(v => v === item.objectID)
      })
      const data = {
        hits: removedItems,
        page: response.data.page,
        nbPages: response.data.nbPages
      }

      data.hits.forEach(item => {
        const found = getVotedItems().find(voted => voted.id === item.objectID)
        if (found) { item.points = item.points + found.points }
      })

      dispatch({ type: 'fetch_news', payload: data })
    } catch (err) {
      dispatch({ type: 'error', payload: err })
    }

    callback(pageNum)
  }
}

export const upVote = dispatch => {
  return async (item, callback) => {
    dispatch({ type: 'upvote', payload: { ...item } })
    callback()
  }
}

export const hideItem = dispatch => {
  return async (item, callback) => {
    dispatch({ type: 'hide-item', payload: item })
    callback()
  }
}
