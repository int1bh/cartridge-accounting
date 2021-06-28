import React from "react";
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

class FormSubdivision extends React.Component {
  constructor(props) {
    super(props);
    this.state = { divisionName: "", address: "" };

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
    let sub = this.state;

    async function addSubdivision() {
      let response = await fetch("/api/addsubdivision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sub),
      });
      let result = await response.json();
      console.log(result);
    }

    addSubdivision();
    this.setState({ divisionName: "", address: "" });
  }

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="subdivision_name">
          <Form.Label>Название отделения:</Form.Label>
          <Form.Control onChange={this.handleChange} name="divisionName" value={this.state.divisionName} type="text" placeholder='Пример: ККО "Кубань"' />
        </Form.Group>

        <Form.Group controlId="subdivision_address">
          <Form.Label>Адрес:</Form.Label>
          <Form.Control onChange={this.handleChange} name="address" value={this.state.address} type="text" placeholder="Пример: ул.Красная, д.124" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Добавить
        </Button>
      </Form>      
    );
  }
}

export default FormSubdivision;
