import React from 'react'
import TableColumnsAccept from './TableColumnsAccept'


const TableAccept = ( {acceptCandidate} ) => {
    const arr1 = acceptCandidate.acceptCandidate

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
          {arr.map(arr => <TableColumnsAccept key={arr._id} modelName={arr.modelName} barcode={arr.barcode} />) }  
          </tbody>
        </table>
      </div>
    )
}

export default TableAccept