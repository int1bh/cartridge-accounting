import React from 'react'
import TableColumnsAccept from './TableColumnsAccept'


const TableAccept = ( {acceptCandidate} ) => {
    const arr = acceptCandidate.acceptCandidate
    
    return (
        <div className="scrolled">
          <div className="spacer"></div>
          <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Модель</th>
              <th scope="col">Штрихкод</th>
            </tr>
          </thead>
          <tbody>
          {arr.map(arr => <TableColumnsAccept modelName={arr.modelName} barcode={arr.barcode} key={arr._id}/>) }  
          </tbody>
        </table>
      </div>
    )
}

export default TableAccept