import { useState, useEffect } from 'react'

export default () => {
  const [focused, setFocused] = useState<boolean>(document.hasFocus())

  useEffect(() => {
    const onFocus = () => {
      setFocused(true)
    }

    const onBlur = () => {
      setFocused(false)
    }

    window.addEventListener('focus', onFocus)
    window.addEventListener('blur', onBlur)

    return () => {
      window.removeEventListener('focus', onFocus)
      window.removeEventListener('blur', onBlur)
    }
  }, [])

  return focused
}
