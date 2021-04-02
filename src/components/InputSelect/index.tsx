import React, { components } from 'react-select'
import * as Styles from './styles'

import Error from '../Error'

type Options = {
  label: string
  value: string
}

export type DropdownProps = {
  error?: string
  options: Options[]
  name: string
}

const customStyles = {
  control: (base: any) => ({
    ...base,
    borderColor: '#F5F5F5',
    backgroundColor: '#F5F5F5',
    border: '0px',
    outline: '0px',
    boxShadow: '0px',
    '&:focus': {
      outline: '0px',
      border: '0px'
    },
    '&:active': {
      outline: '0px',
      border: '0px'
    },
    '&:hover': {
      outline: '0px',
      border: '0px'
    }
  }),
  placeholder: (base: any) => ({
    ...base,
    fontSize: '14px',
    color: '#919191',
    lineWeight: '22px'
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected ? '#82288D' : '#F5F5F5',
    color: state.isSelected ? '#F5F5F5' : '#4A4A4A',
    height: '47px',
    margin: '0px',
    padding: '12px',
    fontSize: '14px',
    lineHeight: '22px',
    '&:hover': {
      backgroundColor: state.isFocused ? '#82288D' : '#F5F5F5',
      color: state.isFocused ? '#F5F5F5' : '#4A4A4A'
    }
  }),
  menu: () => ({
    paddingTop: '20px',
    '&:before': {
      position: 'absolute',
      content: '""',
      width: '0px',
      height: '0px',
      top: '42px',
      zIndex: '100',
      left: '25px',
      borderBottom: '16px solid#F5F5F5',
      borderRight: '16px solid transparent',
      borderLeft: '16px solid transparent'
    }
  }),
  menuList: (base: any) => ({
    ...base,
    padding: '0px',
    borderRadius: '4px'
  }),
  menuPortal: (base: any) => ({
    ...base,
    backgroundColor: 'blue'
  })
}

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <Styles.Icon data-testid="icon-select" />
    </components.DropdownIndicator>
  )
}

const InputSelect: React.FC<DropdownProps> = ({
  error,
  name,
  options,
  ...props
}) => (
  <>
    <Styles.Wrapper
      data-testid="select"
      error={error}
      name={name}
      styles={customStyles}
      options={options}
      components={{ DropdownIndicator }}
      {...props}
    />
    {!!error && <Error>{error}</Error>}
  </>
)

export default InputSelect
