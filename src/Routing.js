import React  from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Login from './components/LoginComponent';
import { Todo } from './components/TodoComponent';
import { AddAndUpdateComponent } from './components/AddAndUpdateComponent';

export default class Routing extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/todo" component={Todo}></Route>
                <Route path="/add-update" component={AddAndUpdateComponent}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}