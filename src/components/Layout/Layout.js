import React from 'react';

import Aux from '../../hoc/Auxilary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={classes.content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;