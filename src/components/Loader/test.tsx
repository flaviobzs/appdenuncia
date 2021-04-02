import { render, screen } from '@testing-library/react'

import Loader from '.'

describe('<Loader />', () => {
  it('Should render corret icon component', () => {
    render(<Loader />)

    const element = screen.getByTestId('loader')

    expect(element).toBeInTheDocument()
  })
})
