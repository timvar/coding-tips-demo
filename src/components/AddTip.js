import React, { useState } from "react";
import { Button, Paper, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useStyles } from '../styles';

export default function AddTipForm( {doFetch}) {
  
  const classes = useStyles();
  const [values, setValues] = useState({
    author: '',
    category: '',
    tip: '',
  });
  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submit = e => {
    e.preventDefault();
    console.log('submit');
    console.log(values);
    axios.post('https://ww9su1yhrf.execute-api.eu-west-1.amazonaws.com/default/tips', values)
    .then( response => {
      console.log(response.data);
      doFetch('https://ww9su1yhrf.execute-api.eu-west-1.amazonaws.com/default/tips')

    })
    .catch( err => console.log('Error msg: ', err));
  };

  return (
    <Paper>
    <form onSubmit={submit} className={classes.container} noValidate autoComplete="off">
      <TextField
        label="author"
        className={classes.textField}
        value={values.author}
        onChange={handleChange('author')}
        margin="normal"
        fullWidth
      />
      <TextField
        label="category"
        className={classes.textField}
        value={values.category}
        onChange={handleChange('category')}
        margin="normal"
        fullWidth
      />
      <TextField
        label="tip"
        className={classes.textField}
        value={values.tip}
        onChange={handleChange('tip')}
        margin="normal"
        fullWidth
      />
      <Container style={{height:100, textAlign: 'center'}}>
      <Button 
        type="submit"
        variant="outlined"
        color="primary"
        
      >
        Add
      </Button>
      </Container>
    </form>
    </Paper>
  );
}