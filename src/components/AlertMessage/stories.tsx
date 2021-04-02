import { Story, Meta } from '@storybook/react/types-6-0'
import AlertMessage from '.'

export default {
  title: 'AlertMessage',
  component: AlertMessage,
  argTypes: {
    children: {
      type: 'string',
    },
    status: {
      control: {
        type: 'radio',
        options: ['success', 'error', 'alert'],
      },
    },
  },
} as Meta

export const Alert: Story = (args) => <AlertMessage status="alert" {...args} />

Alert.args = {
  children: 'Atention',
  status: 'alert',
}

export const Success: Story = (args) => (
  <AlertMessage status="success" {...args} />
)

Success.args = {
  children: 'Atention',
  status: 'success',
}

export const Error: Story = (args) => <AlertMessage status="error" {...args} />

Error.args = {
  children: 'Atention',
  status: 'error',
}
