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
})
