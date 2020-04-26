export const formatDistance = (diff, format) => {
  const time = format === 'hour' ? Math.round(diff / 60) : diff
  return time > 1 ? `${time} ${format}s ago` : `${time} ${format} ago`
}
