import { render, screen } from '@testing-library/react'

import AlertBox from '.'

describe('<AlertBox />', () => {
  it('Should render the text', () => {

    render(<AlertBox>teste</AlertBox>)

    const element = screen.getByText(/teste/i)

    expect(element).toBeInTheDocument()
  })

  it('Should render box with styles', () => {

    const { container } = render(<AlertBox>teste</AlertBox>)

    const element = container.firstChild

    expect(element).toHaveStyle({
      'border': '2px solid #c7b40b',
      'border-radius': '1px 10px 10px 10px',
    })
  })
})
