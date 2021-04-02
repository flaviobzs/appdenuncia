import { Story, Meta } from '@storybook/react/types-6-0'
import InputText from '.'

export default {
  title: 'InputText',
  component: InputText
} as Meta

export const Default: Story = (args) => {
  return <InputText name="teste" error="teste" placeholder="teste" {...args} />
}

Default.args = {}
