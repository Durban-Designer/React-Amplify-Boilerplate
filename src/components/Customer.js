// packages
import React, { Component } from 'react';
// material UI components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridContainer from '../components/Grid/GridContainer.jsx';
import GridItem from '../components/Grid/GridItem.jsx';
import Button from '@material-ui/core/Button';
// misc
import BaseStyle from '../assets/BaseStyle.js';

class Customer extends Component {
  render () {
    const { classes, customer, i } = this.props;

    return (
      <GridItem xs={10} className={classes.gridItem}>
        <GridContainer justify='center' className={classes.customerLine}>
          <GridItem xs={8} className={classes.customerName}>
            <Typography
              variant='h4'
              className={classes.header}
            >
              {customer.name}
            </Typography>
          </GridItem>
          <GridItem xs={4} className={classes.removeCustomerButton}>
            <Button
              variant='contained'
              onClick={() =>
                this.props.removeFromQueue(i)
              }
            >
              -
            </Button>
          </GridItem>
        </GridContainer>
      </GridItem>
    )
  }
}

const styles = {
  ...BaseStyle
};

export default withStyles(styles)(Customer);
