import * as React from 'react'

function SvgIconSelect(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={14}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7 12L.072 0h13.856L7 12z" fill="#4a4a4a" />
    </svg>
  )
}

export default SvgIconSelect
