import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import api from "../../services/api";
import { addRequest } from "../../store/modules/edit/actions";

import Compform from './Compform';
import Negform from './Negform';
import Review from './Review';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://play.google.com/store/apps">
        Dezcontão
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function New() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const steps = ['Dados da empresa', 'Promoções', 'Review do cadastro'];
  const [activeStep, setActiveStep] = useState(0);
  const [ formulario, setFormulario ] = useState({ 
    name: '', 
    email: '',
    address: '',
    phone: '',
    cep: '',
    social: '',
    open_to: '',
    latitude: '',
    longitude: '',
    obs: '',
    paymentform: '',
    ticket: '',
    ticket2: '',
    ticket3: '',
    ticket4: '',
    highlight: false,
    categories: 1,
    path1: 1
  });

  const { name, email, address, phone, cep, social, open_to, latitude, longitude, obs, paymentform, ticket, ticket2, ticket3, ticket4, highlight } = formulario;
  const values = { name, email, address, phone, cep, social, open_to, latitude, longitude, obs, paymentform, ticket, ticket2, ticket3, ticket4, highlight };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleSave = async () => {
    setActiveStep(activeStep + 1);

    dispatch(addRequest(formulario));
    
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChange = input => event => {
    setFormulario({ ...formulario, [input]: event.target.value})
  }

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Compform  handleChange={handleChange} values={values} />;
    case 1:
      return <Negform handleChange={handleChange} values={values} />;
    case 2:
      return <Review values={values} />;
    default:
      throw new Error('Unknown step');
  }
}

  return (
    <Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Cadastrar
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Fragment>
            {activeStep === steps.length ? (
              <Fragment>
                <Typography variant="h5" gutterBottom>
                  O cadastro da {name} foi realizado com sucesso.
                </Typography>
                <Typography variant="subtitle1">
                  Your register number is {name.substr(0,3) + Math.floor(Math.random() * 10000 + 9999)}. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </Fragment>
            ) : (
              <Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  {activeStep === 2 ? (
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finalizar Cadastro' : 'Next'}
                  </Button>
                  ) :
                  (
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finalizar Cadastro' : 'Next'}
                  </Button>
                  )

                  }
                  
                </div>
              </Fragment>
            )}
          </Fragment>
        </Paper>
        <Copyright />
      </main>
    </Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));