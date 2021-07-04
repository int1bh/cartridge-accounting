import React from 'react'
import TableColumnsIssued from './TableColumnsIssued'


const TableIssued = ( data ) => {
    const arr = data.data;
    return (
        <div className="scrolled">
          <div className="spacer"></div>
          <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Модель</th>
              <th scope="col">Штрихкод</th>
              <th scope="col">Выдан в отделение</th>
            </tr>
          </thead>
          <tbody>
          {/* {arr.map(arr => <TableColumnsIssued />)}   */}
          </tbody>
        </table>
      </div>
    )
}

export default TableIssued