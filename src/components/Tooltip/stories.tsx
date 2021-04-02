import { Story, Meta } from '@storybook/react/types-6-0'
import Tooltip from '.'

export default {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered'
  }
} as Meta

export const Left: Story = (args) => (
  <Tooltip id="teste" direction="left" {...args} />
)

export const Right: Story = (args) => (
  <Tooltip id="teste" direction="right" {...args} />
)
