import React, { Component } from 'react'
import { Drawer, MenuItem, Divider, FloatingActionButton } from 'material-ui'
import Menu from 'material-ui/svg-icons/navigation/menu'


class NavDrawer extends Component {
  render() {
    return (
      <div>
        <FloatingActionButton>
          <Menu />
        </FloatingActionButton>
        <Drawer>
          <Divider />  
          <MenuItem
            primaryText={'Play'}
          />
          <MenuItem
            primaryText={'Profile'}
          />
        </Drawer>
      </div>
    )
  }
}

export default NavDrawer