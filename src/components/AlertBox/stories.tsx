import { Story, Meta } from '@storybook/react/types-6-0'
import AlertBox from '.'

export default {
  title: 'AlertBox',
  component: AlertBox,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta

export const Default: Story = (args) => <AlertBox {...args} />
