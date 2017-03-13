import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch, Redirect } from 'react-router-dom';

// Routes
import HomePage from 'Components/homepage';
import NotFound from 'Components/not-found';
import Usage from 'Components/usage';

export default class App extends Component {

  render() {
    return <div>
      <Helmet title='Go + React + Redux = rocks!' />

      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Redirect from="/docs" to="/usage"/>
        <Route path="/usage" component={Usage}/>
        <Route component={NotFound}/>
      </Switch>
    </div>;
  }

}
