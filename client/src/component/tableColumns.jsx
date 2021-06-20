import React from "react";
import { useDispatch } from "react-redux";
import { viewSubdivision } from "../actions/subdivisionActions";


const Columns = ({ divisionName, address }) => {
  const dispatch = useDispatch();
  function dsp() {
    return dispatch(viewSubdivision());
  }
  const btnRemoveSub = async () => {
    let response = await fetch("http://localhost:5000/api/dropsubdivision", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ divisionName }),
    })

    let result = await response.json()
    window.M.toast({ html: result.message, classes: 'rounded' });
    dsp()
  };

  return (
    <React.Fragment>
      <tr>
        <td>{divisionName}</td>
        <td>{address}</td>
        <td>
          <button
            onClick={btnRemoveSub}
            className="btn waves-effect waves-light red"
          >
            Удалить
          </button>
        </td>
      </tr>  
    </React.Fragment>
  );
};

export default Columns
