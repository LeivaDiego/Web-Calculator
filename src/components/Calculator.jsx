import Keypad from './Keypad'
import useCalculator from '../hooks/useCalculator'

export default function Calculator () {
  const { display, handleInput } = useCalculator()

  return (
    <div className='calculator'>
      <div className='display'>{display}</div>
      <div className='keypad'>
        <Keypad onPress={handleInput} />
      </div>
    </div>
  )
}
