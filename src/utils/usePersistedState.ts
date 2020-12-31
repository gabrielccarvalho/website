import { useState, useEffect } from 'react'

export default function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(() => {
    if (typeof window !== 'undefined') {
      const storageValue = localStorage.getItem(key)
      
      if (storageValue) {
        return JSON.parse(storageValue)
      } else {
        return initialState
      }
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
