import { render, screen } from '@testing-library/react'

import AnswerRate from '.'

describe('<AnswerRate />', () => {
  it('should render the heading', () => {
    const { container } = render(<AnswerRate />)

    expect(screen.getByRole('heading', { name: /AnswerRate/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
