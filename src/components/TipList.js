import React, { useEffect } from "react";
import Tip from "./Tip";
import { useTips } from "../hooks/customHooks";
import axios from 'axios';

export default function TipList() {
  const { tips } = useTips();

  useEffect( () => {
    axios.get('https://ww9su1yhrf.execute-api.eu-west-1.amazonaws.com/default/tips')
    .then( response => {
      console.log(response.data);
    })
    .catch( err => console.log('Error msg: ', err));

    console.log('Tipslist');
  }
  
  );  

  return (
    <ul className="tip-list">
      {tips.length === 0 ? (
        <li>No Tips Listed. (Add a Tip)</li>
      ) : (
        tips.map(tip => (
          <Tip
            key={tip.date}
            {...tip}
          />
        ))
      )}
    </ul>
  );
}
