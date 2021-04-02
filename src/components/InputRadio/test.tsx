import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Radio from '.'

describe('<Radio />', () => {
  it('Should render with label text', () => {

    render(<Radio name='test' label='radio'/>)

    const element = screen.getByRole('radio')

    expect(element).toBeInTheDocument()
  })

  it('Should render with styles', () => {

    render(<Radio name='test' label='radio'/>)

    const element =  screen.getByRole('radio')

    expect(element).toHaveStyle({
      'border': '2px solid #82288d',
    })
  })

  it('Should dispatch onClick', async () => {
    const onClick = jest.fn()

    render(<Radio name='test' label='radio' onClick={onClick}/>)

    expect(onClick).not.toHaveBeenCalled()

    const input = screen.getByRole('radio')

    userEvent.click(input)

    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1)
    })    
  })
})
