// packages
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import fetcher from 'node-fetch';
// material UI components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from './components/Card/Card';
import Grid from '@material-ui/core/Grid';
import GridContainer from './components/Grid/GridContainer.jsx';
import GridItem from './components/Grid/GridItem.jsx';
// misc
import BaseStyle from '../assets/BaseStyle.js';

class Login extends Component {
  constructor (props) {
    super(props);
    this.print = this.print.bind(this);
  }

  print () {
    const labelXml = `
    <DieCutLabel Version='8.0' Units='twips'>
      <PaperOrientation>Landscape</PaperOrientation>
      <Id>Address</Id>
      <PaperName>30252 Address</PaperName>
      <DrawCommands/>
      <ObjectInfo>
        <TextObject>
          <Name>Text</Name>
          <ForeColor Alpha='255' Red='0' Green='0' Blue='0' />
          <BackColor Alpha='0' Red='255' Green='255' Blue='255' />
          <LinkedObjectName></LinkedObjectName>
          <Rotation>Rotation0</Rotation>
          <IsMirrored>False</IsMirrored>
          <IsVariable>True</IsVariable>
          <HorizontalAlignment>Left</HorizontalAlignment>
          <VerticalAlignment>Middle</VerticalAlignment>
          <TextFitMode>ShrinkToFit</TextFitMode>
          <UseFullFontHeight>True</UseFullFontHeight>
          <Verticalized>False</Verticalized>
          <StyledText>
            <Element>
              <String>Test 123</String>
              <Attributes>
                <Font Family='Roboto' Size='8' Bold='False' Italic='False' Underline='False' Strikeout='False'/>
                <ForeColor Alpha='255' Red='0' Green='0' Blue='0'/>
              </Attributes>
            </Element>
          </StyledText>
        </TextObject>
        <Bounds X='332' Y='150' Width='4455' Height='1260' />
      </ObjectInfo>
    </DieCutLabel>`;
    const printerName = 'DYMO LabelWriter 450 Turbo';
    const hostname = '127.0.0.1';
    const port = 41951;
    const apiUrl = `https://${hostname}:${port}/DYMO/DLS/Printing`;
    const label = `printerName=${encodeURIComponent(printerName)}&printParamsXml=&labelXml=${encodeURIComponent(labelXml)}&labelSetXml=`;
    fetcher(`${apiUrl}/GetPrinters`, {mode: 'cors'})
			.then(response => response.text())
      .then(result => console.log(result))
      .catch(err => console.log(err));
    fetcher(`${apiUrl}/PrintLabel`,
			{
				method: 'POST',
        mode: 'cors',
				body: label,
				headers: {
				  'Content-Type': 'application/x-www-form-urlencoded'
        }
			})
		.then(response => response.text())
		.then(result => console.log(result))
    .catch(err => console.log(err));
  }

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Card className={classes.card}>
          <GridContainer justify='center' className={classes.formContainer}>
            <GridItem xs={10} className={classes.gridItem}>
              <Typography variant='h4' className={classes.header}>
                Printer test
              </Typography>
            </GridItem>
            <GridItem xs={10} className={classes.gridItem}>
              <Typography variant='body1' className={classes.header2}>
                Spearheading the fourth industrial revolution
              </Typography>
            </GridItem>
            <GridItem xs={10}>
              <Button id='login' variant='contained' onClick={() => {this.login()}} className={classes.loginButton}>print</Button>
            </GridItem>
          </GridContainer>
        </Card>
      </div>
    );
  }
}

const styles = {
  ...BaseStyle,
  card: {
    marginTop: '15vh',
    marginLeft: '35vw',
    width: '30vw',
    minWidth: '500px',
    height: '540px',
    borderRadius: '4px',
    textAlign: 'center'
  },
  header: {
    marginTop: '60px',
    width: '100%',
    height: '40px',
    textAlign: 'center'
  },
  header2: {
    marginTop: '40px',
    marginBottom: '60px',
    marginLeft: '28%',
    width: '44%',
    height: '40px',
    textAlign: 'center'
  },
  loginButton: {
    marginTop: '60px',
    marginBottom: '40px',
    backgroundColor: '#012d5a',
    color: '#fff',
  }
};

function mapStateToProps(state) {
  return {
    // for when login redux is added
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // for when login redux is added
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));
