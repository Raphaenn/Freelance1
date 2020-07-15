import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function Negform({ handleChange, values }) {

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Dados Promocionais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField required
          name="descricao"
          defaultValue={values.obs}
          label="Descrição da atividade" 
          fullWidth
          onChange={handleChange('obs')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          required 
          name="desc" 
          defaultValue={values.ticket}
          label="Desconto obrigatório" 
          fullWidth 
          onChange={handleChange('ticket')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          name="desc1" 
          defaultValue={values.ticket2}
          label="Desconto Optativo 1" 
          fullWidth 
          onChange={handleChange('ticket2')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="desc2"
            defaultValue={values.ticket3}
            label="Desconto Optativo 2"
            // helperText="Last three digits on signature strip"
            fullWidth
            onChange={handleChange('ticket3')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          name="desc3" 
          defaultValue={values.ticket4}
          label="Desconto Optativo 3" 
          fullWidth 
          onChange={handleChange('ticket4')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          name="payment" 
          defaultValue={values.paymentform}
          label="Formas de pagamento" 
          fullWidth 
          onChange={handleChange('paymentform')}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}