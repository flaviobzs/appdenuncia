import { Story, Meta } from '@storybook/react/types-6-0'
import DisplayLoader from '.'

export default {
  title: 'DisplayLoader',
  component: DisplayLoader,
  
} as Meta

export const Default: Story = (args) => <DisplayLoader {...args} />

Default.args = {
  // children: 'Confirmar',
}
