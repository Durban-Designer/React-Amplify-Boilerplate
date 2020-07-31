// packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
// material UI components
import { withStyles } from '@material-ui/core/styles';
// components
import Navbar from '../components/Navbar';
// misc
import BaseStyle from '../assets/BaseStyle.js';
import logo from '../assets/images/Icons/logo.svg';

class Sales extends Component {
  render () {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Navbar pageName='Sales' />
        <div className={classes.page}>
          <img src={logo} className={classes.image} alt={'Logo'}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Sales));
