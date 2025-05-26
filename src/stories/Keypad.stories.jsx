import '../styles/app.css'
import Keypad from '../components/Keypad'

export default {
  title: 'Components/Keypad',
  component: Keypad,
  tags: ['autodocs']
}

const Template = (args) => <Keypad {...args} />

export const Default = Template.bind({})
Default.args = {
  onPress: (label) => {
    console.log(`Pressed key: ${label}`)
    alert(`Pressed key: ${label}`)
  }
}
