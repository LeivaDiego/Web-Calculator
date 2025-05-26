import Button from './Button'
// This component renders a keypad with buttons for a calculator.
const buttons = [
  ['AC', '%', '+/-', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']
]

export default function Keypad ({ onPress }) {
  return (
    <>
      {buttons.flat().map(label => (
        <Button key={label} label={label} onClick={onPress} className={label === '=' ? 'wide': ''} />
      ))}
    </>
  )
}
