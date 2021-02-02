import React from 'react'
import { useInput } from './hooks/useInput.js'
import './App.css'

const App = () => {
  /* useInput */
  const maxLen = (value) => value.length <= 10
  const name = useInput('[lol]', maxLen)

  /* useTabs */
  const content = [
    {
      tab: 'section 1',
      content: '섹션 1 입니다.',
    },
    {
      tab: 'section 2',
      content: '섹션 2 입니다.',
    },
  ]

  return (
    <div className="app-main">
      <h1 className="app-title">React Simple Hooks</h1>
      <section className="app-hooks">
        <h3 className="app-desc">useInput : </h3>
        <input placeholder="Name" {...name} />
      </section>
    </div>
  )
}

export default App
