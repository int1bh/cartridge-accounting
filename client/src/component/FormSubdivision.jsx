import React from "react";
import {Form, Button, Modal} from 'react-bootstrap'

class FormSubdivision extends React.Component {
  constructor(props) {
    super(props);
    this.state = { divisionName: "", address: "", show: false, res: "" };

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
    let sub = this.state;

    const addSubdivision = async () => {
      let response = await fetch("/api/addsubdivision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sub),
      });
      let result = await response.json();
      this.setState({res: result.message})
    }

    addSubdivision();
    this.setState({ divisionName: "", address: "", show: false, res: "" });
    this.handleShow()
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

export default FormSubdivision;
