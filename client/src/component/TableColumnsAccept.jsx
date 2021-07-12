import React from "react";

const TableColumnsAccept = ({modelName, barcode}) => {    
  return (
    <React.Fragment>
      <tr>
        <td>{modelName}</td>
        <td>{barcode}</td>
      </tr>
    </React.Fragment>
  );
};

export default TableColumnsAccept;
