import { render, screen } from '@testing-library/react'

import AlertMessage from '.'

describe('<AlertMessage />', () => {
  it('Should render', () => {

    render(<AlertMessage status='alert'>alert</AlertMessage>)

    const element = screen.getByText(/alert/i)

    expect(element).toBeInTheDocument()
    
  })

  it('Should render with alert details', () => {

    render(<AlertMessage status='alert'>alert</AlertMessage>)

    const element = screen.getByText(/alert/i)

    expect(element).toHaveStyle({
      'color': '#c7b40b',
    })
    
  })
  it('Should render with success details', () => {

    render(<AlertMessage status='success'>success</AlertMessage>)

    const element = screen.getByText(/success/i)

    expect(element).toHaveStyle({
      'color': '#029D92',
    })
    
  })
  it('Should render with error details', () => {

    render(<AlertMessage status='error'>error</AlertMessage>)

    const element = screen.getByText(/error/i)

    expect(element).toHaveStyle({
      'color': '#E84D09',
    })
    
  })

  
})
