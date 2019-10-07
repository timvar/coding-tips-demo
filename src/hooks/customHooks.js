import React, { useState, createContext, useContext } from "react";
import tipsData from "../data/tips-data.json";

const TipContext = createContext();

export const useTips = () => useContext(TipContext);

export const TipsProvider = ({ children }) => {

  const [tips, setTips] = useState(tipsData);
  
  const addTip = (author, date, category, tip) =>
    setTips([
      ...tips,
      {
        author,
        date,
        category,
        tip
      }
    ]);
  
  return (
    <TipContext.Provider value={{ tips, addTip }}>
      {children}
    </ TipContext.Provider>
  );
};

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: e => setValue(e.target.value) },
    () => setValue(initialValue)
  ];
};