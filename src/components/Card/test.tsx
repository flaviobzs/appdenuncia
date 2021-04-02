import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Card from '.'

describe('<Card />', () => {
  it('Should render the children text', () => {

    render(<Card>teste</Card>)

    const element = screen.getByText(/teste/i)

    expect(element).toBeInTheDocument()
  })

  it('Should render box with styles', () => {

    render(<Card>teste</Card>)

    const element =  screen.getByText(/teste/i)
    
    expect(element).toHaveStyle({
      'border': '1px solid #e3e3e3',
      'border-radius': '10px 1px 10px 10px',
    })
  })

  it('Should dispatch onClick', async () => {
    const onClick = jest.fn()

    render(<Card onClick={onClick}>teste</Card>)

    expect(onClick).not.toHaveBeenCalled()

    userEvent.click(screen.getByTestId('button-close'))

    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    
  })
})
