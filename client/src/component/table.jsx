import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import {getState} from '../actions/subdivisionActions'
import Column from './tableColumns'


const Table = ( {subdivision} ) => {
  const dispatch = useDispatch();
  useEffect(
    //()=>console.log(subdivision)
    () => dispatch(getState())
  )

    return (
        <div className="scrolled">
          <table className="centered">
          <thead>
            <tr>
              <th>Отделение</th>
              <th>Адрес</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {subdivision.map(subdivision => <Column divisionName={subdivision.divisionName} address={subdivision.address} key={subdivision._id} />)}
           
          </tbody>
        </table>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
      subdivision: state.subdivision.subdivision
    };
  };

export default connect(mapStateToProps)(Table)