import React from "react";
import "./Subdivision.css"

export const Subdivision = () => {
  return (
    <div>
      <h4>Редактор отделений</h4>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s5">
              <i className="material-icons prefix">mode_edit</i>
              <input id="subdivision_name" type="text" className="validate" />
              <label for="subdivision_name">Название отделения</label>
            </div>
            <div className="input-field col s5">
              <i className="material-icons prefix">mode_edit</i>
              <input
                id="subdivision_address"
                type="text"
                className="validate"
              />
              <label for="subdivision_address">Адрес</label>
            </div>
            <div className="col s2 input-field">
              <button
                class="btn waves-effect waves-light green"
                type="submit"
                name="action"
              >
                Добавить
              </button>
            </div>
          </div>
        </form>
      </div>
      <hr />
      <div className="scrolled">
        <table>
          <thead>
            <tr>
              <th>Отделение</th>
              <th>Адрес</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>ККО "Екатерининский"</td>
              <td>ул.Красная 33</td>
              <td>
                <a href="q" className="waves-effect waves-light red btn-small">
                  Удалить
                </a>
              </td>
            </tr>
            <tr>
              <td>ККО "Кубань"</td>
              <td>ул.Красная 124</td>
              <td>
                <a href="q" className="waves-effect waves-light red btn-small">
                  Удалить
                </a>
              </td>
            </tr>
            <tr>
              <td>ККО "Красных Патризан"</td>
              <td>ул.Красных Партизан 525</td>
              <td>
                <a href="q" className="waves-effect waves-light red btn-small">
                  Удалить
                </a>
              </td>
            </tr>
            <tr>
              <td>ККО "Красных Патризан"</td>
              <td>ул.Красных Партизан 525</td>
              <td>
                <a href="q" className="waves-effect waves-light red btn-small">
                  Удалить
                </a>
              </td>
            </tr>
            <tr>
              <td>ККО "Красных Патризан"</td>
              <td>ул.Красных Партизан 525</td>
              <td>
                <a href="q" className="waves-effect waves-light red btn-small">
                  Удалить
                </a>
              </td>
            </tr>
            <tr>
              <td>ККО "Красных Патризан"</td>
              <td>ул.Красных Партизан 525</td>
              <td>
                <a href="q" className="waves-effect waves-light red btn-small">
                  Удалить
                </a>
              </td>
            </tr>
            <tr>
              <td>ККО "Красных Патризан"</td>
              <td>ул.Красных Партизан 525</td>
              <td>
                <a href="q" className="waves-effect waves-light red btn-small">
                  Удалить
                </a>
              </td>
            </tr>
            <tr>
              <td>ККО "Красных Патризан"</td>
              <td>ул.Красных Партизан 525</td>
              <td>
                <a href="q" className="waves-effect waves-light red btn-small">
                  Удалить
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subdivision;
