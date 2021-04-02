import { render } from '@testing-library/react'

import Divider from '.'

describe('<Divider />', () => {
  it('Should render with light styles', () => {

    const {container} = render(<Divider theme='light'/>)

    const element = container.firstChild

    expect(element).toHaveStyle({
      'background': ' #E3E3E3',
    })
  })

  it('Should render with dark styles', () => {

    const { container } = render(<Divider theme='dark'/>)

    const element = container.firstChild

    expect(element).toHaveStyle({
      'background': ' #82288D',
    })
  })
})
