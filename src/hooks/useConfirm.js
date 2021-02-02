export const useConfirm = (message = '', onConfirm, onCancel) => {
  // onConfirm이 반값으로 들어오면 typeOf가 undefined이기 때문에 별도로 체크 안함.
  if (typeof onConfirm !== 'function') {
    return
  }

  // onCancel은 필수가 아니기 때문에 없으면 pass
  if (onCancel && typeof onCancel !== 'function') {
    return
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm()
    } else {
      onCancel()
    }
  }

  return confirmAction
}
