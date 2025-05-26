import { useState } from 'react'

export default function useCalculator () {
  const [display, setDisplay] = useState('0')

  const handleInput = label => {
    console.log('Pressed Button:', label)
    // TODO: Implement calculator logic
  }

  return {
    display,
    handleInput
  }
}
