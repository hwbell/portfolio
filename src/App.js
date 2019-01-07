import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// components
import { Nav, NavLink } from 'reactstrap';

// routing
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

import Navigator from './components/Navigator';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">

          <Route path="/" exact component={HomePage} />
          <Route path="/about/" component={AboutPage} />

          <hr className=""></hr>

          <Nav style={styles.nav}>
            <NavLink style={styles.navlink} href="#">
              <Link to="/">Home</Link>
            </NavLink>
            <NavLink style={styles.navlink} href="#">
              <Link to="/about/">About</Link>
            </NavLink>
            <NavLink style={styles.navlink} href="#">
              <Link to="/">Contact</Link>
            </NavLink>
            <NavLink style={styles.navlink} href="#">
              <Link to="/">Portfolio</Link>
            </NavLink>
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
    margin: 5,
  },
}