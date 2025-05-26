import { useState } from 'react'

// Custom hook for calculator functionality
// This hook manages the display and input handling for a calculator
export default function useCalculator () {
  // State to manage the display of the calculator
  const [display, setDisplay] = useState('0')
  const [resetNext, setResetNext] = useState(false)

  // Handle the reset button
  const handleInput = label => {
    // Check if the input is a reset command
    if (label === 'AC') {
      setDisplay('0') // Reset the display to '0'
      setResetNext(false) // Reset the flag to not reset next input
      return
    }

    // Handle the digit inputs
    if (/\d/.test(label)) {
      // If the display is '0' or if we need to reset the next input
      // set the display to the new digit or append it
      if (display === '0' || resetNext) {
        setDisplay(label) // Set the display to the new digit
        setResetNext(false) // Reset the flag to not reset next input
      } else if (display.length < 9) {
        // If the display is not '0' and we are not resetting next input,
        // append the new digit to the display
        setDisplay(prev => prev + label)
      }
      return
    }

    // Handle decimal point
    if (label === '.') {
      // If the display is '0' or we need to reset the next input,
      // set the display to '0.' or append '.' if it doesn't already exist
      if (resetNext) {  
        setDisplay('0.')  // Start a new number with '0.'
        setResetNext(false) // Reset the flag to not reset next input
      } else if (!display.includes('.') && display.length < 9) {
        // If the display does not already contain a decimal point
        // and the length is less than 9, append '.'
        setDisplay(prev => prev + '.')
      }
      return
    }

    // TODO: Handle other operations like '+', '-', '*', '/', etc.
    console.log('Pressed Button:', label)
  }

  return {
    display,
    handleInput
  }
}
