import { render, screen } from '@testing-library/react'

import CreateComplaintButton from '.'

describe('<CreateComplaintButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<CreateComplaintButton />)

    expect(screen.getByRole('heading', { name: /CreateComplaintButton/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
