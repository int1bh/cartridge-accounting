import React from 'react';
import Menu from './component/menu';
import TestComponent from './component/testComponent';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
    <div className="col-2">
      <Menu />
    </div>
    <div className="col-10">.col-10
    <TestComponent />
    </div>
      </div>
    </div>
  );
}

export default App;
