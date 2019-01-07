import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

class Navigator extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-8">
          <Nav style={styles.nav}>
            <NavLink style={styles.navlink} href="#">Home</NavLink>
            <NavLink style={styles.navlink} href="#">About</NavLink>
            <NavLink style={styles.navlink} href="#">Portfolio</NavLink>
            <NavLink style={styles.navlink} href="#">Contact</NavLink>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Navigator;

const styles = {
  nav: {
    fontSize: 22,
    margin: 5,
  },
  navlink: {
    margin: 5,
  },
  icon: {
    width: 100,
    height: 100
  },
  circleArrow: {
    color: '#48C9B0',
    width: 68,
    height: 68,
  },
  middleDisplayCol: {
    fontSize: 22,
    margin: 10,
  },
}