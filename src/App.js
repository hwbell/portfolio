import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// components

// routing

import Router from 'react-router-dom/BrowserRouter';
import { AnimatedSwitch } from 'react-router-transition';
import Route from 'react-router-dom/Route';

// components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import PortfolioPage from './components/PortfolioPage';

import Navigator from './components/Navigator';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main" style={styles.main}>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 1 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper">
            <Route exact path="/" component={HomePage} />
            <Route path="/about/" component={AboutPage} />
            <Route path="/portfolio/" component={PortfolioPage} />
          </AnimatedSwitch>

          {/* <hr className=""></hr> */}

          <Navigator />

        </div>
      </Router>
    );
  }
}

export default App;

const styles = {
  main: {
    // overflow: 'hidden',
  },
  nav: {
    margin: 40,
  },
  navlink: {
    fontSize: 22,
  },
}