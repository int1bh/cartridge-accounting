import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import {getState} from '../actions/subdivisionActions'
import TableColumns from './TableColumns'


const Table = ( {subdivision} ) => {
  const dispatch = useDispatch();
  useEffect(
    //()=>console.log(subdivision)
    () => dispatch(getState())
  )

    return (
        <div className="scrolled">
          <div className="spacer"></div>
          <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Отделение</th>
              <th scope="col">Адрес</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          {subdivision.map(subdivision => <TableColumns divisionName={subdivision.divisionName} address={subdivision.address} key={subdivision._id} />)}
           
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