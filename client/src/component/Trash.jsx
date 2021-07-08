import React, { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getCartridge, CLEAR } from "../actions/trashActions";

function Trash({ trashCandidate, states }) {
  const [state, setState] = useState({ barcode: "" });
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [res, setRes] = useState('')

  function handleChange(event) {
    setState({ [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    dispatch(getCartridge(state.barcode));
    setState({ barcode: "" });
  }

  function trashCartridge() {
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
      setRes(result.message)
      dispatch({ type: CLEAR });
    }
    trash();
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
          <Button variant="danger" onClick={trashCartridge}>
            Удалить картриджи из базы
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

export default Trash;
