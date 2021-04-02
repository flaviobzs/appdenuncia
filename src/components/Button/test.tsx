import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('Should render the text', () => {

    render(<Button>button</Button>)

    const element = screen.getByRole('button', { name: /Button/i })

    expect(element).toBeInTheDocument()
  })

  it('Should render outlined button', () => {

    render(<Button outlined={true}>button</Button>)

    const element = screen.getByRole('button', { name: /Button/i })

    expect(element).toHaveStyle({
      'background-color': '#ffffff',
      'border': 'solid 1px',
      'border-color': '#ff7608',
    })
  })
})
