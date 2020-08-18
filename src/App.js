import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* components */

import Header from './components/Header';
import Subheader from './components/Subheader';
import Footer from './components/Footer/index.js';

/* pages*/

import Shop from './pages/Shop';
import Earbuds from './pages/Earbuds';
import Wireless from './pages/Earbuds/Wireless';
import Wired from './pages/Earbuds/Wired';

import Headphones from './pages/Headphones';
import Battery from './pages/Battery';

/* style*/

import './default.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Subheader />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Shop} />
            <Route exact path="/headphones" component={Headphones} />
            <Route exact path="/earbuds" component={Earbuds} />
            <Route exact path="/earbuds/wireless" component={Wireless} />
            <Route exact path="/earbuds/wired" component={Wired} />
            <Route exact path="/batteries" component={Battery} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
