import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import useCalculator from '../hooks/useCalculator'

const inputSequence = (result, sequence) => {
  for (const input of sequence) {
    act(() => result.current.handleInput(input))
  }
}

describe('useCalculator - Functional Tests', () => {
  it('performs chained operations correctly', () => {
    const { result } = renderHook(() => useCalculator())
    inputSequence(result, ['4', '-', '3', '+', '5','*','6','/','2', '='])
    expect(result.current.display).toBe('18')
  })

  it('returns ERROR when result exceeds 9 digits', () => {
    const { result } = renderHook(() => useCalculator())
    inputSequence(result, [...'999999999', '+', '1', '='])
    expect(result.current.display).toBe('ERROR')
  })

  it('returns ERROR when result is negative', () => {
    const { result } = renderHook(() => useCalculator())
    inputSequence(result, ['4', '-', '9', '='])
    expect(result.current.display).toBe('ERROR')
  })

  it('returns ERROR when performing division by zero', () => {
    const { result } = renderHook(() => useCalculator())
    inputSequence(result, ['7', '/', '0', '='])
    expect(result.current.display).toBe('ERROR')
  })

  it('ignores operation if no number is entered yet', () => {
  const { result } = renderHook(() => useCalculator())
  inputSequence(result, ['+', '5', '='])
  expect(result.current.display).toBe('5')
  })

  it('handles multiple operators pressed consecutively', () => {
    const { result } = renderHook(() => useCalculator())
    inputSequence(result, ['5', '+', '-', '*', '2', '='])
    expect(result.current.display).toBe('10')
  })


  it('clears all state on AC during operation', () => {
    const { result } = renderHook(() => useCalculator())
    inputSequence(result, ['8', '*', 'AC', '7', '='])
    expect(result.current.display).toBe('7')
  })


  it('handles long decimal results and truncates correctly', () => {
    const { result } = renderHook(() => useCalculator())
    inputSequence(result, ['2', '/', '3', '='])
    expect(result.current.display.length).toBeLessThanOrEqual(9)
    expect(result.current.display).toMatch(/^\d+\.\d+$/)
  })

  it('handles sign change before and after operations', () => {
    const { result } = renderHook(() => useCalculator())
    inputSequence(result, ['8', '+/-', '+', '2', '='])
    expect(result.current.display).toBe('ERROR')
  })

  it('does not allow multiple decimal points', () => {
    const { result } = renderHook(() => useCalculator())
    inputSequence(result, ['1', '.', '2', '.', '3'])
    expect(result.current.display).toBe('1.23')
  })


  it('chains calculations using previous result', () => {
    const { result } = renderHook(() => useCalculator())
    inputSequence(result, ['3', '+', '3', '=', '*', '2', '='])
    expect(result.current.display).toBe('12')
  })

})
