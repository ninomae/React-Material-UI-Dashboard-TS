import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Dashboard from './views/Dashboard';
import './App.css';

const hist = createBrowserHistory();

class App extends React.Component {
  public render() {
    return (
      <Router history={hist}>
        <Switch>
          <Route path='/' component={Dashboard} />;
        </Switch>
      </Router>
    );
  }
}

export default App;
