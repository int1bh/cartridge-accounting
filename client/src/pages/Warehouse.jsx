import React from 'react'
import { Col, Row, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export const Warehouse = () => {
    return (
        <div>
          <div className="spacer"></div>
          <Tabs
            id="controlled-tab-example"
            // activeKey={key}
            // onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="home" title="Редактор моделей картриджей">
              <Row>
                <Col sm={4}>
                  <div className="spacer"></div>
                  
                  <hr />
                  <button
                    onClick={() => alert("click")}
                    className="btn btn-primary"
                  >
                    Обновить список
                  </button>
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

export default Warehouse