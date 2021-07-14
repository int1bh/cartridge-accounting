import React, { useEffect } from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Menu from './component/Menu';
import Content from './component/Content'
import { viewSubdivision } from "./actions/subdivisionActions";
import { viewModel } from "./actions/modelActions";
import { getFiltered, GET_FILTERED_ISSUED, GET_FILTERED_REFUEL, GET_FILTERED_WAREHOUSE } from './actions/operationsActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(viewSubdivision()));
  useEffect(() => dispatch(viewModel()))
  useEffect(() => dispatch(getFiltered('issued=false&toRefuel=false', GET_FILTERED_WAREHOUSE)))
  useEffect(() => dispatch(getFiltered('issued=true&toRefuel=false', GET_FILTERED_ISSUED)))
  useEffect(() => dispatch(getFiltered('toRefuel=true', GET_FILTERED_REFUEL)))

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
