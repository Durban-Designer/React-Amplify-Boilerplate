// packages
import React, { Component } from 'react';
import { navigate } from "@reach/router"
// import axios from 'axios';
import { connect } from 'react-redux';
// material UI components
import { withStyles } from '@material-ui/core/styles';
import GridContainer from '../components/Grid/GridContainer.jsx';
import GridItem from '../components/Grid/GridItem.jsx';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// components
import Navbar from '../components/Navbar';
// actions
import { login } from '../actions/navigationController';
// misc
import BaseStyle from '../assets/BaseStyle.js';

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: 'test@gmail.com',
      password: 'test',
      showPass: false,
      error: false
    }
    this.login = this.login.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.checkReturn = this.checkReturn.bind(this);
  }

  login () {
    // TODO login logic
    if (this.state.email === 'test@gmail.com' && this.state.password === 'test') {
      this.props.login();
      navigate('/authed');
    } else {
      this.setState({
        error: true
      });
    }
  }

  updateEmail (evt) {
    this.setState({ email: evt.target.value });
  }

  updatePassword (evt) {
    this.setState({ password: evt.target.value });
  }

  checkReturn (evt) {
    // check if keypress was enter (13'th key)
    if (evt.keyCode === 13) {
      this.login();
    }
  }

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Navbar pageName={'Login'} />
        <GridContainer justify='center'>
          <GridItem xs={12} sm={10} md={7} lg={5} xl={2}>
            <div>
              <GridContainer justify='center' className={classes.formContainer}>
                <GridItem xs={11}>
                  <Typography variant='h4' className={classes.header}>
                    Sign-In
                  </Typography>
                </GridItem>
                <GridItem xs={11}>
                  {
                    this.state.error
                    ?
                    <Typography variant='body1' className={classes.errorMessage}>
                      There was an error with your E-Mail/Password combination. Please try again.
                    </Typography>
                    :
                    null
                  }
                </GridItem>
                <GridItem xs={11}>
                  <TextField
                    label='* Email'
                    id='email'
                    className={classes.input}
                    value={this.state.email}
                    onChange={this.updateEmail}
                    fullWidth={true}
                    margin='dense'
                    type='email'
                    variant='outlined'
                    autoFocus
                  />
                </GridItem>
                <GridItem xs={11}>
                  <Grid container spacing={16}>
                    <Grid item xs={10}>
                      <TextField
                        label='* Password'
                        id='password'
                        className={classes.input}
                        value={this.state.password}
                        onChange={this.updatePassword}
                        onKeyDown={this.checkReturn}
                        fullWidth={true}
                        margin='dense'
                        type={this.state.showPass ? 'text' : 'password' }
                        variant='outlined'
                      />
                    </Grid>
                    <Grid item xs={2}>
                      {
                        this.state.showPass
                        ?
                        <VisibilityOff className={classes.inputIconsColor} onClick={() => this.setState({ showPass: !this.state.showPass })}/>
                        :
                        <Visibility className={classes.inputIconsColor} onClick={() => this.setState({ showPass: !this.state.showPass })}/>
                      }
                    </Grid>
                  </Grid>
                </GridItem>
                <GridItem xs={11}>
                  <Button id='login' variant='contained' onClick={() => {this.login()}} className={classes.loginButton}>Enter</Button>
                </GridItem>
              </GridContainer>
            </div>
          </GridItem>
        </GridContainer>
        <Typography variant='body2' className={classes.header}>
          By continuing, you agree to our <button className={classes.link} onClick={() => navigate('/terms')}>Terms</button> and <button className={classes.link} onClick={() => navigate('/privacy')}>Privacy Policy</button>.
        </Typography>
      </div>
    );
  }
}

const styles = {
  ...BaseStyle,
  card: {
    flexGrow: 1,
    marginTop: '17vh',
    width: '100%',
    minWidth: '420px',
    height: '520px',
    borderRadius: '4px',
    textAlign: 'center'
  },
  header: {
    marginTop: '60px',
    marginLeft: '10px',
    marginBottom: '10px',
    width: '100%',
    height: '40px',
    textAlign: 'left'
  },
  header2: {
    marginTop: '40px',
    marginBottom: '40px',
    marginLeft: '20%',
    width: '60%',
    height: '40px',
    textAlign: 'center'
  },
  errorMessage: {
    marginTop: '10px',
    marginBottom: '10px',
    color: '#ff0000'
  },
  input: {
    marginBottom: '20px'
  },
  loginButton: {
    backgroundColor: '#012d5a',
    color: '#fff'
  },
  inputIconsColor: {
  }
};

function mapStateToProps(state) {
  return {
    // for when login redux is added
  };
}

function mapDispatchToProps(dispatch) {
  return {
      login: () => dispatch(login())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));
