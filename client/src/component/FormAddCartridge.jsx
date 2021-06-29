import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import jsbarcode from "jsbarcode";
import printJS from "print-js";

class FormADDCartridge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modelName: "", quantity: "", barcode: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
  }

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
      this.setState({ barcode: barcodesCode });
    }
  }

  printHandler() {
    printJS({
      printable: "print",
      type: "html",
      repeatTableHeader: false,
      documentTitle: this.state.modelName,
    });
  }

  handleSubmit(event) {
    //event.preventDefault();
    event.target.reset();
    const cartridgeArr = [];

    this.state.barcode.forEach((item) => {
      cartridgeArr.push({
        modelName: this.state.modelName,
        barcode: item,
        issuedHistory: [{ subdivision: "Склад" }],
      });
    });

    async function addCartridge() {
      let response = await fetch("/api/addcartridge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartridgeArr),
      });
      let result = await response.json();
      console.log(result);
    }

    addCartridge();
    this.setState({ modelName: "", quantity: "", barcode: [] });
  }

  render() {
    const model = this.props.modelCartridges;
    //console.log(model);
    const barcode = [
      <canvas className="barcode0"></canvas>,
      <canvas className="barcode1"></canvas>,
      <canvas className="barcode2"></canvas>,
      <canvas className="barcode3"></canvas>,
      <canvas className="barcode4"></canvas>,
      <canvas className="barcode5"></canvas>,
      <canvas className="barcode6"></canvas>,
      <canvas className="barcode7"></canvas>,
      <canvas className="barcode8"></canvas>,
      <canvas className="barcode9"></canvas>,
      <canvas className="barcode10"></canvas>,
      <canvas className="barcode11"></canvas>,
      <canvas className="barcode12"></canvas>,
      <canvas className="barcode13"></canvas>,
      <canvas className="barcode14"></canvas>,
      <canvas className="barcode15"></canvas>,
      <canvas className="barcode16"></canvas>,
      <canvas className="barcode17"></canvas>,
      <canvas className="barcode18"></canvas>,
      <canvas className="barcode19"></canvas>,
      <canvas className="barcode20"></canvas>,
      <canvas className="barcode21"></canvas>,
      <canvas className="barcode22"></canvas>,
      <canvas className="barcode23"></canvas>,
      <canvas className="barcode24"></canvas>,
      <canvas className="barcode25"></canvas>,
      <canvas className="barcode26"></canvas>,
      <canvas className="barcode27"></canvas>,
      <canvas className="barcode28"></canvas>,
      <canvas className="barcode29"></canvas>,
      <canvas className="barcode30"></canvas>,
      <canvas className="barcode31"></canvas>,
      <canvas className="barcode32"></canvas>,
      <canvas className="barcode33"></canvas>,
      <canvas className="barcode34"></canvas>,
      <canvas className="barcode35"></canvas>,
      <canvas className="barcode36"></canvas>,
      <canvas className="barcode37"></canvas>,
      <canvas className="barcode38"></canvas>,
      <canvas className="barcode39"></canvas>,
      <canvas className="barcode40"></canvas>,
      <canvas className="barcode41"></canvas>,
      <canvas className="barcode42"></canvas>,
      <canvas className="barcode43"></canvas>,
      <canvas className="barcode44"></canvas>,
      <canvas className="barcode45"></canvas>,
      <canvas className="barcode46"></canvas>,
      <canvas className="barcode47"></canvas>,
      <canvas className="barcode48"></canvas>,
      <canvas className="barcode49"></canvas>,
      <canvas className="barcode50"></canvas>,
      <canvas className="barcode51"></canvas>,
      <canvas className="barcode52"></canvas>,
      <canvas className="barcode53"></canvas>,
      <canvas className="barcode54"></canvas>,
      <canvas className="barcode55"></canvas>,
      <canvas className="barcode56"></canvas>,
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
          <Col>
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
          <Col sm={2}>
            <Button onClick={this.barcodeGenerate.bind(this)}>
              Генерировать
            </Button>
          </Col>
          <Col sm={2}>
            <Button onClick={this.printHandler.bind(this)}>Печать</Button>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Добавить
            </Button>
          </Col>
        </Form.Row>
        <hr />
        <Form.Row>
          <div className="print" id="print">
            {barcode}
          </div>
        </Form.Row>
      </Form>
    );
  }
}

export default FormADDCartridge;
