// packages
import React, { Component } from 'react';
// material UI components
import { withStyles } from '@material-ui/core/styles';
// misc
import BaseStyle from '../assets/BaseStyle.js';

// Change ExampleComponent to match the name of your component
class ExampleComponent extends Component {
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

// dont forget to change it down here and remove these comments
export default withStyles(styles)(ExampleComponent);
