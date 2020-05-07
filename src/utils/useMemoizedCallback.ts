import { useRef } from 'react'

interface MemoizedRef {
  callback: null | Function
  handler: null | Function
}

type TBase = (...args: any[]) => any

function useMemoizedCallback<T extends TBase>(cb: T): T {
  const data = useRef<{
    callback: T | null
    handler: T | TBase | null
  }>({ callback: null, handler: null })
  data.current.callback = cb
  if (!data.current.handler) {
    data.current.handler = (...args: any[]): any => {
      if (data.current.callback) data.current.callback(...args)
    }
  }
  return data.current.handler as T
}

export default useMemoizedCallback
