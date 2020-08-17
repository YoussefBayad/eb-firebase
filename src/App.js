import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="container">
          <Switch>
            {/* <Route exact path="/" component={} />
            <Route exact path="/" component={} />
            <Route exact path="/" component={} />
            <Route exact path="/" component={} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
