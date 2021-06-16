import React from 'react';
import Menu from './component/menu';
import Content from './component/content'
import 'materialize-css';
import './App.css'


function App() {
  return (
    <div>
      <div className="row">
    <div className="col s2">  
        <Menu />
    </div>
    <div className="col s10">
        <Content />
    </div>
      </div>
    </div>
  );
}

export default App;
