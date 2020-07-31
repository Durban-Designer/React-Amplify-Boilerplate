// packages
import React, { Component } from 'react';
// material UI components
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// misc
import BaseStyle from '../assets/BaseStyle.js';

class AddCustomerModal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      customer: {
        name: '',
        email: '',
        dispensary: 'test'
      }
    }

    this.checkReturn = this.checkReturn.bind(this);
  }

  checkReturn (evt) {
    // check if keypress was enter (13'th key)
    if (evt.keyCode === 13) {
      this.props.addToQueue(this.state.customer);
    }
  }

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <TextField
          label='Customer Name'
          className={classes.input}
          value={this.state.input}
          onChange={(evt) => this.setState({
            customer: {
              ...this.state.customer,
              name: evt.target.value
            }
          })}
          type='text'
        />
        <TextField
          label='Customer Email'
          className={classes.input}
          value={this.state.input}
          onChange={(evt) => this.setState({
            customer: {
              ...this.state.customer,
              email: evt.target.value
            }
          })}
          onKeyDown={this.checkReturn}
          type='text'
        />
        <Button variant='contained' onClick={() => this.props.addToQueue(this.state.customer)}>Add to Queue</Button>
      </div>
    );
  }
}

const styles = {
  ...BaseStyle,
};

export default withStyles(styles)(AddCustomerModal);
