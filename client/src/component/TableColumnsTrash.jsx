import React from "react";

const TableColumnsTrash = ({ modelName, barcode, issuedHistory }) => {    
  return (
    <React.Fragment>
      <tr>
        <td>{modelName}</td>
        <td>{barcode}</td>
        <td>
        {issuedHistory.map(issuedHistory => <div className="cheaps">{issuedHistory.date.substring(0,10).replace(new RegExp("-", 'g'), ".")} ------ {issuedHistory.subdivision}</div>)}
        </td>
      </tr>
    </React.Fragment>
  );
};

export default TableColumnsTrash;
