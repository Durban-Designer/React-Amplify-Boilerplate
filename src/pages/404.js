// packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from "classnames";
// material UI components
import { withStyles } from '@material-ui/core/styles';
import ButtonMaterial from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// misc
import BaseStyle from '../assets/BaseStyle.js';

class NotFound extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="main">
        <div className={classNames(classes.bg, 'fadeInTwo')}></div>
        <div className={classes.card}>
          <Typography variant='body1' className={classes.text}>404 Page not found</Typography>
          <ButtonMaterial
            variant='outlined'
            size='large'
            className={classes.button}
            onClick={() => this.props.handleNavigation('/')}
          >
            Back
          </ButtonMaterial>
        </div>
      </div>
    );
  }
}

const styles = {
  ...BaseStyle,
  button: {
    marginTop: '4vh',
    marginBottom: '2vh',
    backgroundColor: '#ff0000',
    color: '#fff',
    width: '50%',
    marginLeft: '25%',
    '&:hover': {
      background: '#ff0000',
      color: '#ffffff',
    }
  },
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 1
  },
  card: {
    position: 'absolute',
    height: '24vh',
    width: '33vw',
    left: '33vw',
    top: '20vh',
    zIndex: 4,
  },
  text: {
    textAlign: 'center',
    color: '#000',
    zIndex: 4,
    marginTop: '5vh'
  },
}

function mapStateToProps(state) {
  return {
    // for if 404 redux is added
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // for when login redux is added
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NotFound));
