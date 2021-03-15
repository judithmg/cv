import './styles/scss/App.scss';
import React from 'react';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import Main from './pages/Main';
import PressStart from './pages/PressStart';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/welcome">
          <Main />
        </Route>

        <Route path="/">
          <PressStart />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
