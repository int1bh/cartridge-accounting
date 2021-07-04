import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import IssueFormContainer from "../component/IssueFormContainer";

export const Operation = () => {
  return (
    <div>
      <div className="spacer"></div>
      <Tabs id="controlled-tab-example">
        <Tab eventKey="give_out" title="Выдать">
          <Row className="justify-content-md-center">
            <Col sm={8}>
              <div className="spacer"></div>
              <IssueFormContainer />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <hr />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="accept" title="Принять">
          <Row className="justify-content-md-center">
            <Col sm={8}>
              <div className="spacer"></div>
              <IssueFormContainer />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <hr />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="empty" title="В заправку">
          <Row className="justify-content-md-center">
            <Col sm={8}>
              <div className="spacer"></div>
              <IssueFormContainer />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <hr />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="refuel" title="Из заправки">
          <Row className="justify-content-md-center">
            <Col sm={8}>
              <div className="spacer"></div>
              <IssueFormContainer />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <hr />
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Operation;
