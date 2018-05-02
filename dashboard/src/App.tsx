import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import indexRoutes from "./routes";
import './App.css';

import logo from './logo.svg';

const hist = createBrowserHistory();

class App extends React.Component {
  public render() {
    return (
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />;
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;
