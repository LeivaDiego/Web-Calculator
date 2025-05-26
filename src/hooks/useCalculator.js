import { useState } from 'react'

// Custom hook for calculator functionality
// This hook manages the display and input handling for a calculator
export default function useCalculator () {
  // State to manage the display of the calculator
  const [display, setDisplay] = useState('0')
  const [resetNext, setResetNext] = useState(false)

  // States to manage previous value and operator for calculations
  const [prevValue, setPrevValue] = useState(null)
  const [operator, setOperator] = useState(null)

  // Manage calculations
  const calculate = () => {
    if (prevValue === null || operator === null) return display

    const a = parseFloat(prevValue)
    const b = parseFloat(display)
    let result = 0

    switch (operator) {
      case '+': result = a + b; break
      case '-': result = a - b; break
      case '*': result = a * b; break
      case '/': result = b === 0 ? 'ERROR' : a / b; break
      default: return display
    }

    // Check if the result is a valid number
    if (typeof result === 'number' && !isNaN(result)) {
      // Check if the result exceeds 9 characters or is negative
      if (result < 0 || result > 999999999) return 'ERROR'

      // Convert the result to a string 
      // and split it into integer and decimal parts
      const resultStr = result.toString()
      const [intPart, decimalPart] = resultStr.split('.')

      // Check if the number is an integer only
      if (!decimalPart) return resultStr.length > 9 ? 'ERROR' : resultStr

      const allowedDecimalLength = 9 - intPart.length - 1 // 1 for the decimal point

      // Check if the decimal part exceeds the allowed length
      if (allowedDecimalLength <= 0) return 'ERROR'

      const trimmedDecimal = `${intPart}.${decimalPart.slice(0, allowedDecimalLength)}`
      return trimmedDecimal

    }
    return result
  }


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

    // Handle basic operator inputs
    if (['+', '-', '*', '/'].includes(label)) {
      if (operator && !resetNext) {
        const result = calculate()
        setDisplay(result)
        setPrevValue(result)
      } else {
        setPrevValue(display)
      }
      setOperator(label)
      setResetNext(true)
      return
    }


    // Handle equals button
    if (label === '=') {
      if (!operator || prevValue === null) return

      const result = calculate()
      setDisplay(result)
      setPrevValue(null)
      setOperator(null)
      setResetNext(true)
      return
    }

    console.log('Pressed Button:', label)
  }

  return {
    display,
    handleInput
  }
}
