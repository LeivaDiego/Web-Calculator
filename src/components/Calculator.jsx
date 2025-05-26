import Keypad from './Keypad'

export default function Calculator () {
  const handleButton = label => {
    console.log('Presionaste:', label)
  }

  return (
    <div className='calculator'>
      <div className='display'>0</div>
      <div className='keypad'>
        <Keypad onPress={handleButton} />
      </div>
    </div>
  )
}
