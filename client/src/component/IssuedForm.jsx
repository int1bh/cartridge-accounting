import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getCartridge, CLEAR } from "../actions/trashActions";

function IssuedForm(subdivision) {
  const subdibisionList = subdivision.subdivision

  return (
    <Form onSubmit={null}>
      <Form.Row>
      <Col sm={4}>
            <Form.Label htmlFor="modelName" srOnly>
              Модель картриджа
            </Form.Label>
            <Form.Control
              onChange={null}
              name="modelName"
              id="modelName"
              as="select"
              defaultValue="Выберите отделение"
            >
              <option disabled>Выберите отделение</option>
              {subdibisionList.map((subdibisionList) => (
                <option key={subdibisionList._id}>{subdibisionList.divisionName}</option>
              ))}
            </Form.Control>
          </Col>
        <Col>
          <Form.Label srOnly>Отсканируйте штрихкод</Form.Label>
          <Form.Control
            name="barcode"
            onChange={null}
            type="text"
            placeholder="Отсканируйте штрихкод"
          />
        </Col>
        <Col>
          <Button variant="success" onClick={null}>
            Выдать
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

export default IssuedForm;
