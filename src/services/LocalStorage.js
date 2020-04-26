
export const updatePage = (page) => {
  localStorage.setItem('page', page)
}

export const currentPage = () => {
  return localStorage.getItem('page')
}
