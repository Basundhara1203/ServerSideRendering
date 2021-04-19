import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import {formReducer} from '../client/components/reducer';
/*export default() =>{
    const store= createStore(
    formReducer,
    {},
    applyMiddleware(thunk)

    
  );

  return store;
}*/