import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FormAddCartridge from "../component/FormAddCartridge";
import { connect } from "react-redux";
import Trash from "../component/Trash";
import TrashContent from "../component/TrashContent";

export const Warehouse = ({ modelCartridges, trashCandidate, loadings }) => {
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
              <Trash trashCandidate={{trashCandidate}.trashCandidate} />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <hr />
              <TrashContent trashCandidate={{trashCandidate}.trashCandidate} states={loadings} />
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
    trashCandidate: state.trashCandidate.trashCandidate,
    loadings: {isLoading: state.trashCandidate.isLoading, isNoContent: state.trashCandidate.isNoContent, isError: state.trashCandidate.isError}
  };
};

export default connect(mapStateToProps)(Warehouse);
