// packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navigate } from "@reach/router"
// material UI components
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// misc
import BaseStyle from '../assets/BaseStyle.js';

const pages = [
  { name: 'Sales', path: '/' }
]

const loggedPages = [
  { name: 'Home', path: '/home' },
  { name: 'Checkin', path: '/checkin' }
]

class Navbar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      right: false
    };

    this.togglePane = this.togglePane.bind(this);
    this.logout = this.logout.bind(this);
  }

  togglePane () {
    var bool = !this.state.right;
    this.setState({
      right: bool
    })
  }

  logout () {
    // TODO
  }

  render(){
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position='static' className={classes.appBar}>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              {this.props.pageName}
            </Typography>
            {
              !this.props.userId && this.props.address !== '/login'
              ?
              <Button onClick={() => navigate('/login')}>
                Login
              </Button>
              :
              null
            }
            <IconButton
              edge='start'
              className={classes.rightButton}
              onClick={() =>
                this.setState({
                  right: !this.state.right
                })
              }
              color='secondary'
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor={'right'}
          open={this.state.right}
          onClose={this.togglePane}
          className={classes.drawer}
        >
          <div
            tabIndex={0}
            role='button'
            onClick={this.togglePane}
          >
            <List className={classes.list}>
              {
                this.props.userId
                ?
                loggedPages.map((page, i) => (
                  <ListItem
                    button
                    key={i}
                    onClick={() => navigate(page.path)}
                  >
                    <ListItemText primary={page.name} />
                  </ListItem>
                ))
                :
                pages.map((page, i) => (
                  <ListItem
                    button
                    key={i}
                    onClick={() => navigate(page.path)}
                  >
                    <ListItemText primary={page.name} />
                  </ListItem>
                ))
              }
              <ListItem
                button
                onClick={() =>
                  this.props.userId
                  ?
                  this.logout()
                  :
                  navigate('/login')
                }
              >
                <ListItemText primary={this.props.userId ? 'Logout' : 'Login'} />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

const styles = {
  ...BaseStyle,
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: '#fff'
  },
  title: {
    flexGrow: 1
  },
  rightButton: {
  },
  drawer: {
    width: '26vw',
    overflow: 'hidden',
    flexShrink: 0,
    zIndex: 4
  },
  list: {
    marginTop: '26vh',
    marginRight: '4vw',
    width: '26vw'
  },
  grow: {
    flexGrow: 1
  }
};

function mapStateToProps(state) {
  return {
    // for when redux
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // for when redux
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Navbar));
