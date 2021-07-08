import React from "react";
import {Form, Button, Modal} from 'react-bootstrap'

class FormModelCartridge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modelName: "",
                   color: "",
                   printers: "",
                   show: false,
                   res: ""
                  };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  
  handleClose = () => this.setState({show: false});
  handleShow = () => this.setState({show: true});
  

  handleChange(event) {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    let sub = this.state

    const addCartridgeModel = async () => {
      let response = await fetch("/api/addmodel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sub),
      });
      let result = await response.json();
      this.setState({res: result.message})
    }
    

    addCartridgeModel();
    this.setState( { modelName: "",
                    color: "",
                    printers: "",
                    show: false,
                   res: ""
                   }
      );
      this.handleShow()
  }

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="model_name">
          <Form.Label>Модель картриджа</Form.Label>
          <Form.Control onChange={this.handleChange} name="modelName" value={this.state.modelName} type="text" placeholder="Название модели" />
        </Form.Group>

        <Form.Group controlId="color_name">
          <Form.Label>Цвет</Form.Label>
          <Form.Control onChange={this.handleChange} name="color" value={this.state.color} type="text" placeholder="Цвет" />
        </Form.Group>

        <Form.Group controlId="printers_model">
          <Form.Label>Модели принтеров</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={this.handleChange} name="printers" value={this.state.printers} placeholder="Принтеры" />
        </Form.Group>
        <Button variant="success" type="submit">
          Добавить
        </Button>

        <Modal
        show={this.state.show}
        onHide={this.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <Modal.Title>Информация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.res}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={this.handleClose}>
            OK
          </Button>
          </Modal.Footer>
      </Modal>
      </Form>      
    );
  }
}

export default FormModelCartridge;
