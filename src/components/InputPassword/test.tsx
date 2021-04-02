import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import PasswordField from '.'

describe('<PasswordField />', () => {
  it('Should render password number', () => {

    render(<PasswordField name='teste' placeholder='teste'/>)

    const element = screen.getByPlaceholderText(/teste/i)

    expect(element).toBeInTheDocument()
  })

  it('Should render with styles', () => {

    render(<PasswordField name='teste' placeholder='teste'/>)

    const element = screen.getByPlaceholderText(/teste/i)

    expect(element).toHaveStyle({
      'background-color': '#f5f5f5',
    })
  })

  it('Should be input visible', async () => {
    render(
      <PasswordField placeholder='teste' name="TextField" />
    )

    const input = screen.getByPlaceholderText(/teste/i)
    const icon = screen.getByTestId('iconoff')
    
    userEvent.click(icon)

    await waitFor(() => {
      expect(input).toHaveAttribute('type', 'text')
    })    
    
  })

  it('Should return be input invisible', async () => {
    render(
      <PasswordField placeholder='teste' name="TextField" />
    )

    const input = screen.getByPlaceholderText(/teste/i)
    const iconoff = screen.getByTestId('iconoff')
    
    userEvent.click(iconoff)
    await waitFor(() => {
      expect(input).toHaveAttribute('type', 'text')
    })    

    const iconon = screen.getByTestId('iconon')
    userEvent.click(iconon)
    await waitFor(() => {
      expect(input).toHaveAttribute('type', 'password')
    }) 
    
  })

})
