import React from 'react'
import styled from 'styled-components'
import { FloatingActionButton } from 'material-ui'
import Menu from 'material-ui/svg-icons/navigation/menu'

export const NavToggleButton = ({toggle, width}) => (
  <FloatingActionButton onTouchTap={toggle}>
    <Menu />
  </FloatingActionButton>
)
