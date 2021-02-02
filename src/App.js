import React from 'react'
import { useInput } from './hooks/useInput.js'
import { useTabs } from './hooks/useTabs.js'
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
  const { currentItem, changeItem } = useTabs(0, content)

  return (
    <div className="app-main">
      <h1 className="app-title">React Simple Hooks</h1>

      <section className="app-hooks">
        <h3 className="app-desc">useInput : </h3>
        <input placeholder="Name" {...name} />
      </section>

      <section className="app-hooks">
        <h3 className="app-desc">useTab : </h3>
        {content.map((section, index) => (
          <button key={index} onClick={() => changeItem(index)}>
            {section.tab}
          </button>
        ))}
        {currentItem.content}
      </section>
    </div>
  )
}

export default App
