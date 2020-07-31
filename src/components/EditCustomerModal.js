// packages
import React, { Component } from 'react';
// material UI components
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// misc
import BaseStyle from '../assets/BaseStyle.js';

class EditCustomerModal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      edit: false,
      customer: {
        name: '',
        email: '',
        dispensary: 'test'
      }
    }

    this.updateCustomer = this.updateCustomer.bind(this);
    this.checkReturn = this.checkReturn.bind(this);
  }

  updateCustomer () {
    this.setState({
      update: false
    })
    // TODO update in AWS and update in local Queue array
  }

  checkReturn (evt) {
    // check if keypress was enter (13'th key)
    if (evt.keyCode === 13) {
      this.updateCustomer();
    }
  }

  render () {
    const { classes } = this.props;

    const editView = (
      <div>
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
        <Button variant='contained' onClick={() => this.updateCustomer()}>Update Customer</Button>
      </div>
    );

    // TODO render the customer cleanly
    const displayView = (
      <div>
        <Button variant='contained' onClick={() => this.setState({ edit: true })}>Update Customer</Button>
      </div>
    );

    return (
      <div className={classes.main}>
        {
          this.state.edit
          ?
          editView
          :
          displayView
        }
      </div>
    );
  }
}

const styles = {
  ...BaseStyle,
};

export default withStyles(styles)(EditCustomerModal);
