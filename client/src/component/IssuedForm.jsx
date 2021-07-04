import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getCartridge, CLEAR } from "../actions/trashActions";

function IssuedForm({ trashCandidate, states }) {
  const [state, setState] = useState({ barcode: "" });
  const dispatch = useDispatch();

  function handleChange(event) {
    setState({ [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    dispatch(getCartridge(state.barcode));
    setState({ barcode: "" });
  }

  function issueCartridge() {
    let trashedItems = Array.from(
      new Set(trashCandidate.map((trashCandidate) => trashCandidate.barcode))
    );
    async function trash() {
      let response = await fetch("/api/dropcartridge", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trashedItems),
      });
      let result = await response.json();
      alert(result.message);
      dispatch({ type: CLEAR });
    }
    trash();
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
          <Button variant="danger" onClick={issueCartridge}>
            Выдать
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

export default IssuedForm;