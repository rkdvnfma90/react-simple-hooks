import React from 'react'
import { useInput } from './hooks/useInput.js'
import { useTabs } from './hooks/useTabs.js'
import { useTitle } from './hooks/useTitle.js'
import { useClick } from './hooks/useClick.js'
import './App.css'
import { useConfirm } from './hooks/useConfirm.js'

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

  /* useTitle */
  const titleUpdater = useTitle('Loading...')
  setTimeout(() => titleUpdater('Home'), 1000)

  /* useClick */
  const sayConor = () => {
    console.log('Conor mcgregor')
  }
  const title = useClick(sayConor)

  /* useConfirm */
  const theKing = () => console.log('Suprise Suprise The King is back!')
  const abort = () => console.log('bye!')
  const enterTheOctagon = useConfirm(
    'Would you like to enter the Octagon?',
    theKing,
    abort
  )
  const octagon = useClick(enterTheOctagon)

  return (
    <div className="app-main">
      <h1 className="app-title">React Simple Hooks</h1>

      {/* useInput */}
      <section className="app-hooks">
        <h3 className="app-desc">useInput : </h3>
        <input placeholder="Name" {...name} />
      </section>

      {/* useTab */}
      <section className="app-hooks">
        <h3 className="app-desc">useTab : </h3>
        {content.map((section, index) => (
          <button key={index} onClick={() => changeItem(index)}>
            {section.tab}
          </button>
        ))}
        {currentItem.content}
      </section>

      {/* useClick */}
      <section className="app-hooks">
        <h3 ref={title}>Suprise Suprise The King is back!</h3>
      </section>

      {/* useConfirm */}
      <section className="app-hooks">
        <button ref={octagon}>The King!</button>
      </section>
    </div>
  )
}

export default App
