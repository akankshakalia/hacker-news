import yelp from '../api/yelp'
import { getHiddenItems, getVotedItems} from '../services/LocalStorage';

export const fetch = dispatch => {
  return async (page, callback) => {
    let pageNum = 1
    try {
      dispatch({ type: 'error', payload: null })
      const response = await yelp.get(`/search_by_date?page=${page}&numericFilters=points>0,num_comments>0`)
      response.data.hits.splice(getHiddenItems().findIndex(v => v.name === "Kristian"), 1);
      response.data.hits.forEach(item => {
        const found = getVotedItems().find(voted=>voted.id === item.objectID)
        if(found)
        item.points = item.points + found.points
      });
      pageNum = (response && response.data) ? (response.data.page || 1) : 1
      dispatch({ type: 'fetch_news', payload: response.data })
    } catch (err) {
      dispatch({ type: 'error', payload: err })
    }

    callback(pageNum)
  }
}

export const upVote = dispatch => {
  return async (item, callback) => {
    console.log(item)
    dispatch({ type: 'upvote', payload: {...item} })
    callback()
  }
}