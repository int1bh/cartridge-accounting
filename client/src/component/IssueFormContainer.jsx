import React from 'react'
import { connect } from 'react-redux'
import IssuedForm from './IssuedForm'

function IssueFormContainer(props) {


    return(
        <IssuedForm />
    )
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps)(IssueFormContainer)