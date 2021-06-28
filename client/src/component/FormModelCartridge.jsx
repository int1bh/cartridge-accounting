import React from "react";
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

class FormModelCartridge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modelName: "",
                   color: "",
                   printers: ""
                  };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

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
    // let sub = {modelName: this.state.modelName, color: this.state.color, printers: this.state.printers} //.split(/[\n]|,/)
    
    async function addCartridgeModel() {
      let response = await fetch("/api/addmodel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sub),
      });
      let result = await response.json();
      console.log(result);
    }

    addCartridgeModel();
    this.setState( { modelName: "",
                    color: "",
                    printers: ""
                   }
      );
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
        <Button variant="primary" type="submit">
          Добавить
        </Button>
      </Form>      
    );
  }
}

export default FormModelCartridge;
