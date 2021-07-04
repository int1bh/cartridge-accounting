import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getCartridge, CLEAR } from "../actions/trashActions";

function FromRefuelForm() {

  return (
    <Form onSubmit={null}>
      <Form.Row>
        <Col>
          <Form.Label srOnly>Отсканируйте штрихкод</Form.Label>
          <Form.Control
            name="barcode"
            //onChange={handleChange}
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

export default FromRefuelForm
