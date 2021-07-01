import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getCartridge } from "../actions/trashActions";

function Trash() {
  const [state, setState] = useState({ barcode: "" });
  const dispatch = useDispatch();
  let barcodesArray = [];
  

  function handleChange(event) {
    setState({ [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    barcodesArray.push(state.barcode)
    console.log("barcodes:", barcodesArray)
    dispatch(getCartridge(state.barcode));
    setState({ barcode: "" });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col>
          <Form.Label srOnly>Отсканируйте штрихкод</Form.Label>
          <Form.Control
            name="barcode"
            onChange={handleChange}
            type="text"
            placeholder="Отсканируйте штрихкод"
          />
        </Col>
        <Col>
          <Button variant="danger" onClick={() => console.log("barcodes:", barcodesArray)}>
            Удалить картриджи из базы
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

export default Trash;
