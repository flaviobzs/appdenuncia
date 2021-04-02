import React from 'react'
import * as Styles from './styles'

export type TooltipProps = {
  direction?: 'right' | 'left'
  id: string
}

const Tooltip: React.FC<TooltipProps> = ({
  children = 'Essa informação será usada para a construção do questionário.',
  direction = 'right',
  id = 'tooltip-id'
}) => {
  return (
    <>
      <Styles.Icon
        data-testid="tooltip"
        data-tip
        data-for={id}
        data-event="click"
        data-event-off="mouseout"
      />
      <Styles.ReactTooltipStyled
        id={id}
        place={direction}
        effect="solid"
        backgroundColor="#9d57a5"
        arrowColor="#9d57a5"
      >
        <Styles.Content>{children}</Styles.Content>
      </Styles.ReactTooltipStyled>
    </>
  )
}

export default Tooltip
