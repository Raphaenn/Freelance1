import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function DropSelect({ nomes, tickets, catchData }) {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [filterticket, setFilterticket] = useState([]);

  // Pegar  valor do input e filtra array tickets que são iguais ao valor
  function handleChange(event) {
    const valor = event.target.value;
    const separar = tickets.filter((el, i) => el.companies.name === valor)
    setFilterticket(separar);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return ( 
    <div>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Empresas</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleChange}
          catchData={catchData(filterticket)}
        >
          <MenuItem value="">
            <em>Todas</em>
          </MenuItem>
          { nomes.map(item => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          )) }
        </Select>
      </FormControl>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginRight: 20,
    },
  }));