import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form"
import jsbarcode from "jsbarcode"


class FormADDCartridge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modelName: "",
                  quantity: "",
                  barcode: []
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

  barcodeGenerate() {
    let result = this.state;
    let barcodes = []
    let barcodesCode = []
    const JSBARCODE = jsbarcode;
      
    for (let i = 0; i< result.quantity; i++) {
      barcodes.push(<svg classname={"barcode"+i}></svg>)
      let random = (this.state.modelName).substring(0,3)+Math.ceil((Math.random(5478)*10000000000))
      barcodesCode.push(random)
      JSBARCODE(`.barcode`+i, random)
      this.setState({barcode: barcodesCode})
      }
      
    
    
  }

  handleSubmit(event) {
    event.preventDefault();

    // let cartridge = this.state
        
    // async function addCartridge() {
    //   let response = await fetch("/api/addmodel", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(sub),
    //   });
    //   let result = await response.json();
    //   console.log(result);
    // }

    // addCartridgeModel();
    // this.setState( { modelName: "",
    //                 color: "",
    //                 printers: ""
    //                }
    //   );
    console.log(this.state);
  }

  render() {
    const model = this.props.modelCartridges
    const barcode = [
    <svg className="barcode0"></svg>,
    <svg className="barcode1"></svg>,
    <svg className="barcode2"></svg>,
    <svg className="barcode3"></svg>,
    <svg className="barcode4"></svg>,
    <svg className="barcode5"></svg>,
    <svg className="barcode6"></svg>,
    <svg className="barcode7"></svg>,
    <svg className="barcode8"></svg>,
    <svg className="barcode9"></svg>,
    <svg className="barcode10"></svg>,
    <svg className="barcode11"></svg>,
    <svg className="barcode12"></svg>,
    <svg className="barcode13"></svg>,
    <svg className="barcode14"></svg>,
    <svg className="barcode15"></svg>,
    <svg className="barcode16"></svg>,
    <svg className="barcode17"></svg>,
    <svg className="barcode18"></svg>,
    <svg className="barcode19"></svg>,
    <svg className="barcode20"></svg>,
    <svg className="barcode21"></svg>,
    <svg className="barcode22"></svg>,
    <svg className="barcode23"></svg>,
    <svg className="barcode24"></svg>,
    <svg className="barcode25"></svg>,
    <svg className="barcode26"></svg>,
    <svg className="barcode27"></svg>,
    <svg className="barcode28"></svg>,
    <svg className="barcode29"></svg>,
    <svg className="barcode30"></svg>,
    <svg className="barcode31"></svg>,
    <svg className="barcode32"></svg>,
    <svg className="barcode33"></svg>,
    <svg className="barcode34"></svg>,
    <svg className="barcode35"></svg>,
    <svg className="barcode36"></svg>,
    <svg className="barcode37"></svg>,
    <svg className="barcode38"></svg>,
    <svg className="barcode39"></svg>,
    <svg className="barcode40"></svg>,
    <svg className="barcode41"></svg>,
    <svg className="barcode42"></svg>,
    <svg className="barcode43"></svg>,
    <svg className="barcode44"></svg>,
    <svg className="barcode45"></svg>,
    <svg className="barcode46"></svg>,
    <svg className="barcode47"></svg>,
    <svg className="barcode48"></svg>,
    <svg className="barcode49"></svg>,
    <svg className="barcode50"></svg>
  ]
    // console.log(barcode);
    //let arr = barcode.map((el) => el._renderProperties[0].element.classList[0])
    //console.log("map", arr[0]);
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row className="align-items-center">
        <Col sm={4}>
          <Form.Label htmlFor="modelName" srOnly>Модель картриджа</Form.Label>
          <Form.Control onChange={this.handleChange} name="modelName" id="modelName" as="select" defaultValue="Выберите модель">
            <option disabled>Выберите модель</option>
            {model.map(model => <option  key={model._id}>{model.modelName}</option>)}
          </Form.Control>
          </Col>
          <Col>
          <Form.Label htmlFor="quantity" srOnly>Количество</Form.Label>
          <Form.Control onChange={this.handleChange} name="quantity" id="quantity" placeholder="Количество"/>
          </Col>
          <Col sm={2}>
          <Button onClick={this.barcodeGenerate.bind(this)}>Генерировать</Button>
          </Col>
          <Col>
          <Button variant="primary" type="submit">
          Добавить
        </Button>
          </Col>
        </Form.Row>
        <hr />
        <Form.Row>
          <Col>
          <span>{barcode}</span>
          </Col>
          
          
          
        </Form.Row>
      </Form>
    );
  }
}

export default FormADDCartridge;
