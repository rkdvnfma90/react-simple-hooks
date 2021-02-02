import { useEffect } from 'react'

export const useBeforeLeave = (onBefore) => {
  const listener = (event) => {
    const { clientY } = event
    // 마우스 커서가 위로 벗어나면 발생
    if (clientY <= 0) {
      onBefore()
    }
  }
  useEffect(() => {
    if (typeof onBefore !== 'function') {
      return
    }
    document.addEventListener('mouseleave', listener)
    return () => {
      document.removeEventListener('mouseleave', listener)
    }
  }, [])
}
