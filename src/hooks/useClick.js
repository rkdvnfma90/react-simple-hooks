import { useEffect, useRef } from 'react'

export const useClick = (onClick) => {
  const ref = useRef()

  useEffect(() => {
    if (typeof onClick !== 'function') {
      return
    }
    /*
        The ref value 'element.current' will likely have changed by the time this effect cleanup function runs. 
        If this ref points to a node rendered by React, copy 'element.current' to a variable inside the effect, 
        and use that variable in the cleanup function
        해당 변수를 안에서 copy 하지 않으면 (element = ref.current) ref가 unmount 시점에 null이 되므로 copy 해야 한다.
    */
    const element = ref.current
    if (element) {
      element.addEventListener('click', onClick)
    }
    // cleanup
    return () => {
      if (element) {
        element.removeEventListener('click', onClick)
      }
    }
  }, [])
  return ref
}
