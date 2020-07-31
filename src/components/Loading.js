// packages
import React, { Component } from 'react';
// material UI components
import { withStyles } from '@material-ui/core/styles';
// misc
import BaseStyle from '../assets/BaseStyle.js';

class Loading extends Component {
  render () {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <div>Loading ...</div>
      </div>
    );
  }
}

const styles = {
  ...BaseStyle
};

export default withStyles(styles)(Loading);
