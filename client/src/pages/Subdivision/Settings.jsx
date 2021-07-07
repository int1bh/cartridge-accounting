import React, { useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDispatch } from "react-redux";
import { viewSubdivision } from "../../actions/subdivisionActions";
import { viewModel } from "../../actions/modelActions";
import FormSubdivision from "../../component/FormSubdivision";
import FormModelCartridge from "../../component/FormModelCartridge";
import Table from "../../component/Table";
import TableCartridge from "../../component/TableCartridge";
import "./Settings.css";


export const Settings = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(viewSubdivision()));
  useEffect(() => dispatch(viewModel()))
  useEffect(() => document.title = 'Учет картриджей - Настройки')

  return (
    <div>
      <div className="spacer"></div>
      <Tabs
        id="controlled-tab-example"
      >
        <Tab eventKey="home" title="Редактор моделей картриджей">
          <Row>
            <Col sm={4}>
              <div className="spacer"></div>
              <FormModelCartridge />
              <hr />
              <Button
                onClick={() => dispatch(viewModel())}
                variant='success'
              >
                Обновить список
              </Button>
            </Col>
            <Col sm={8}>
            <div className="spacer"></div>
              <TableCartridge />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="profile" title="Редактор отделений">
          <Row>
          <Col sm={4}>
          <div className="spacer"></div>
                <FormSubdivision />
                <hr />
                <Button
                  onClick={() => dispatch(viewSubdivision())}
                  variant='success'
                >
                  Обновить список
                </Button>
                <hr />
                </Col>
                <Col sm={8}>
                <div className="spacer"></div>
                <Table />
          </Col>
          </Row>
          
        </Tab>
      </Tabs>
      <Row></Row>
    </div>
  );
};

export default Settings;
