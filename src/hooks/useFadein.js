import { useRef, useEffect } from 'react'

export const useFadein = (duration = 1, delay = 0) => {
  const ref = useRef()
  useEffect(() => {
    if (typeof duration !== 'number' || typeof delay !== 'number') {
      return
    }
    const element = ref.current
    if (element) {
      element.style.transition = `opacity ${duration}s ease-in ${delay}s`
      element.style.opacity = 1
    }
  }, [])
  return { ref: ref, style: { opacity: 0 } }
}
