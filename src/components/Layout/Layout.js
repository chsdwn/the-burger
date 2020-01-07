import React, { Component } from 'react';

import Aux from '../../hoc/Auxilary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer} />
        <main className={classes.content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
};

export default Layout;