import { storageKeys } from '../constants/default'

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}

export const updatePage = (page) => {
  setLocalStorage(storageKeys.PAGE, { num: page })
}

export const getPage = () => {
  return getLocalStorage(storageKeys.PAGE) ? getLocalStorage(storageKeys.PAGE).num : 1
}

export const getHiddenItems = () => {
  return getLocalStorage(storageKeys.HIDDEN_ITEMS) ? getLocalStorage(storageKeys.HIDDEN_ITEMS) : []
}

export const getVotedItems = () => {
  return getLocalStorage(storageKeys.VOTED_ITEMS) ? getLocalStorage(storageKeys.VOTED_ITEMS) : []
}

export const hideNews = (id) => {
  const items = getLocalStorage(storageKeys.HIDDEN_ITEMS) || []
  const found = items.find(item => item === id)
  if (!found) {
    items.push(id)
  }
  setLocalStorage(storageKeys.HIDDEN_ITEMS, items)
  return items.find(item => id === item)
}

export const upVote = (id) => {
  const items = getLocalStorage(storageKeys.VOTED_ITEMS) || []
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
  setLocalStorage(storageKeys.VOTED_ITEMS, items)
  return items.find(item => item.id === id)
}
