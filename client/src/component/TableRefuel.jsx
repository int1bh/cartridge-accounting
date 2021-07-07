import React from 'react'
import TableColumnsRefuel from './TableColumnsRefuel'


const TableRefuel = ( {refuelCandidate} ) => {
    const arr = refuelCandidate.refuelCandidate
    
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
          {arr.map(arr => <TableColumnsRefuel modelName={arr.modelName} barcode={arr.barcode} key={arr._id}/>) }  
          </tbody>
        </table>
      </div>
    )
}

export default TableRefuel