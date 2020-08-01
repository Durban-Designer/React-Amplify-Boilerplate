// packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
// material UI components
import { withStyles } from '@material-ui/core/styles';
// components
import Navbar from '../components/Navbar';
// misc
import BaseStyle from '../assets/BaseStyle.js';

class AuthProtectedPage extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Navbar pageName='AuthProtectedPage' />
        <div className={classes.page}>
          { /* Page contents go in here*/ }
        </div>
      </div>
    );
  }
}

const styles = {
  ...BaseStyle
};

function mapStateToProps(state) {
  return {
    // for when customer redux is added
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // for when login redux is added
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AuthProtectedPage));
