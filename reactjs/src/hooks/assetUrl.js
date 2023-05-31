const API_URL = process.env.REACT_APP_API_URL ?? 'http://localhost:3000'

export const getImageUrl = (name) => {
  return `${API_URL}/images/large/${name}`
}

export const getThumbnailUrl = (name) => {
  return `${API_URL}/images/thumbnails/${name}`
}
