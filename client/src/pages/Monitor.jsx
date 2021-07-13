import React, { useEffect } from "react";
import { connect } from 'react-redux'
import ChartsComponent from "../component/ChartsComponent";



export const Monitor = (modelCartridges) => {
    useEffect(() => document.title = 'Учет картриджей - Монитор')
    //console.log("model", modelCartridges.modelCartridges);
  return (
    <ChartsComponent modelCartridges={modelCartridges.modelCartridges}/>
  );
};

const mapStateToProps = (state) => {
  return {
    modelCartridges: state.modelCartridges.modelCartridges.map(item => item.modelName)
  };
};

export default connect(mapStateToProps)(Monitor);
