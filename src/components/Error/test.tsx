import { render, screen } from '@testing-library/react'

import Error from '.'

describe('<Error />', () => {
  it('Should render with text error', () => {

    render(<Error>teste</Error>)

    const element = screen.getByText(/teste/i)

    expect(element).toBeInTheDocument()
  })

  it('Should render with styles', () => {

    const { container } = render(<Error>teste</Error>)    

    const element = container.firstChild 

    expect(element).toHaveStyle({
      'color': '#e84d09',
    })
  })
})
