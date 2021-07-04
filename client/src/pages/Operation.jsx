import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FromRefuelContent from "../component/FromRefuelContent";
import FromRefuelForm from "../component/FromRefuelForm";
import IssueContent from "../component/IssueContent";
import IssuedForm from "../component/IssuedForm";
import ToAcceptContent from "../component/ToAcceptContent";
import ToAcceptForm from "../component/ToAcceptForm";
import ToRefuelContent from "../component/ToRefuelContent";
import ToRefuelForm from "../component/ToRefuelForm";

export const Operation = () => {
  return (
    <div>
      <div className="spacer"></div>
      <Tabs id="controlled-tab-example">
        <Tab eventKey="give_out" title="Выдать">
          <Row>
            <Col sm={12}>
              <div className="spacer"></div>
              <IssuedForm />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <hr />
              <IssueContent />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="accept" title="Принять">
          <Row>
            <Col sm={8}>
              <div className="spacer"></div>
              <ToAcceptForm />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <hr />
              <ToAcceptContent />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="empty" title="В заправку">
          <Row>
            <Col sm={8}>
              <div className="spacer"></div>
              <ToRefuelForm />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <hr />
              <ToRefuelContent />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="refuel" title="Из заправки">
          <Row>
            <Col sm={8}>
              <div className="spacer"></div>
              <FromRefuelForm />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <hr />
              <FromRefuelContent />
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Operation;
