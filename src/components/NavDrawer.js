import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Drawer, MenuItem, Divider, FloatingActionButton } from 'material-ui'
import Menu from 'material-ui/svg-icons/navigation/menu'


class NavDrawer extends Component {
  state = {
    open: true
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
          <Link to={'/'} >
            <MenuItem
              onTouchTap={this.toggle}  
              primaryText={'Play'}
            />
          </Link>  
          <Link to={'/profile'} >
            <MenuItem
              onTouchTap={this.toggle}  
              primaryText={'Profile'}
            />
          </Link>  
        </Drawer>
      </div>
    )
  }
}

export default NavDrawer