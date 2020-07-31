// packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
// material UI components
import { withStyles } from '@material-ui/core/styles';
// components
import Navbar from '../components/Navbar';
// misc
import BaseStyle from '../assets/BaseStyle.js';


// NOTE: Change ExamplePage here to match page name
// NOTE: make sure pages / classes are PascalCase (CapsEveryWord)
class ExamplePage extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        // NOTE: Change ExamplePage to the display ready name of page
        // NOTE: ex; ExamplePage is now Example Page
        <Navbar pageName='Example Page' />
        <div className={classes.page}>
          // Page contents go in here
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

// NOTE: dont forget to change ExamplePage here and delete these comments
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ExamplePage));
