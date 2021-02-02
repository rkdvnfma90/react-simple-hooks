import { useState, useEffect } from 'react'

export const useNetwork = (onChangeOnline) => {
  const [status, setStatus] = useState(navigator.onLine) // 브라우저의 온라인 여부
  const listener = () => {
    if (typeof onChangeOnline === 'function') {
      onChangeOnline(navigator.onLine)
    }
    setStatus(navigator.onLine)
  }
  useEffect(() => {
    window.addEventListener('online', listener)
    window.addEventListener('offline', listener)
    return () => {
      window.removeEventListener('online', listener)
      window.removeEventListener('offline', listener)
    }
  }, [])
  return status
}
