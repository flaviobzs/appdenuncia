import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Popup from '.'

describe('<ProgressBar />', () => {
  it('Should render the box modal', () => {
    const onClose = jest.fn()
    render(<Popup isOpen={true} setIsClose={onClose} />)

    const element = screen.getByRole('dialog')

    expect(element).toBeInTheDocument()
  })

  it('Should be close box modal', async () => {
    const onClose = jest.fn()
    render(<Popup isOpen={true} setIsClose={onClose} />)

    const element = screen.getByTestId('closemodal')

    userEvent.click(element)

    await waitFor(() => {
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })
})
