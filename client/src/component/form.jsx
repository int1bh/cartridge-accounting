import React from "react";

class Form extends React.Component {
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
      let response = await fetch("http://localhost:5000/api/addsubdivision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sub),
      });
      let result = await response.json();
      window.M.toast({ html: result.message });
    }

    addSubdivision();
    this.setState({ divisionName: "", address: "" });
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s5">
              <i className="material-icons prefix">mode_edit</i>
              <input
                onChange={this.handleChange}
                id="subdivision_name"
                type="text"
                name="divisionName"
                value={this.state.subdivisionName}
                className="validate"
              />
              <label htmlFor="subdivision_name">Название отделения</label>
            </div>
            <div className="input-field col s5">
              <i className="material-icons prefix">mode_edit</i>
              <input
                onChange={this.handleChange}
                id="subdivision_address"
                type="text"
                name="address"
                value={this.state.subdivisionAddress}
                className="validate"
              />
              <label htmlFor="subdivision_address">Адрес</label>
            </div>
            <div className="col s2 input-field">
              <button
                className="btn waves-effect waves-light green"
                type="submit"
                name="action"
              >
                Добавить
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
