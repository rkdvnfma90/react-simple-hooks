import React from 'react'
import { useInput } from './hooks/useInput.js'

const App = () => {
  const maxLen = (value) => value.length <= 10
  const name = useInput('[lol]', maxLen)

  return (
    <div>
      <h1>React Simple Hooks</h1>
      <input placeholder="Name" {...name} />
    </div>
  )
}

export default App
