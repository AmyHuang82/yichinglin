import { useState, useEffect } from 'react'

const useDerivedState = (currentValue, dependencies) => {
  const [state, setState] = useState(currentValue)

  useEffect(() => {
    if (typeof currentValue !== 'function') {
      setState(currentValue)
    }
  }, [currentValue])

  useEffect(() => {
    if (typeof currentValue === 'function') {
      setState(currentValue())
    }
  }, dependencies)

  return [state, setState]
}

export default useDerivedState
