import React, { useEffect } from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Menu from './component/Menu';
import Content from './component/Content'
import { viewSubdivision } from "./actions/subdivisionActions";
import { viewModel } from "./actions/modelActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(viewSubdivision()));
  useEffect(() => dispatch(viewModel()))

  return (
    <Container fluid>
      <Row>
        <Col sm={2} className="menu">
          <Menu />
        </Col>
        <Col sm={10}>
          <Content />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
