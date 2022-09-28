import React from 'react';
// import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

const listener = () =>{
  createRoot.render(
    <App store ={store}/>,
    document.getElementById('root')
  );
};

store.subscribe(listener);
listener();