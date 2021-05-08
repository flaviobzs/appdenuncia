import { Story, Meta } from '@storybook/react/types-6-0'
import AnswerRate from '.'

export default {
  title: 'AnswerRate',
  component: AnswerRate
} as Meta

export const Default: Story = () => <AnswerRate name="x" />
