import { Story, Meta } from '@storybook/react/types-6-0'
import InputDescription from '.'

export default {
  title: 'InputDescription',
  component: InputDescription
} as Meta

export const Default: Story = (args) => {
  return (
    <InputDescription
      name="teste"
      placeholder="teste"
      {...args}
    />
  )
}

Default.args = {}

export const WithError: Story = (args) => {
  return (
    <InputDescription
      name="teste"
      error="teste"
      placeholder="teste"
      {...args}
    />
  )
}

WithError.args = {}
