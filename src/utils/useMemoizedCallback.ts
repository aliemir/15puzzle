import React, { useRef } from 'react'

interface MemoizedRef {
  callback: null | Function
  handler: null | Function
}

function useMemoizedCallback(cb: (...args: any[]) => void) {
  const data = useRef<MemoizedRef>({ callback: null, handler: null })
  data.current.callback = cb
  if (!data.current.handler) {
    data.current.handler = (...args: any[]) => {
      if (data.current.callback) data.current.callback(...args)
    }
  }
  return data.current.handler
}

export default useMemoizedCallback
