import { useState } from 'react'

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (event) => {
    const targetValue = event.target.value

    let isValid = true

    if (typeof validator === 'function') {
      isValid = validator(targetValue)
    }
    if (isValid) {
      setValue(targetValue)
    }
  }

  return { value, onChange }
}
