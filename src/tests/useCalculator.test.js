import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react-hooks'
import useCalculator from '../hooks/useCalculator'

describe('useCalculator - Functional Tests', () => {
  it('performs chained operations correctly: 1 + 2 + 3 = 6', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleInput('1')
      result.current.handleInput('+')
      result.current.handleInput('2')
      result.current.handleInput('+')
      result.current.handleInput('3')
      result.current.handleInput('=')
    })

    expect(result.current.display).toBe('6')
  })

  it('returns ERROR when result exceeds 9 digits (e.g. 123456789 + 1)', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      // Enter 123456789
      '123456789'.split('').forEach(d => result.current.handleInput(d))
      result.current.handleInput('+')
      result.current.handleInput('1')
      result.current.handleInput('=')
    })

    expect(result.current.display).toBe('ERROR')
  })

  it('returns ERROR when result is negative (e.g. 4 - 9)', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleInput('4')
      result.current.handleInput('-')
      result.current.handleInput('9')
      result.current.handleInput('=')
    })

    expect(result.current.display).toBe('ERROR')
  })

  it('returns ERROR when performing modulo by zero (e.g. 7 % 0)', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleInput('7')
      result.current.handleInput('%')
      result.current.handleInput('0')
      result.current.handleInput('=')
    })

    expect(result.current.display).toBe('ERROR')
  })
})
