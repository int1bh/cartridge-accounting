import React from "react";
import { Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import jsbarcode from "jsbarcode";
import printJS from "print-js";

class FormADDCartridge extends React.Component {
  constructor(props) {
    super(props);
    this.clearRef = React.createRef();
    this.state = { modelName: "", quantity: "", barcode: [], generate: false, print: true, addButton: true };

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
    this.setState({ modelName: "", quantity: "", barcode: [], generate: false, print: true, addButton: true });
    console.log(this.clearRef)
    this.clearRef.current.innerHTML = "<canvas class=\"barcode0\"></canvas><canvas class=\"barcode1\"></canvas><canvas class=\"barcode2\"></canvas><canvas class=\"barcode3\"></canvas><canvas class=\"barcode4\"></canvas><canvas class=\"barcode5\"></canvas><canvas class=\"barcode6\"></canvas><canvas class=\"barcode7\"></canvas><canvas class=\"barcode8\"></canvas><canvas class=\"barcode9\"></canvas><canvas class=\"barcode10\"></canvas><canvas class=\"barcode11\"></canvas><canvas class=\"barcode12\"></canvas><canvas class=\"barcode13\"></canvas><canvas class=\"barcode14\"></canvas><canvas class=\"barcode15\"></canvas><canvas class=\"barcode16\"></canvas><canvas class=\"barcode17\"></canvas><canvas class=\"barcode18\"></canvas><canvas class=\"barcode19\"></canvas><canvas class=\"barcode20\"></canvas><canvas class=\"barcode21\"></canvas><canvas class=\"barcode22\"></canvas><canvas class=\"barcode23\"></canvas><canvas class=\"barcode24\"></canvas><canvas class=\"barcode25\"></canvas><canvas class=\"barcode26\"></canvas><canvas class=\"barcode27\"></canvas><canvas class=\"barcode28\"></canvas><canvas class=\"barcode29\"></canvas><canvas class=\"barcode30\"></canvas><canvas class=\"barcode31\"></canvas><canvas class=\"barcode32\"></canvas><canvas class=\"barcode33\"></canvas><canvas class=\"barcode34\"></canvas><canvas class=\"barcode35\"></canvas><canvas class=\"barcode36\"></canvas><canvas class=\"barcode37\"></canvas><canvas class=\"barcode38\"></canvas><canvas class=\"barcode39\"></canvas><canvas class=\"barcode40\"></canvas><canvas class=\"barcode41\"></canvas><canvas class=\"barcode42\"></canvas><canvas class=\"barcode43\"></canvas><canvas class=\"barcode44\"></canvas><canvas class=\"barcode45\"></canvas><canvas class=\"barcode46\"></canvas><canvas class=\"barcode47\"></canvas><canvas class=\"barcode48\"></canvas><canvas class=\"barcode49\"></canvas><canvas class=\"barcode50\"></canvas><canvas class=\"barcode51\"></canvas><canvas class=\"barcode52\"></canvas><canvas class=\"barcode53\"></canvas><canvas class=\"barcode54\"></canvas><canvas class=\"barcode55\"></canvas><canvas class=\"barcode56\"></canvas>"
  }

  render() {
    const model = this.props.modelCartridges;
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
      </Form>
    );
  }
}

export default FormADDCartridge;
