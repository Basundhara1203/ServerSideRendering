import React from 'react';
import ReactDOM from 'react-dom'
import {renderToString} from 'react-dom/server';
import Home from './components/Home';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes';

import {formReducer } from '../client/components/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
/*
const store = createStore(
    formReducer,
   {},
    applyMiddleware(thunk)
  );
  
  */

ReactDOM.hydrate(
  
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
   
,document.querySelector("#root"))