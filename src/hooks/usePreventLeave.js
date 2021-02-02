export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault()
    event.returnValue = '' // beforeunload에 설정해야 한다.
  }
  const enablePrevent = () => window.addEventListener('beforeunload', listener)
  const disablePrevent = () =>
    window.removeEventListener('beforeunload', listener)

  return { enablePrevent, disablePrevent }
}
