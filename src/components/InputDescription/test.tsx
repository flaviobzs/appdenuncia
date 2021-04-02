import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TextField from '.'

describe('<TextField />', () => {
  it('Should render text input', () => {
    const onInput = jest.fn()
    
    render(<TextField name='teste' setValue={onInput} placeholder='teste'/>)

    const element = screen.getByPlaceholderText(/teste/i)

    expect(element).toBeInTheDocument()
  })
  
  it('Should be change its value when typing', async () => {
    const onInput = jest.fn()
    
    render(<TextField name='teste' setValue={onInput} placeholder='teste'/>)

    const input = screen.getByPlaceholderText(/teste/i)

    const text = 'text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)

  })

  it('Should render with styles', () => {
    const onInput = jest.fn()
    render(<TextField name='teste' setValue={onInput} placeholder='teste'/>)

    const element = screen.getByPlaceholderText(/teste/i)

    expect(element).toHaveStyle({
      'background-color': '#f5f5f5',
    })
  })

  
  // error 
  
  
 
})
