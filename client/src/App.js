import React from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import Menu from './component/Menu';
import Content from './component/Content'


function App() {
  return (
    <Container fluid>
      <Row>
        <Col sm={2}>
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
