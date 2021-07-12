import React from "react";
import { Col, Spinner, Alert } from "react-bootstrap";
import TableFromRefuel from "./TableFromRefuel";

function FromRefuelContent({fromRefuelCandidate, states}) {
  let content;
  let load = (
    <div className="no_content no_content_center">
      <Spinner animation="border" variant="danger" />
    </div>
  );
  let alert;
  let tableContent = <TableFromRefuel fromRefuelCandidate={{fromRefuelCandidate}}/>;
  
  let noContent = (
    <div className="no_content">
      <p>Нет данных для отображения</p>
    </div>
  );

  if (states.isLoading & !states.isNoContent) {
    content = load
  } else if (!states.isLoading & !states.isNoContent & !states.isError) {
    content = tableContent
  } else if (states.isError & !states.isLoading & !states.isNoContent) {
    alert = <Alert variant="danger">Уже на складе</Alert>;
    content = tableContent
  } else {
    content = noContent;
  }

  return (
    <Col sm={12}>
      {alert}
      {content}
    </Col>
  );
}

export default FromRefuelContent;
