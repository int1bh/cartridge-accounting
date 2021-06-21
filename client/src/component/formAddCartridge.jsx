import React from "react";

class FormCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modelName: "HP80", barcode: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
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

  onChangeSelect(event) {
    this.setState({modelName: event.target.value});
  }

  handleSubmit(event) {
    alert(`Вы выбрали язык: ${this.state.modelName}`);
    event.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field col s2">
            <i className="material-icons prefix">mode_edit</i>
            <input
              onChange={this.handleChange}
              id="barcode"
              type="text"
              name="barcode"
              value={this.state.barcode}
              className="validate"
            />
            <label htmlFor="barcode">Количество</label>
          </div>
          {/*  */}
          <div className="input-field col s5">
            <select value={this.state.modelName} onChange={this.onChangeSelect}>
              <option value='HP80'>HP80</option>
              <option value='hp37'>HP37</option>
              <option value='hp226'>HP226</option>
            </select>
          </div>
          <div className="col s4">список подразделений</div>
          <div className="row">
            <div className="col s12">полный список штрикодов</div>
            <input type="submit" value="Submit" />
          </div>
          
        </form>
      </div>
    );
  }
}

export default FormCart;
