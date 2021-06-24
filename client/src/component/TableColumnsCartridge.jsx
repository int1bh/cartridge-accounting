import React from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { viewModel } from "../actions/modelActions";

const TableColumnsCartridge = ({ modelName, color, printers }) => {
  const dispatch = useDispatch();
  function dsp() {
    return dispatch(viewModel());
  }
  const btnRemoveSub = async () => {
    let response = await fetch("http://localhost:5000/api/dropmodel", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ modelName }),
    });

    let result = await response.json();
    //window.M.toast({ html: result.message, classes: "rounded" });
    dsp();
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

export default TableColumnsCartridge;
