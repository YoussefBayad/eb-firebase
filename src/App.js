import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

/* components */

import Header from './components/Header';
import Subheader from './components/Subheader';
import Shop from './pages/Shop';
import Footer from './components/Footer/index.js';

/* style*/

import './default.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Subheader />
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Shop} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
