import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function Compform({ handleChange, values }) {

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Empresa
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="name"
            label="Nome"
            fullWidth
            onChange={handleChange('name')}
            defaultValue={values.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Email"
            fullWidth
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="address"
            defaultValue={values.address}
            label="Endereço"
            fullWidth
            onChange={handleChange('address')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="phone"
            defaultValue={values.phone}
            label="Telefone"
            fullWidth
            onChange={handleChange('phone')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
          required 
          name="cep" 
          defaultValue={values.cep}
          label="Cep" 
          fullWidth 
          onChange={handleChange('cep')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="open_to"
            defaultValue={values.open_to}
            label="Horário de atendimento"
            fullWidth
            onChange={handleChange('open_to')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="social"
            defaultValue={values.social}
            label="Instagram"
            fullWidth
            onChange={handleChange('social')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="latitude"
            defaultValue={values.latitude}
            label="Latitude"
            fullWidth
            onChange={handleChange('latitude')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="longitude"
            defaultValue={values.longitude}
            label="Longitude"
            fullWidth
            onChange={handleChange('longitude')}
          />
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Fragment>
  );
}