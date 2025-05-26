import Display from '../components/Display'
import '../styles/app.css'

export default {
  title: 'Components/Display',
  component: Display
}

export const Default = {
  args: {
    value: '123'
  }
}

export const Error = {
  args: {
    value: 'ERROR'
  }
}
