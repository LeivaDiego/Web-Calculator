import Keypad from './Keypad'
import useCalculator from '../hooks/useCalculator'
import Display from './Display'

export default function Calculator () {
  const { display, handleInput } = useCalculator()

  return (
    <div className='calculator'>
      <Display value={display} />
      <div className='keypad'>
        <Keypad onPress={handleInput} />
      </div>
    </div>
  )
}
