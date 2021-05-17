export const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: '#F5F5F5',
    border: state.selectProps.error ? '2px solid #ff7608' : '1px solid #4a4a4a',
    outline: '0px',
    boxShadow: '0px',
    borderRadius: '20px',
    padding: '5px',
    '&:focus': {
      outline: '0px',
      border: '0px'
    },
    '&:active': {
      outline: '0px',
      border: '0px'
    },
    '&:hover': {
      outline: '0px'
    }
  }),
  placeholder: (base: any) => ({
    ...base,
    fontSize: '14px',
    color: '#919191',
    marginLeft: '4px'
  }),
  input: (base: any) => ({
    ...base,
    fontSize: '14px',
    // color: '#919191',
    marginLeft: '4px'
  }),
  singleValue: (base: any) => ({
    ...base,
    fontSize: '14px',
    // color: '#919191',
    marginLeft: '4px'
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected ? '#FF9933' : '#F5F5F5',
    color: state.isSelected ? '#F5F5F5' : '#4A4A4A',
    // height: '40px',
    margin: '0px',
    padding: '7px 15px',
    fontSize: '14px',
    lineHeight: '22px',
    '&:hover': {
      backgroundColor: state.isFocused ? '#FF9933' : '#F5F5F5',
      color: state.isFocused ? '#F5F5F5' : '#4A4A4A'
    }
  }),
  menu: (base: any) => ({
    ...base,
    marginTop: '20px',
    borderRadius: '2px',

    '&:before': {
      position: 'absolute',
      content: '""',
      width: '0px',
      height: '0px',
      top: '-16px',
      zIndex: '100',
      right: '40px',
      borderBottom: '16px solid#F5F5F5',
      borderRight: '16px solid transparent',
      borderLeft: '16px solid transparent'
    }
  }),
  indicatorSeparator: () => ({}),
  menuList: (base: any) => ({
    ...base,
    '&::-webkit-scrollbar': {
      width: '12px',
      height: '122px'
    },
    '&::-webkit-scrollbar-track': {
      background: '#f5f5f5'
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#f5f5f5',
      '-webkit-border-radius': '5px',
      borderRadius: '5px'
    },
    '&:hover::-webkit-scrollbar-thumb': {
      background: '#e3e3e3'
    },
    padding: '0px',
    borderRadius: '2px'
  }),
  menuPortal: (base: any) => ({
    ...base,
    backgroundColor: 'blue'
  })
}
