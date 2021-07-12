import React from 'react'
import TableColumnsIssued from './TableColumnsIssued'


const TableIssued = ( {issueCandidate, subdivisionIs} ) => {
    const arr1 = issueCandidate.issueCandidate

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
              <th scope="col">Выдать в отделение</th>
            </tr>
          </thead>
          <tbody>
          {arr.map(arr => <TableColumnsIssued modelName={arr.modelName} barcode={arr.barcode} subdivision={subdivisionIs.subdivisionIs} key={arr._id}/>) }  
          </tbody>
        </table>
      </div>
    )
}

export default TableIssued