import { Story, Meta } from '@storybook/react/types-6-0'
import Description from '.'

export default {
  title: 'Description',
  component: Description
} as Meta

export const Default: Story = () => <Description>xxxxxxxxxx</Description>
export const WithTooltip: Story = () => (
  <Description tooltipText="xxxxxx">xxxxxxxxxx</Description>
)
