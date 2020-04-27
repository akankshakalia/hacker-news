
const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorage = (key) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}

export const updatePage = (page) => {
  setLocalStorage('page', { num: page })
}

export const getPage = () => {
  return getLocalStorage('page') ? getLocalStorage('page').num : 1
}

export const getHiddenItems = () => {
  return getLocalStorage('hidden-news') ? getLocalStorage('hidden-news') : []
}

export const getVotedItems = () => {
  return getLocalStorage('voted-news') ? getLocalStorage('voted-news') : []
}

export const hideNews = (id) => {
  const items = getLocalStorage('hidden-news') || []
  const found = items.find(item => item === id)
  if (!found) {
    items.push(id)
  }
  setLocalStorage('hidden-news', items)
  return items.find(item=>id===item)
}

export const upVote = (id) => {
  const items = getLocalStorage('voted-news') || []
  let found = false
  items.forEach((item) => {
    if (item.id === id) {
      item.points = item.points + 1
      found = true
    }
  })
  if (!found) {
    items.push({ id: id, points: 1 })
  }
  setLocalStorage('voted-news', items)
  return items.find(item => item.id === id)
}
