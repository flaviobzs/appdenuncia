import { render, screen } from '@testing-library/react'

import Dropdown from '.'

const options = [
  {
    label: 'Orange',
    value: 'orange'
  },
  {
    label: 'Blue',
    value: 'blue'
  }
]

describe('<Dropdown />', () => {
  it('Should render corret icon component', () => {
    render(<Dropdown name="teste" options={options}></Dropdown>)

    const element = screen.getByTestId('icon-select')

    expect(element).toBeInTheDocument()
  })
})
