import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getIssueCandidate, insertSubdivision, CLEAR } from "../actions/operationsActions";

function IssuedForm({subdivision, issueCandidate, subdivisionIs}) {
  const subdibisionList = subdivision.subdivision
  const dispatch = useDispatch()

  

  let [state, setState] = useState({divisionName: "", barcode: "", disabled: true})

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
      alert(result.message);
      dispatch({ type: CLEAR });
    }
    issue();
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
    </Form>
  );
}

export default IssuedForm;
