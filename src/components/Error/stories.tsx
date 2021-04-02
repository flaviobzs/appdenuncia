import { Story, Meta } from '@storybook/react/types-6-0'
import Error from '.'

export default {
  title: 'Error',
  component: Error,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Error {...args} />

Default.args = {
  children: 'error'
}
