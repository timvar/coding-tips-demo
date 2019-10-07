import React, { useState } from "react";
import { useInput} from '../hooks/customHooks';
import { useTips } from "../hooks/customHooks";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));


export default function AddTipForm() {
  const [authorProps, resetAuthor] = useInput("");
  const [dateProps, resetDate] = useInput(0);
  const [categoryProps, resetCategory] = useInput("");
  const [tipProps, resetTip] = useInput("");
  const { addTip } = useTips();
  
  const classes = useStyles();
  const [values, setValues] = useState({
    author: '',
    category: '',
    tip: '',
  });
  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
/*
  const submit = e => {
    e.preventDefault();
    addTip(authorProps.value, dateProps.value, categoryProps.value, tipProps.value);
    resetAuthor();
    resetDate();
    resetCategory();
    resetTip();
  };
*/

  const submit = e => {
    e.preventDefault();
    console.log('submit');
    console.log(values);
    axios.post('https://ww9su1yhrf.execute-api.eu-west-1.amazonaws.com/default/tips', values)
    .then( response => {
      console.log(response.data);
    })
    .catch( err => console.log('Error msg: ', err));

  };

  return (
    <form onSubmit={submit} className={classes.container} noValidate autoComplete="off">
      <TextField
        label="author"
        className={classes.textField}
        value={values.author}
        onChange={handleChange('author')}
        margin="normal"
      />
      <TextField
        label="category"
        className={classes.textField}
        value={values.category}
        onChange={handleChange('category')}
        margin="normal"
      />
      <TextField
        label="tip"
        className={classes.textField}
        value={values.tip}
        onChange={handleChange('tip')}
        margin="normal"
      />
      <Button 
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Add
      </Button>
    </form>
  );
}