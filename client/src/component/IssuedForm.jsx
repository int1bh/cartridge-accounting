import React, { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getIssueCandidate, insertSubdivision, CLEAR } from "../actions/operationsActions";

function IssuedForm({subdivision, issueCandidate, subdivisionIs}) {
  const subdibisionList = subdivision.subdivision
  const dispatch = useDispatch()
  const [state, setState] = useState({divisionName: "", barcode: "", disabled: true})
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [res, setRes] = useState('')

  function handleChangeList(event) {
    event.persist();
    dispatch(insertSubdivision(event.target.value))
    setState({disabled: false})
  }

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
    dispatch(getIssueCandidate(state.barcode));
    dispatch(insertSubdivision(state.divisionName))
    setState({ barcode: "" });
  }

  function issueCartridge() {
    let issueItems = Array.from(
      new Set(issueCandidate.map((issueCandidate) => issueCandidate.barcode))
    );

    let body = {
      barcode: issueItems,
      issued: true,
      issuedHistory: [{
        subdivision: subdivisionIs
    }]
    }
    async function issue() {
      let response = await fetch("/api/issue", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      let result = await response.json();
      setRes(result.message)
      dispatch({ type: CLEAR });
    }
    issue();
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
        <Col sm={4}>
            <Form.Label htmlFor="divisionName" srOnly>
              Отделение
            </Form.Label>
            <Form.Control
              onChange={handleChangeList}
              name="divisionName"
              id="divisionName"
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
          <Button variant="success" onClick={issueCartridge} disabled={state.disabled}>
            Выдать
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

export default IssuedForm;
