import { render, screen } from '@testing-library/react'

import Description from '.'

describe('<Description />', () => {
  it('should render the heading', () => {
    const { container } = render(<Description />)

    expect(screen.getByRole('heading', { name: /Description/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
