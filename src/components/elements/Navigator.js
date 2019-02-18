import React, { Component } from 'react';

// routing
import { NavLink } from "react-router-dom";

// components
import { Nav } from 'reactstrap';

// styling
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import MediaQuery from 'react-responsive';
import { rgba } from 'style-value-types';

class Navigator extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      page: 'home'
    }
  }

  handleClick (page) {
    this.setState({
      page: page
    });
    console.log(page)

    if (page !== 'home') {
      this.setState({ bgColor: 'rgba(255,255,255, 0.6)' });
    } else {
      this.setState({ bgColor: 'none' });
    }
  }

  render() {

    const mainStyle = {
      margin: '20px 20px 0px 10px',
      background: this.state.bgColor
    }

    return (
      <div className="row fixed-bottom" style={mainStyle}>
        <div className="col-12">
          <Nav style={styles.nav}>
            <NavLink className="grow" style={styles.navlink} 
              to="/">
              <p onClick={() => this.handleClick('home')}>Home</p>
            </NavLink>
            <NavLink className="grow" style={styles.navlink}
              to="/about/">
              <p onClick={() => this.handleClick('about')}>About</p>
            </NavLink>
            <NavLink className="grow" style={styles.navlink}
              to="/portfolio/" > 
              <p onClick={() => this.handleClick('portfolio')}>Portfolio</p>
            </NavLink>
            <NavLink className="grow" style={styles.navlink}
              to="/contact/">
              <p onClick={() => this.handleClick('contact')}>Contact</p>
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