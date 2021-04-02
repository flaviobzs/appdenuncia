import { Story, Meta } from '@storybook/react/types-6-0'
import InputRadio from '.'

export default {
  title: 'InputRadio',
  component: InputRadio,
  argTypes: {}
} as Meta

export const Default: Story = (args) => (
  <InputRadio name="teste" label="dd" {...args} />
)
