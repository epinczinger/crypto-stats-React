import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import store from './reducers';
import './index.css';

ReactDOM.render(
  <Provider>
    <Router>
      <App store={store} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
