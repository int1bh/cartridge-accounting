import React, { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getRefuelCandidate, CLEAR } from "../actions/operationsActions";

function ToRefuelForm({refuelCandidate}) {

  const dispatch = useDispatch()
  const [state, setState] = useState({barcode: ''})

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [res, setRes] = useState('')

  function handleChange(event) {
    event.persist();
    setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    dispatch(getRefuelCandidate(state.barcode));
    setState({ barcode: "" });
  }

  function refuelCartridge() {
    let refuelItems = Array.from(
      new Set(refuelCandidate.map((refuelCandidate) => refuelCandidate.barcode))
    );

    let body = {
      barcode: refuelItems,
      issued: false,
      toRefuel: true,
      issuedHistory: [{
        subdivision: 'Отдан в заправку'
    }]
    }
    async function refuel() {
      let response = await fetch("/api/torefuel", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      let result = await response.json();
      setRes(result.message)
      dispatch({ type: CLEAR });
    }
    refuel();
    handleShow()
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
          onClick={refuelCartridge}
          >
            Отправить
          </Button>
        </Col>
      </Form.Row>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <Modal.Title>Информация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {res}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            OK
          </Button>
          </Modal.Footer>
      </Modal>
    </Form>
  );
}

export default ToRefuelForm
