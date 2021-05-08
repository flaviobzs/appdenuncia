import { Story, Meta } from '@storybook/react/types-6-0'
import InputSelect from '.'

export default {
  title: 'InputSelect',
  component: InputSelect
} as Meta

const colourOptions = [
  {
    label: 'Orange',
    value: 'orange'
  },
  {
    label: 'Blue',
    value: 'blue'
  },
  {
    label: 'Purple',
    value: 'purple'
  }
]

export const Default: Story = (args) => (
  <InputSelect name="teste" options={colourOptions} {...args} />
)

export const WithError: Story = (args) => (
  <InputSelect name="teste" error="teste" options={colourOptions} {...args} />
)
