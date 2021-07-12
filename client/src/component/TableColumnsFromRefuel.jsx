import React from "react";

const TableColumnsFromRefuel = ({modelName, barcode}) => {    
  return (
    <React.Fragment>
      <tr>
        <td>{modelName}</td>
        <td>{barcode}</td>
      </tr>
    </React.Fragment>
  );
};

export default TableColumnsFromRefuel;
