import React from 'react'
import { Col, Row, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export const Operation = () => {
  return (
    <div>
      <div className="spacer"></div>
      <Tabs
        id="controlled-tab-example"
      >
        <Tab eventKey="give_out" title="Выдать">
          <Row>
            <Col sm={4}>
              <div className="spacer"></div>
              
              <hr />
              <Button
                onClick={() => alert("click")}
                className="btn btn-primary"
              >
                Обновить список
              </Button>
            </Col>
            <Col sm={8}>
            <div className="spacer"></div>
              
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="accept" title="Принять">
          <Row>
            <Col sm={4}>
              <div className="spacer"></div>
              
              <hr />
              <Button
                onClick={() => alert("click")}
                className="btn btn-primary"
              >
                Обновить список
              </Button>
            </Col>
            <Col sm={8}>
            <div className="spacer"></div>
              
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="empty" title="В заправку">
          <Row>
            <Col sm={4}>
              <div className="spacer"></div>
              
              <hr />
              <Button
                onClick={() => alert("click")}
                className="btn btn-primary"
              >
                Обновить список
              </Button>
            </Col>
            <Col sm={8}>
            <div className="spacer"></div>
              
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="refuel" title="Из заправки">
          <Row>
            <Col sm={4}>
              <div className="spacer"></div>
              
              <hr />
              <Button
                onClick={() => alert("click")}
                className="btn btn-primary"
              >
                Обновить список
              </Button>
            </Col>
            <Col sm={8}>
            <div className="spacer"></div>
              
            </Col>
          </Row>
        </Tab>
    </Tabs>
</div>
)
}

export default Operation