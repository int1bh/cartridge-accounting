import React from 'react'
import { connect } from 'react-redux';
import Column from './tableColumns'


const Table = ( {subdivision} ) => {
    return (
        <div className="scrolled">
          <table>
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