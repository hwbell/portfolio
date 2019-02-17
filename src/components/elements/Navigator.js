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
  constructor(props) {
    super(props);    
  }

  render() {

    const mainStyle = {
      margin: '20px 20px 0px 20px',
      background: this.props.bgColor,
    }
    return (
      <div className="row fixed-bottom" style={mainStyle}>
        <div className="col-12">
          <Nav style={styles.nav}>
            <NavLink style={styles.navlink} 
              to="/">
              {/* // onClick={this.props.handleClick('home')}> */}
              Home
            </NavLink>
            <NavLink style={styles.navlink}
              to="/about/">
              {/* // onClick={this.props.handleClick('about')}> */}
              About
            </NavLink>
            <NavLink style={styles.navlink}
              to="/portfolio/">
              {/* // onClick={this.props.handleClick('portfolio')}> */}
              Portfolio
            </NavLink>
            <NavLink style={styles.navlink}
              to="/contact/">
              {/* // onClick={this.props.handleClick('contact')}> */}
              Contact
            </NavLink>
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
  },
  navlink: {
    margin: '2.2vw',
    marginBottom: 15,
    fontWeight: 600,
    textDecoration: 'none'
  },
 
}