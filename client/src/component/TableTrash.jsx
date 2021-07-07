import React from 'react'
import TableColumnsTrash from './TableColumnsTrash'


const TableTrash = ( data ) => {
    const arr1 = data.data;

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
              <th scope="col">История выдачи</th>
            </tr>
          </thead>
          <tbody>
          {arr.map(arr => <TableColumnsTrash key={arr._id} modelName={arr.modelName} barcode={arr.barcode} issuedHistory={arr.issuedHistory} />)}  
          </tbody>
        </table>
      </div>
    )
}

export default TableTrash