import { useRef } from 'react'

export const useFullscreen = (callback) => {
  const fullScreenElement = useRef()
  const triggerFull = () => {
    if (fullScreenElement && fullScreenElement.current) {
      if (fullScreenElement.current.requestFullscreen) {
        fullScreenElement.current.requestFullscreen()
      } else if (fullScreenElement.current.mozRequestFullScreen) {
        fullScreenElement.current.mozRequestFullScreen()
      } else if (fullScreenElement.current.webkitRequestFullscreen) {
        fullScreenElement.current.webkitRequestFullscreen()
      } else if (fullScreenElement.current.msRequestFullscreen) {
        fullScreenElement.current.msRequestFullscreen()
      }

      if (callback && typeof callback === 'function') {
        callback(true)
      }
    }
  }
  const exitFull = () => {
    document.exitFullscreen()
    if (callback && typeof callback === 'function') {
      callback(false)
    }
  }

  return { fullScreenElement, triggerFull, exitFull }
}
