import React from "react";
import { Col, Spinner, Alert } from "react-bootstrap";
import TableAccept from "./TableAccept";

function ToAcceptContent({acceptCandidate, states}) {
  let content;
  let load = (
    <div className="no_content no_content_center">
      <Spinner animation="border" variant="danger" />
    </div>
  );
  let alert;
  let tableContent = <TableAccept acceptCandidate={{acceptCandidate}}/>;
  
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
    alert = <Alert variant="danger">На складе, в заправке или не найден</Alert>;
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

export default ToAcceptContent;
