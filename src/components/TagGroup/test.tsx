import { render, screen } from '@testing-library/react'

import TagGroup from '.'

describe('<TagGroup />', () => {
  it('should render the heading', () => {
    const { container } = render(<TagGroup />)

    expect(
      screen.getByRole('heading', { name: /TagGroup/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
