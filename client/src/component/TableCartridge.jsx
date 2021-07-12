import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import TableColumnsCartridge from './TableColumnsCartridge';
import { useDispatch } from "react-redux";
import {getModelState} from '../actions/modelActions'


const TableCartridge = ( {modelCartridges} ) => {
  const dispatch = useDispatch();
  useEffect(
    
    () => dispatch(getModelState())
  )
    return (
        <div className="scrolled">
          <div className="spacer"></div>
          <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Модель картриджа</th>
              <th scope="col">Цвет</th>
              <th scope="col">Принтеры</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          {modelCartridges.map(modelCartridges => <TableColumnsCartridge modelName={modelCartridges.modelName} color={modelCartridges.color} printers={modelCartridges.printers}  key={modelCartridges._id} />)}
           
          </tbody>
        </table>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        modelCartridges: state.modelCartridges.modelCartridges
    };
  };

export default connect(mapStateToProps)(TableCartridge)