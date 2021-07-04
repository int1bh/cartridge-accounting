import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getCartridge, CLEAR } from "../actions/trashActions";

function ToRefuelForm() {

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
            Отправить
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

export default ToRefuelForm
