import yelp from '../api/yelp'

export const fetch = dispatch => {
  return async (page, callback) => {
    let pageNum = 1
    try {
      dispatch({ type: 'error', payload: null })
      const response = await yelp.get(`/search_by_date?page=${page}&numericFilters=points>0,num_comments>0`)
      pageNum = (response && response.data) ? (response.data.page || 1) : 1
      dispatch({ type: 'fetch_news', payload: response.data })
    } catch (err) {
      dispatch({ type: 'error', payload: err })
    }

    callback(pageNum)
  }
}
