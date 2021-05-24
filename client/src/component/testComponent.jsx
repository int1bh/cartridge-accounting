import React from 'react'
import {connect} from 'react-redux'

const TestComponent = ({test}) => {
    return <div>{test}</div>

}

const mapStateToProps = state => {
    console.log(state.allCartridges.allCartridges[1].b);
    return {
        test: state.allCartridges.allCartridges[1].b
    }
}


export default connect(mapStateToProps)(TestComponent)