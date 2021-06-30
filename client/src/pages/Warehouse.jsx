import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FormAddCartridge from "../component/FormAddCartridge";
import { connect } from "react-redux";
import Trash from "../component/Trash";

export const Warehouse = ({ modelCartridges, trashCandidate }) => {
  return (
    <div>
      <div className="spacer"></div>
      <Tabs id="controlled-tab-example">
        <Tab eventKey="warehouse" title="Завести картриджи на склад">
          <Row>
            <Col>
              <div className="spacer"></div>
              <FormAddCartridge modelCartridges={modelCartridges} />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="trash" title="Утилизировать картриджи">
          <Row className="justify-content-md-center">
            <Col sm={8}>
              <div className="spacer"></div>
              <Trash />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              {/* <div className="spacer"></div> */}
              <hr />
              
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modelCartridges: state.modelCartridges.modelCartridges,
    trashCandidate: state.trashCandidate.trashCandidate
  };
};

export default connect(mapStateToProps)(Warehouse);
