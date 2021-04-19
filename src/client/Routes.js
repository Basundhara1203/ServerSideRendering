import React from 'react';
import { Route ,Switch} from 'react-router-dom';
import Home from './components/Home';
import App from './components/App';
import { AddEmployee } from './components/AddEmployee';
import { AddEmployee1 } from './components/Newcomponent/AddEmployee';
import App1 from './components/component/App';
import App2 from './components/Newcomponent/App';


export default()=>{
    return(
        <div>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/app" component={App}/>
            <Route  path="/app1" component={App1}/>
            <Route  path="/app2" component={App2}/>
            <Route path="/add" component={AddEmployee}/>
            <Route path="/add1" component={AddEmployee1}/>
            </Switch>
        </div>

    );
}