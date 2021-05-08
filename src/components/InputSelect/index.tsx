import React from 'react'
import ReactSelect, { components } from 'react-select'
import IconSelect from './IconSelect'
import { customStyles } from './custom'
import Error from '../Error'

type Option = {
  value: string
  label: string
}

export type InputSelectProps = {
  error?: string
  options: Option[]
  name: string
  defaultValue?: Option
  placeholder?: string
}

type Error = {
  type: string
  message: string
}

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <IconSelect data-testid="icon-select" />
    </components.DropdownIndicator>
  )
}

const InputSelect: React.FC<InputSelectProps> = ({
  error,
  name,
  options,
  defaultValue,
  placeholder = 'Selecione uma opção',
  ...rest
}) => (
  <>
    <ReactSelect
      //@ts-ignore
      styles={customStyles}
      data-testid="select"
      error={error}
      id={`select-${name}`}
      instanceId={`select-${name}`}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      options={options}
      components={{ DropdownIndicator }}
      {...rest}
    />
    {!!error && <Error>{error}</Error>}
  </>
)

export default InputSelect
