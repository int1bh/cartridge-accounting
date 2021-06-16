import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css'
import { compose, createStore } from 'redux';                    //для создания стора
import { Provider } from 'react-redux'                           //для связи стора с приложением
import { rootReducer } from './redux/rootReducer';               //принимает предыдущее состояние и экшен и возвращает следующее состояние
import { BrowserRouter as Router } from 'react-router-dom'



const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const app = (                                                    //оборачиваем коренной компонент в провайдера и передаем в него стор. Теперь стор доступен для всего приложения
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

render(app, document.getElementById('root'));


