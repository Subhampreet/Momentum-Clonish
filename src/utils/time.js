export const ONE_SECOND = 1000
export const TEN_MINUTES = 10 * 60 * 1000
export const HALF_HOUR = 30 * 60 * 1000
export const ONE_HOUR = 60 * 60 * 1000

export const getTime = (locale) => {
  return new Date().toLocaleTimeString(locale)
}

export const getHours = () => {
  return new Date().getHours()
}