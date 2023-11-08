import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { store } from 'redux/Store/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
