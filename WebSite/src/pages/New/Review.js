import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';


export default function Review({ values }) {
  const classes = useStyles();
  const { name, email, address, phone, cep, social, open_to, latitude, longitude, obs, paymentform, ticket, ticket2, ticket3, ticket4, highlight, categories } = values; 

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        {obs}
      </Typography>
      <List disablePadding >
          <ListItem className={classes.listItem}>
            <ListItemText primary={"Nome"} secondary={name} />
            <ListItemText primary={"Email"} secondary={email} />
            <ListItemText primary={"Telefone"} secondary={phone} />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary={"Social"} secondary={social} />
            <ListItemText primary={"Open"} secondary={open_to} />
            <ListItemText primary={"Cep"} secondary={cep} />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary={"Address"} secondary={address} />
          </ListItem>
        <hr></hr>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Informações promocionais
          </Typography>
          <Typography gutterBottom>Oferta Principal</Typography>
          <Typography gutterBottom>{ticket}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
          
          </Typography>
          <Typography gutterBottom>Ofertas adicionais</Typography>
          <Typography gutterBottom>{ticket2}</Typography>
          <Typography gutterBottom>{ticket3}</Typography>
          <Typography gutterBottom>{ticket4}</Typography>
        </Grid>

      </Grid>
    </Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));