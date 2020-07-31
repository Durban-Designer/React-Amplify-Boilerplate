// packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API, graphqlOperation } from 'aws-amplify';
// material UI components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// actions
import { addToQueue } from '../actions/customerController';
// components
import CustomerQueue from '../components/CustomerQueue';
import AddCustomerModal from '../components/AddCustomerModal';
import Navbar from '../components/Navbar';
// misc
import BaseStyle from '../assets/BaseStyle.js';
import * as mutations from '../graphql/mutations';

class Checkin extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    }

    this.addCustomer = this.addCustomer.bind(this);
  }

  addCustomer (customer) {
    this.setState({
      showModal: false
    });
    API.graphql(graphqlOperation(mutations.createCustomer, { input: customer }))
      .catch(err => {
        console.log(err);
      })
  }

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Navbar pageName='Checkin' />
        <div className={classes.page}>
          {
            this.state.showModal
            ?
            <AddCustomerModal addToQueue={customer => this.addCustomer(customer)} />
            :
            <div>
              <Button variant='contained' onClick={() => this.setState({ showModal: true })}>Add Customer</Button>
              <CustomerQueue />
            </div>
          }
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
    addToQueue: customer => dispatch(addToQueue(customer))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Checkin));
