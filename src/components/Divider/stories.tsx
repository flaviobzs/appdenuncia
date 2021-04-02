import { Story, Meta } from '@storybook/react/types-6-0'
import Divider from '.'

export default {
  title: 'Divider',
  component: Divider,
  argTypes: {
    theme: {
      control: {
        type: 'radio',
        options: ['dark', 'light'],
      },
    },
  },
} as Meta

export const Default: Story = (args) => <Divider theme="dark" {...args} />

Default.args = {
  theme: 'dark',
}

export const Light: Story = (args) => <Divider theme="light" {...args} />

Light.args = {
  theme: 'light',
}
