import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

class Checkout extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
      </div>
    );
  }
}

const styles = {
  main: {
    textAlign: 'center',
  }
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


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Checkout));
