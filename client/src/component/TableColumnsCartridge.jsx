import React from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { viewModel } from "../actions/modelActions";

const TableColumnsCartridge = ({ modelName, color, printers }) => {
  const dispatch = useDispatch();
  function dspm() {
    return dispatch(viewModel());
  }
  const btnRemoveModel = async () => {
    let response = await fetch("/api/dropmodel", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ modelName }),
    });
console.log(modelName);
    await response.json();
    
    dspm();
  };

  return (
    <React.Fragment>
      <tr>
        <td>{modelName}</td>
        <td>{color}</td>
        <td>{printers}</td>
        <td>
          <Button
            variant="danger"
            onClick={btnRemoveModel}
            className="btn waves-effect waves-light red"
          >
            Удалить
          </Button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default TableColumnsCartridge;
