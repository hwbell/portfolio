import React, { Component } from 'react';

// routing
import { NavLink } from "react-router-dom";

// components
import { Nav } from 'reactstrap';

// styling
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import MediaQuery from 'react-responsive';

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
    margin: '20px 20px 0px 20px',  
  },
  nav: {
    fontSize: 22,
  },
  navlink: {
    margin: '2.2vw',
    marginBottom: 15,
    fontWeight: 600,
    textDecoration: 'none'
  },
 
}