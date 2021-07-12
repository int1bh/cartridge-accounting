import React from 'react'
import TableColumnsFromRefuel from './TableColumnsFromRefuel'


const TableFromRefuel = ( {fromRefuelCandidate} ) => {
    const arr1 = fromRefuelCandidate.fromRefuelCandidate

    let tmpArray = [];

function itemCheck(item) {
    if (tmpArray.indexOf(item.barcode) === -1) {
        tmpArray.push(item.barcode);
        return true
    }
    return false;
}

let arr = arr1.filter((item) => itemCheck(item));
    
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
          {arr.map(arr => <TableColumnsFromRefuel modelName={arr.modelName} barcode={arr.barcode} key={arr._id}/>) }  
          </tbody>
        </table>
      </div>
    )
}

export default TableFromRefuel