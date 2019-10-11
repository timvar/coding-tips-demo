import React, { useState, useEffect, useReducer } from 'react';
import TipList from "./components/TipList";
import AddTipForm from './components/AddTip';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar';
import axios from 'axios';
import { useStyles } from './styles';

const dataFetchReducer = (state, action) => {
  switch(action.type){
    case 'FETCH_INIT':
      console.log('FETCH_INIT');
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      console.log('FETCH_SUCCESS');
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: action.payload
      };
    case 'FETCH_FAILURE':
      console.log('FETCH_FAILURE');
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    default:
      throw new Error();
  }
}

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const result = await axios(url);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      }
      catch (error) {
        dispatch({ type: 'FETCH_FAILURE' });
      }
    };
    fetchData();
  }, [url]);
  return [state, setUrl];
}


export default function App() {
  const classes = useStyles();
  const [state, doFetch] = useDataApi(
    'https://ww9su1yhrf.execute-api.eu-west-1.amazonaws.com/default/tips',
     {Items: []}
  ); 
  
  return (
    <Container >
      <Navbar classes={classes} />
      <AddTipForm doFetch={doFetch} />
      <TipList tips={state.data.Items} />
    </ Container>
  );
}
