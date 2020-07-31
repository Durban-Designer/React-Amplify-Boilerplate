// Import React to allow rendering
// import Component to allow declaring class as a React Component
import React, { Component } from 'react';
// Import connect to enable Redux
import { connect } from 'react-redux';
// import withStyles wrapper to enable CSS in JS
import { withStyles } from '@material-ui/core/styles';
// Import the Navbar component
import Navbar from '../components/Navbar';
// Import the Base Styles
import BaseStyle from '../assets/BaseStyle.js';

// Change ExamplePage to match the name of your component
// This is where we declare our class and extend React.Component
class ExamplePage extends Component {
  // The constructor runs whenever the component is mounted
  constructor (props) {
    // super(props); passes the props to the React.Component constructor
    // This is needed to allow React to manage the component
    super(props);
    // example of this.state;
    // State enables React to keep track of data and
    // respond to any changes quickly for rendering
    this.state = {
      key: ''
    }
    // example setup binding for any needed methods
    // needed to call this in a method
    this.whatever = this.whatever.bind(this);
  }

  componentDidMount() {
    // called whenever the component mounts
    // Usually used to reach out to any backends for data
    // needed to render the page ex;
    /*
    axios.get('someAPIUrl')
      .then(response => {
        this.setState({
          key: response.data.key
        })
      })
      .catch(err => {
        console.log(err);
      })
    */
  }

  componentDidUpdate(prevProps, prevState) {
    // Called whenever state or props updates
    // Typical usage (don't forget to compare props):
    // Usually used to check if the state has changed in an update
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }

  componentWillUnmount() {
    // Called right before the component will unmount
    // Typically important for animations so they can animate off screen before unmounting
  }

  // example of whatever method
  // must be declared to be called within the class
  whatever (value) {
    this.setState({
      key: value
    })
  }

  // where we actually render the visual portion of the
  // component. Put what to render in the return statement
  // NOTE: don't have more than one root element per return statement
  render () {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        // this is the Navbar component it renders our navbar
        // the pageName prop controls what the header renders
        <Navbar pageName='Example Page' />
        <div className={classes.page}>
          // content goes in here
        </div>
      </div>
    );
  }
}

// css in JS styles are bound to the
// classes object on props.
const styles = {
  // the ... means to take the existing object and append it
  ...BaseStyle
};

// map state to props lets you expose
// Redux state variables as props
function mapStateToProps(state) {
  return {
    // for when customer redux is added
  };
}

// map dispatch to props enables you to dispatch any
// actions to the redux queue (import each action individually)
function mapDispatchToProps(dispatch) {
  return {
    // for when login redux is added
  };
}

// dont forget to change ExamplePage here and delete all comments
// the bottom line in human could be read as;
// export the component in the default way while connecting it to Redux
// Use the mapStateToProps and mapDispatchToProps functions to connect
// also wrap the component withStyles from the styles variable
// component is ExamplePage as defined above
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ExamplePage));
