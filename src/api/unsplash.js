import { getRandomInt } from '../utils/random'

const UNSPLASH_URLS = [
  'https://source.unsplash.com/random/1920x1080/?landscape',
  'https://source.unsplash.com/random/1920x1080/?nature',
  'https://source.unsplash.com/random/1920x1080/?desert',
  'https://source.unsplash.com/random/1920x1080/?mountain',
  'https://source.unsplash.com/random/1920x1080/?beach',
  'https://source.unsplash.com/random/1920x1080/?tropical',
  'https://source.unsplash.com/random/1920x1080/?forest',
  'https://source.unsplash.com/random/1920x1080/?trees',
]

export const getRandomUrl = () => {
  const randomIndex = getRandomInt(0, UNSPLASH_URLS.length - 1)

  return UNSPLASH_URLS[randomIndex]
}

export const fetchRandomLandscape = async () => {
  try {
    const { url } = await fetch(getRandomUrl())

    return url
  } catch (error) {
    console.error(error)
  }
}