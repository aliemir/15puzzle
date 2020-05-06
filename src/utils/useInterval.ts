import { useEffect, useRef } from 'react'

type UseIntervalFunction = (callback: () => void, delay: number | null) => void

const useInterval: UseIntervalFunction = (callback, delay) => {
  const savedCallback = useRef<Function | null>(null)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current()
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval
