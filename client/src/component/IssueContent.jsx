import React from "react";
import { Col, Spinner, Alert } from "react-bootstrap";
import TableIssued from "./TableIssued";

function IssueContent() {
  let load = (
    <div className="no_content no_content_center">
      <Spinner animation="border" variant="danger" />
    </div>
  );
  let alert = <Alert variant="danger">Нет такого картриджа в базе</Alert>;
  let tableContent = <TableIssued />;
  let content = tableContent
  let noContent = (
    <div className="no_content">
      <p>Нет данных для отображения</p>
    </div>
  );

  return (
    <Col sm={12}>
      {noContent}
      {content}
    </Col>
  );
}

export default IssueContent;
