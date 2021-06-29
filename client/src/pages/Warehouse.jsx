import React, {useEffect} from 'react'
import { Col, Row, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FormAddCartridge from "../component/FormAddCartridge"
import { connect, useDispatch } from "react-redux"
import { viewSubdivision } from "../actions/subdivisionActions";
import { viewModel } from "../actions/modelActions";

export const Warehouse = ({modelCartridges}) => {
// const dispatch = useDispatch();

//   useEffect(() => dispatch(viewSubdivision()));
//   useEffect(() => dispatch(viewModel()))

  
    return (
        <div>
          <div className="spacer"></div>
          <Tabs
            id="controlled-tab-example"
          >
            <Tab eventKey="warehouse" title="Завести картриджи на склад">
              <Row>
                <Col>
                  <div className="spacer"></div>
                  <FormAddCartridge modelCartridges={modelCartridges}/>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="trash" title="Утилизировать картриджи">
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

const mapStateToProps = state => {
  return {
    modelCartridges: state.modelCartridges.modelCartridges
  }
}

export default connect(mapStateToProps)(Warehouse)