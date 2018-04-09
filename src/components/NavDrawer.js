import React, { Component } from 'react'
import { Drawer, MenuItem, Divider, FloatingActionButton } from 'material-ui'
import Menu from 'material-ui/svg-icons/navigation/menu'


class NavDrawer extends Component {
  state = {
    open: false
  }

  toggle = () => {
    this.setState((prevState) => ({ open: !prevState.open }))
  }

  render() {
    return (
      <div>
        <FloatingActionButton
          onTouchTap={this.toggle}
        >
          <Menu />
        </FloatingActionButton>
        <Drawer
          open={this.state.open}
        >
          <div
            style={{
              height: '200px',
              width: '100%',
              backgroundColor: 'salmon'
            }}
          >
            LoginContainer
          </div>  
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