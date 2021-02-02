import React from 'react'
import { useInput } from './hooks/useInput.js'
import { useTabs } from './hooks/useTabs.js'
import { useTitle } from './hooks/useTitle.js'
import { useClick } from './hooks/useClick.js'
import { useConfirm } from './hooks/useConfirm.js'
import { usePreventLeave } from './hooks/usePreventLeave.js'
import { useBeforeLeave } from './hooks/useBeforeLeave.js'
import { useFadein } from './hooks/useFadein.js'
import { useNetwork } from './hooks/useNetwork.js'
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

  /* usePreventLeave */
  const { enablePrevent, disablePrevent } = usePreventLeave()
  const protectClick = useClick(enablePrevent)
  const unProtectClick = useClick(disablePrevent)

  /* useBeforeLeave */
  const begForLife = () => console.log("Please Don't leave ")
  useBeforeLeave(begForLife)

  /* useFadein */
  const fadeinH2 = useFadein(2, 2)
  const fadeinP = useFadein(5, 10)

  /* useNetwork */
  const handleNetworkChange = (online) => {
    console.log(online ? '온라인 입니다.' : '오프라인 입니다.')
  }
  const online = useNetwork(handleNetworkChange)

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

      {/* usePreventLeave */}
      <section className="app-hooks">
        <button ref={protectClick}>Protect</button>
        <button ref={unProtectClick}>Unprotect</button>
      </section>

      {/* useFadein */}
      <section className="app-hooks">
        <h3 {...fadeinH2}>Suprise!!</h3>
        <p {...fadeinP}>lorem ipsum....</p>
      </section>

      {/* useNetwork */}
      <section className="app-hooks">{online ? 'online' : 'offline'}</section>
    </div>
  )
}

export default App
