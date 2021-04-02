import { Story, Meta } from '@storybook/react/types-6-0'
import InputPassword from '.'

export default {
  title: 'InputPassword',
  component: InputPassword
} as Meta

export const Default: Story = (args) => <InputPassword name="teste" {...args} />
