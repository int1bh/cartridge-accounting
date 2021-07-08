import React, { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAcceptCandidate, CLEAR } from "../actions/operationsActions";

function ToAcceptForm({acceptCandidate}) {
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
    dispatch(getAcceptCandidate(state.barcode));
    setState({ barcode: "" });
  }

  function acceptCartridge() {
    let acceptItems = Array.from(
      new Set(acceptCandidate.map((acceptCandidate) => acceptCandidate.barcode))
    );

    let body = {
      barcode: acceptItems,
      issued: false,
      issuedHistory: [{
        subdivision: 'Склад'
    }]
    }
    async function accept() {
      let response = await fetch("/api/returnwarehouse", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      let result = await response.json();
      setRes(result.message)
      dispatch({ type: CLEAR });
    }
    accept();
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
          onClick={acceptCartridge}
          >
            Принять
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

export default ToAcceptForm
