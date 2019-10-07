import React from 'react';

export default function Tip({
  author,
  date,
  category,
  tip
}) {

  return (
    <>
      <li> { author } </li>
      <li> { date } </li>  
      <li> { category } </li>  
      <li> { tip } </li>  
    </>
  );
}











/*
import React from 'react';
import axios from 'axios';

const Tips = (props) => {

  console.log('Tips');

  const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
  };

  axios.get('https://ww9su1yhrf.execute-api.eu-west-1.amazonaws.com/default/tips')
    .then( response => {
      console.log(response.data);
    })
    .catch( err => console.log('Error msg: ', err));


  return (
    <div className="container">
      <h1>Home Page</h1>
    </div>
  )
}

export default Tips;
*/