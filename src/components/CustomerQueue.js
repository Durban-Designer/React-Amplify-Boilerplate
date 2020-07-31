// packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API, graphqlOperation } from 'aws-amplify';
// FlatList docs: https://github.com/ECorreia45/flatlist-react
import FlatList from 'flatlist-react';
// material UI components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridContainer from '../components/Grid/GridContainer.jsx';
import GridItem from '../components/Grid/GridItem.jsx';
// actions
import { addToQueue, removeFromQueue, clearQueue } from '../actions/customerController';
// components
import Customer from './Customer';
import EditCustomerModal from './EditCustomerModal';
// misc
import BaseStyle from '../assets/BaseStyle.js';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

class CustomerQueue extends Component {
  constructor (props) {
    super(props);
    this.state = {
      displayModal: false,
      activeCustomer: {
        name: '',
        email: '',
        dispensary: 'test'
      }
    }
    this.removeCustomer = this.removeCustomer.bind(this);
  }

  removeCustomer (i) {
    this.props.removeFromQueue(i)
    API.graphql(graphqlOperation(mutations.deleteCustomer, { input: { id:  this.props.queue[i].id }}))
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount () {
    // TODO subscribe to queue updates instead of simply calling on mount
    this.props.clearQueue();
    API.graphql(graphqlOperation(queries.listCustomers))
      .then(response => {
        this.props.addToQueue(response.data.listCustomers.items);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render () {
    const { classes, queue } = this.props;

    const renderBlank = () => (
      <GridContainer justify='center' className={classes.customerLine}>
        <GridItem xs={8}>
          <Typography
            variant='h4'
            className={classes.blankMessage}
          >
            No Customers in Queue
          </Typography>
        </GridItem>
      </GridContainer>
    )

    return (
      <GridContainer justify='center' className={classes.formContainer}>
        {
          this.state.displayModal
          ?
          <EditCustomerModal />
          :
          null
        }
        <ul>
          <FlatList
            list={queue}
            renderItem={(customer, i) =>
              <Customer
                key={i}
                customer={customer}
                i={i}
                removeFromQueue={(i) => this.removeCustomer(i)}
                onClick={() => {
                  this.setState({
                    displayModal: true,
                    activeCustomer: customer
                  })
                }}
              />
            }
            renderWhenEmpty={renderBlank}
          />
        </ul>
      </GridContainer>
    );
  }
}

const styles = {
  ...BaseStyle
};

function mapStateToProps(state) {
  return {
    queue: state.customerReducer.queue
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToQueue: customers => dispatch(addToQueue(customers)),
    removeFromQueue: index => dispatch(removeFromQueue(index)),
    clearQueue: () => dispatch(clearQueue())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CustomerQueue));
