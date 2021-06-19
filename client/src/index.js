import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css'
import { store } from './store/configureStore'
import { Provider } from 'react-redux'                           //для связи стора с приложением
import { BrowserRouter as Router } from 'react-router-dom'





const app = (                                                    //оборачиваем коренной компонент в провайдера и передаем в него стор. Теперь стор доступен для всего приложения
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

render(app, document.getElementById('root'));


