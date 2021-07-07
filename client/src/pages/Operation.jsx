import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { connect } from "react-redux";
import FromRefuelContent from "../component/FromRefuelContent";
import FromRefuelForm from "../component/FromRefuelForm";
import IssueContent from "../component/IssueContent";
import IssuedForm from "../component/IssuedForm";
import ToAcceptContent from "../component/ToAcceptContent";
import ToAcceptForm from "../component/ToAcceptForm";
import ToRefuelContent from "../component/ToRefuelContent";
import ToRefuelForm from "../component/ToRefuelForm";

export const Operation = ({subdivision, issueCandidate, acceptCandidate, subdivisionIs, loadings}) => {
  useEffect(() => document.title = 'Учет картриджей - Операции')
    
  return (
    <div>
      <div className="spacer"></div>
      <Tabs id="controlled-tab-example">
        <Tab eventKey="give_out" title="Выдать">
          <Row>
            <Col sm={12}>
              <div className="spacer"></div>
              <IssuedForm subdivision={{subdivision}} issueCandidate={issueCandidate} subdivisionIs={subdivisionIs}/>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <hr />
              <IssueContent issueCandidate={issueCandidate} subdivisionIs={subdivisionIs} states={loadings}/>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="accept" title="Принять">
          <Row>
            <Col sm={8}>
              <div className="spacer"></div>
              <ToAcceptForm acceptCandidate={acceptCandidate}/>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <hr />
              <ToAcceptContent acceptCandidate={acceptCandidate} states={loadings}/>
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

const mapStateToProps = (state) => {
  return {
    subdivision: state.subdivision.subdivision,
    issueCandidate: state.issueCandidate.issueCandidate,
    acceptCandidate: state.acceptCandidate.acceptCandidate,
    subdivisionIs: state.issueCandidate.issueSubdivision,
    loadings: {isLoading: state.issueCandidate.isLoading, isNoContent: state.issueCandidate.isNoContent, isError: state.issueCandidate.isError}
  }
}

export default connect(mapStateToProps)(Operation);
