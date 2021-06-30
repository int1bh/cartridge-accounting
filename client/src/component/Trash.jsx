import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getCartridge } from '../actions/trashActions'

function Trash() {
   
    const [state, setState] = useState({barcode: ''})
    const dispatch = useDispatch()

    function handleChange(event) {
        setState({[event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        event.target.reset()
        dispatch(getCartridge(state.barcode))
        setState({barcode: ''})
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Label srOnly>Отсканируйте штрихкод</Form.Label>
            <Form.Control name="barcode" onChange={handleChange} type="text" placeholder="Отсканируйте штрихкод" />
       </Form>
    )
}

export default Trash