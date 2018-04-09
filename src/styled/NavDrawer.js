import React from 'react'
import styled from 'styled-components'
import { FloatingActionButton } from 'material-ui'
import Menu from 'material-ui/svg-icons/navigation/menu'

const StayVisible = styled.div`
  position: absolute;
  margin-left: ${(props) => (props.open) ? `${props.width}px` : 'none'};
  transition: margin .2s;
`

export const NavToggleButton = (props) => (
  <StayVisible
    {...props}
  >
    <FloatingActionButton onTouchTap={props.toggle}>
      <Menu />
    </FloatingActionButton>
  </StayVisible>  
)
