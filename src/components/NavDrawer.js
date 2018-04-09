import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Drawer, MenuItem, Divider } from 'material-ui'
import { NavToggleButton } from '../styled/NavDrawer'


class NavDrawer extends Component {
  state = {
    open: true,
    width: 250
  }

  toggle = () => {
    this.setState((prevState) => ({ open: !prevState.open }))
  }

  render() {
    return (
      <div>
        <NavToggleButton
          toggle={this.toggle}
          width={this.state.width}
        />
        <Drawer
          open={this.state.open}
          width={this.state.width}
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