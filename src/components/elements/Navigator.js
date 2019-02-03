import React, { Component } from 'react';

// routing
import { NavLink } from "react-router-dom";

// components
import { Nav } from 'reactstrap';

// styling
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

class Navigator extends Component {
  render() {
    return (
      <div className="row fixed-bottom" style={styles.main}>
        <div className="col-12">
          <Nav style={styles.nav}>
            <NavLink style={styles.navlink} to="/">Home</NavLink>
            <NavLink style={styles.navlink} to="/about/">About</NavLink>
            <NavLink style={styles.navlink} to="/portfolio/">Portfolio</NavLink>
            <NavLink style={styles.navlink} to="/contact/">Contact</NavLink>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Navigator;

const styles = {
  main: {
    margin: '20px 20px 0px 20px'  
  },
  nav: {
    fontSize: 22,
  },
  navlink: {
    margin: 15,
    fontWeight: 600
    // color: 'whitesmoke',
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