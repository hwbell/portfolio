import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// components
import { Nav, NavItem } from 'reactstrap';

// routing
import { Link } from "react-router-dom";

import Router from 'react-router-dom/BrowserRouter';
import { AnimatedSwitch } from 'react-router-transition';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

// components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

// import Navigator from './components/Navigator';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper">
            <Route path="/" exact component={HomePage} />
            <Route path="/about/" component={AboutPage} />
          </AnimatedSwitch>
          {/* <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route path="/" exact component={HomePage} />
            <Route path="/about/" component={AboutPage} />
          </AnimatedSwitch> */}

          <hr className=""></hr>

          <Nav style={styles.nav}>
            <NavItem href="#">
              <Link to="/" style={styles.navlink}>Home</Link>
            </NavItem>
            <NavItem href="#">
              <Link to="/about/" style={styles.navlink}>About</Link>
            </NavItem>
            <NavItem href="#">
              <Link to="/" style={styles.navlink}>Contact</Link>
            </NavItem>
            <NavItem href="#">
              <Link to="/" style={styles.navlink}>Portfolio</Link>
            </NavItem>
          </Nav>

        </div>
      </Router>
    );
  }
}

export default App;

const styles = {
  nav: {
    fontSize: 22,
    margin: 0,
  },
  navlink: {
    margin: 25,
  },
}