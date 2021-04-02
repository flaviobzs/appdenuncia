import { Story, Meta } from '@storybook/react/types-6-0'
import Card from '.'

export default {
  title: 'Card',
  component: Card,  
  parameters: {
    layout: 'centered',
  },
} as Meta

export const Default: Story = (args) => <Card {...args} />

Default.args = {
  children: 'teste com card'
}