import React from "react";

const TableColumnsIssued = ({modelName, barcode, subdivision}) => {    
  return (
    <React.Fragment>
      <tr>
        <td>{modelName}</td>
        <td>{barcode}</td>
        <td>{subdivision}</td>
      </tr>
    </React.Fragment>
  );
};

export default TableColumnsIssued;
