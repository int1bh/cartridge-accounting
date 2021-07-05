import React from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { viewSubdivision } from "../actions/subdivisionActions";

const TableColumns = ({ divisionName, address }) => {
  const dispatch = useDispatch();
  function dsp() {
    return dispatch(viewSubdivision());
  }
  const btnRemoveSub = async () => {
    let response = await fetch("/api/dropsubdivision", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ divisionName }),
    });

    await response.json();
    
    dsp();
  };

  return (
    <React.Fragment>
      <tr>
        <td>{divisionName}</td>
        <td>{address}</td>
        <td>
          <Button
            variant="danger"
            onClick={btnRemoveSub}
            className="btn waves-effect waves-light red"
          >
            Удалить
          </Button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default TableColumns;
