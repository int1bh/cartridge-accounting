import React from "react";
import { Col, Button, Form, Modal } from "react-bootstrap";
import jsbarcode from "jsbarcode";
import printJS from "print-js";

class FormADDCartridge extends React.Component {
  constructor(props) {
    super(props);
    this.clearRef = React.createRef();
    this.state = { modelName: "", quantity: "", barcode: [], generate: false, print: true, addButton: true, show: false, res: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose = () => this.setState({show: false});
  handleShow = () => this.setState({show: true});

  onChangeQuantity(e) {
    let value = e.target.value;
    if (value > 56) {
      value = 56;
    }
    this.setState({
      quantity: value,
    });
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

  barcodeGenerate() {
    let result = this.state;
    let barcodes = [];
    let barcodesCode = [];
    const JSBARCODE = jsbarcode;

    for (let i = 0; i < result.quantity; i++) {
      barcodes.push(<canvas classname={"barcode" + i}></canvas>);
      let random =
        this.state.modelName.substring(0, 3) +
        Math.ceil(Math.random(5478) * 10000000000);
      barcodesCode.push(random);
      JSBARCODE(`.barcode` + i, random);
      this.setState({ barcode: barcodesCode, generate: true, print: false });
    }
  }

  printHandler() {
    printJS({
      printable: "print",
      type: "html",
      repeatTableHeader: false,
      documentTitle: this.state.modelName,
    });
    this.setState({addButton: false})
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    const cartridgeArr = [];

    this.state.barcode.forEach((item) => {
      cartridgeArr.push({
        modelName: this.state.modelName,
        barcode: item,
        issuedHistory: [{ subdivision: "Склад" }],
      });
    });

    const addCartridge = async () => {
      let response = await fetch("/api/addcartridge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartridgeArr),
      });
      let result = await response.json();
      this.setState({res: result.message})
    }

    addCartridge();
    this.setState({ modelName: "", quantity: "", barcode: [], generate: false, print: true, addButton: true, show: false, res: "" });
    this.clearRef.current.innerHTML = "<canvas class=\"barcode0 bar\"></canvas><canvas class=\"barcode1 bar\"></canvas><canvas class=\"barcode2 bar\"></canvas><canvas class=\"barcode3 bar\"></canvas><canvas class=\"barcode4 bar\"></canvas><canvas class=\"barcode5 bar\"></canvas><canvas class=\"barcode6 bar\"></canvas><canvas class=\"barcode7 bar\"></canvas><canvas class=\"barcode8 bar\"></canvas><canvas class=\"barcode9 bar\"></canvas><canvas class=\"barcode10 bar\"></canvas><canvas class=\"barcode11 bar\"></canvas><canvas class=\"barcode12 bar\"></canvas><canvas class=\"barcode13 bar\"></canvas><canvas class=\"barcode14 bar\"></canvas><canvas class=\"barcode15 bar\"></canvas><canvas class=\"barcode16 bar\"></canvas><canvas class=\"barcode17 bar\"></canvas><canvas class=\"barcode18 bar\"></canvas><canvas class=\"barcode19 bar\"></canvas><canvas class=\"barcode20 bar\"></canvas><canvas class=\"barcode21 bar\"></canvas><canvas class=\"barcode22 bar\"></canvas><canvas class=\"barcode23 bar\"></canvas><canvas class=\"barcode24 bar\"></canvas><canvas class=\"barcode25 bar\"></canvas><canvas class=\"barcode26 bar\"></canvas><canvas class=\"barcode27 bar\"></canvas><canvas class=\"barcode28 bar\"></canvas><canvas class=\"barcode29 bar\"></canvas><canvas class=\"barcode30 bar\"></canvas><canvas class=\"barcode31 bar\"></canvas><canvas class=\"barcode32 bar\"></canvas><canvas class=\"barcode33 bar\"></canvas><canvas class=\"barcode34 bar\"></canvas><canvas class=\"barcode35 bar\"></canvas><canvas class=\"barcode36 bar\"></canvas><canvas class=\"barcode37 bar\"></canvas><canvas class=\"barcode38 bar\"></canvas><canvas class=\"barcode39 bar\"></canvas><canvas class=\"barcode40 bar\"></canvas><canvas class=\"barcode41 bar\"></canvas><canvas class=\"barcode42 bar\"></canvas><canvas class=\"barcode43 bar\"></canvas><canvas class=\"barcode44 bar\"></canvas><canvas class=\"barcode45 bar\"></canvas><canvas class=\"barcode46 bar\"></canvas><canvas class=\"barcode47 bar\"></canvas><canvas class=\"barcode48 bar\"></canvas><canvas class=\"barcode49 bar\"></canvas><canvas class=\"barcode50 bar\"></canvas><canvas class=\"barcode51 bar\"></canvas><canvas class=\"barcode52 bar\"></canvas><canvas class=\"barcode53 bar\"></canvas><canvas class=\"barcode54 bar\"></canvas><canvas class=\"barcode55 bar\"></canvas><canvas class=\"barcode56 bar\"></canvas>"
    this.handleShow()
  }

  render() {
    const model = this.props.modelCartridges;
    const barcode = [
      <canvas className="barcode1 bar"></canvas>,
      <canvas className="barcode0 bar"></canvas>,
      <canvas className="barcode2 bar"></canvas>,
      <canvas className="barcode3 bar"></canvas>,
      <canvas className="barcode4 bar"></canvas>,
      <canvas className="barcode5 bar"></canvas>,
      <canvas className="barcode6 bar"></canvas>,
      <canvas className="barcode7 bar"></canvas>,
      <canvas className="barcode8 bar"></canvas>,
      <canvas className="barcode9 bar"></canvas>,
      <canvas className="barcode10 bar"></canvas>,
      <canvas className="barcode11 bar"></canvas>,
      <canvas className="barcode12 bar"></canvas>,
      <canvas className="barcode13 bar"></canvas>,
      <canvas className="barcode14 bar"></canvas>,
      <canvas className="barcode15 bar"></canvas>,
      <canvas className="barcode16 bar"></canvas>,
      <canvas className="barcode17 bar"></canvas>,
      <canvas className="barcode18 bar"></canvas>,
      <canvas className="barcode19 bar"></canvas>,
      <canvas className="barcode20 bar"></canvas>,
      <canvas className="barcode21 bar"></canvas>,
      <canvas className="barcode22 bar"></canvas>,
      <canvas className="barcode23 bar"></canvas>,
      <canvas className="barcode24 bar"></canvas>,
      <canvas className="barcode25 bar"></canvas>,
      <canvas className="barcode26 bar"></canvas>,
      <canvas className="barcode27 bar"></canvas>,
      <canvas className="barcode28 bar"></canvas>,
      <canvas className="barcode29 bar"></canvas>,
      <canvas className="barcode30 bar"></canvas>,
      <canvas className="barcode31 bar"></canvas>,
      <canvas className="barcode32 bar"></canvas>,
      <canvas className="barcode33 bar"></canvas>,
      <canvas className="barcode34 bar"></canvas>,
      <canvas className="barcode35 bar"></canvas>,
      <canvas className="barcode36 bar"></canvas>,
      <canvas className="barcode37 bar"></canvas>,
      <canvas className="barcode38 bar"></canvas>,
      <canvas className="barcode39 bar"></canvas>,
      <canvas className="barcode40 bar"></canvas>,
      <canvas className="barcode41 bar"></canvas>,
      <canvas className="barcode42 bar"></canvas>,
      <canvas className="barcode43 bar"></canvas>,
      <canvas className="barcode44 bar"></canvas>,
      <canvas className="barcode45 bar"></canvas>,
      <canvas className="barcode46 bar"></canvas>,
      <canvas className="barcode47 bar"></canvas>,
      <canvas className="barcode48 bar"></canvas>,
      <canvas className="barcode49 bar"></canvas>,
      <canvas className="barcode50 bar"></canvas>,
      <canvas className="barcode51 bar"></canvas>,
      <canvas className="barcode52 bar"></canvas>,
      <canvas className="barcode53 bar"></canvas>,
      <canvas className="barcode54 bar"></canvas>,
      <canvas className="barcode55 bar"></canvas>,
      <canvas className="barcode56 bar"></canvas>
    ];

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row className="align-items-center">
          <Col sm={4}>
            <Form.Label htmlFor="modelName" srOnly>
              Модель картриджа
            </Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name="modelName"
              id="modelName"
              as="select"
              defaultValue="Выберите модель"
            >
              <option disabled>Выберите модель</option>
              {model.map((model) => (
                <option key={model._id}>{model.modelName}</option>
              ))}
            </Form.Control>
          </Col>
          <Col sm={3}>
            <Form.Label htmlFor="quantity" srOnly>
              Количество
            </Form.Label>
            <Form.Control
              onChange={this.onChangeQuantity}
              name="quantity"
              id="quantity"
              placeholder="Кол-во не более 56"
            />
          </Col>

          <div className="del">
            <Button onClick={this.barcodeGenerate.bind(this)} variant="info" disabled={this.state.generate}>
              Генерировать штрихкод
            </Button>
          </div>
          <div className="del">
            <Button onClick={this.printHandler.bind(this) } variant="info" disabled={this.state.print}>Печать</Button>
          </div>
          <div className="del">
            <Button variant="success" type="submit" disabled={this.state.addButton}>
              Добавить
            </Button>
          </div>
        </Form.Row>
        <hr />
        <Form.Row>
          <div className="print" id="print" ref={this.clearRef}>
            {barcode}
          </div>
        </Form.Row>
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

export default FormADDCartridge;
