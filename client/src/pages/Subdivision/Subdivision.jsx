import React from "react";
import { useDispatch } from "react-redux";
import { viewSubdivision } from "../../actions/subdivisionActions";
import Form from "../../component/form";
import Table from "../../component/table";
import "./Subdivision.css";

export const Subdivision = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Редактор отделений</h4>
      <Form />
      <button onClick={() => dispatch(viewSubdivision())} className="btn waves-effect waves-light green">Обновить список</button>
      <hr />
      <Table />
    </div>
  );
};

export default Subdivision;
