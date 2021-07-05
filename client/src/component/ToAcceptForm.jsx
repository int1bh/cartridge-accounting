import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getCartridge, CLEAR } from "../actions/trashActions";

function ToAcceptForm() {

  let [state, setState] = useState({barcode: ''})

  function handleChange(event) {
    setState({ [event.target.name]: event.target.value });
    console.log(state.barcode);
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
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
          <Button variant="success"
          // onClick={issueCartridge}
          >
            Принять
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

export default ToAcceptForm
