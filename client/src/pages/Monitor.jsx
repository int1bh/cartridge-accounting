import React, { useEffect } from "react";
import ChartsComponent from "../component/ChartsComponent";



export const Monitor = () => {
    useEffect(() => document.title = 'Учет картриджей - Монитор')
    
  return (
    <ChartsComponent />
  );
};


export default Monitor;
