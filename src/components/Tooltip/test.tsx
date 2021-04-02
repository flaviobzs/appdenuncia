import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Tooltip from '.'

describe('<Tooltip />', () => {
  it('Should render the children text', () => {
    render(
      <Tooltip id="teste" direction="left">
        {'teste'}
      </Tooltip>
    )

    const element = screen.getByText(/teste/i)

    expect(element).toBeInTheDocument()
  })

  it('Should dispatch onClick', async () => {
    render(
      <Tooltip id="teste" direction="left">
        {'teste'}
      </Tooltip>
    )

    const element = screen.getByText(/teste/i)
    const icon = screen.getByTestId('tooltip')

    userEvent.click(icon)

    await waitFor(() => {
      expect(element).toHaveStyle({
        visibility: 'visible'
      })
    })
  })
})
