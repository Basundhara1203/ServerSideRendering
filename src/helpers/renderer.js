import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from '../client/components/Home';
import {StaticRouter} from 'react-router-dom';
import Routes from '../client/Routes'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

export default(req,store)=>{
    const content=renderToString(
       // <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <Routes/>
            </StaticRouter>
   // </Provider>
   );
    return(
    `<html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>`
    
    )
}