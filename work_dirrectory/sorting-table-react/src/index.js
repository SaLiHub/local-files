import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import connectBD from './components/connectBD';
import App from './components/App';

connectBD(renderTable);
function renderTable(data) {
  // Render react dom after receiving data.
  ReactDOM.render(
    <React.StrictMode>
      <App content={data}/>
   </React.StrictMode>
    ,document.getElementById('container'));
}
