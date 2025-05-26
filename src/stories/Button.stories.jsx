import Button from '../components/Button'
import '../styles/app.css'

export default {
  title: 'Components/Button',
  component: Button
}

const Template = (args) => <Button {...args} />

export const Digit = Template.bind({})
Digit.args = {
  label: '7',
  onClick: () => alert('Clicked digit 7')
}

export const Operator = Template.bind({})
Operator.args = {
  label: '+',
  onClick: () => alert('Clicked operator +')
}

export const Equal = Template.bind({})
Equal.args = {
  label: '=',
  onClick: () => alert('Clicked =')
}

export const Clear = Template.bind({})
Clear.args = {
  label: 'AC',
  onClick: () => alert('Clicked AC')
}

export const Decimal = Template.bind({})
Decimal.args = {
  label: '.',
  onClick: () => alert('Clicked decimal point')
}

export const Negate = Template.bind({})
Negate.args = {
  label: '+/-',
  onClick: () => alert('Clicked +/−')
}

export const Modulo = Template.bind({})
Modulo.args = {
  label: '%',
  onClick: () => alert('Clicked %')
}
