import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Register from './Register';
import Login from './Login';
import Entries from './Entries';
import AddEntry from './AddEntry';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact path='/' component={LandingPage}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/entries' component={Entries}></Route>
            <Route exact path='/addentry' component={AddEntry}></Route>
        </Switch>
      </div>
    )
  }
}

