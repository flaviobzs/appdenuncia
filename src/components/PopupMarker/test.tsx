import { render, screen } from '@testing-library/react'

import Marker from '.'

describe('<Marker />', () => {
  it('should render the heading', () => {
    const { container } = render(<Marker />)

    expect(screen.getByRole('heading', { name: /Marker/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
