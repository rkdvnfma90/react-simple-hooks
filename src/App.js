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
import { useScroll } from './hooks/useScroll.js'
import { useFullscreen } from './hooks/useFullscreen.js'
import { useNotification } from './hooks/useNotification.js'
import { useAxios } from './hooks/useAxios.js'
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

  /* useScroll */
  const { y } = useScroll()

  /* useFullscreen */
  const onFullscreen = (isFull) => {
    console.log(isFull ? '풀스크린 입니다.' : '풀스크린이 아닙니다.')
  }
  const { fullScreenElement, triggerFull, exitFull } = useFullscreen(
    onFullscreen
  )
  const fullScreenButton = useClick(triggerFull)
  const exitFullScreenButton = useClick(exitFull)

  /* useNotification */
  const options = { body: '축하드립니다.' }
  const triggerNotification = useNotification('합격하셨습니다.', options)
  const notiButton = useClick(triggerNotification)

  /* useAxios */
  const { loading, data, error, refetch } = useAxios({
    url: 'https://jsonplaceholder.typicode.com/posts',
  })
  const reFetchButton = useClick(refetch)

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

      {/* useScroll */}
      <section className="app-hooks">
        <h2
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            color: y > 100 ? 'red' : 'blue',
          }}
        >
          ⚡Conor Mcgregor⚡
        </h2>
      </section>

      {/* useFullscreen */}
      <section className="app-hooks">
        <div ref={fullScreenElement}>
          <img
            src="https://post-phinf.pstatic.net/MjAyMDAxMjFfMzAw/MDAxNTc5NTg4MTMzMjgy.ePw8U5DSAFGeXC6zd3v45-MGkXOX3h7UIxhOrw6onYUg.h-tiamMAtqU3vLDg7V7YcBtait7mDbjuBITflu2QM88g.JPEG/571dadc12c3b94df40c354c6424528d3.jpg?type=w1200"
            alt="conor"
          />
          <button ref={exitFullScreenButton}>Exit Fullscreen!</button>
        </div>
        <button ref={fullScreenButton}>Make Fullscreen!</button>
      </section>

      {/* useNotification */}
      <section className="app-hooks">
        <button ref={notiButton}>Notification!</button>
      </section>

      {/* useAxios */}
      <section className="app-hooks">
        <div>
          <h2>status : {data && data.status}</h2>
          <h2>loading : {loading && '로딩중...'}</h2>
          <button ref={reFetchButton}>Re fetch</button>
        </div>
      </section>
    </div>
  )
}

export default App
