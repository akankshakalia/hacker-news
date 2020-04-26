export const formatDate = (unformattedDate) => {
  if (!unformattedDate) { return new Date() }
  const day = unformattedDate.slice(0, 2)
  const month = unformattedDate.slice(3, 5)
  const year = unformattedDate.slice(6, 10)
  const time = unformattedDate.slice(11)
  return `${year}-${month}-${day}T${time}+05:30`
}
export const formatDistance = (diff, format) => {
  const time = format === 'hour' ? Math.round(diff / 60) : diff
  return time > 1 ? `${time} ${format}s ago` : `${time} ${format} ago`
}
