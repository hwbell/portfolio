import React, { Component } from 'react';

// routing
import { NavLink } from "react-router-dom";

// components
import { Nav, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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

  handleClick(page) {
    this.setState({
      page: page
    });
    console.log(page)

    if (page !== 'home') {
      this.setState({ bgColor: 'rgba(245,245,245, 0.9)' });
    } else {
      this.setState({ bgColor: 'none' });
    }
  }

  renderLinks() {
    return (
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
    )
  }

  renderDropDown() {
    return (
      <Dropdown className="float-right" style={styles.dropDownMenu}
      isOpen={this.state.dropdownOpen}
      toggle={this.toggle}>

      <DropdownToggle color='link'>
        <i style={styles.dropDownIcon} className="dropdown fas fa-align-justify"></i>
      </DropdownToggle>

      <DropdownMenu>
        <DropdownItem >
          <NavLink className="grow" style={styles.navlink}
            to="/">
            <p onClick={() => this.handleClick('home')}>Home</p>
          </NavLink>
        </DropdownItem>
        <DropdownItem >
          <NavLink className="grow" style={styles.navlink}
            to="/about/">
            <p onClick={() => this.handleClick('about')}>About</p>
          </NavLink>
        </DropdownItem>
        <DropdownItem >
          <NavLink className="grow" style={styles.navlink}
            to="/portfolio/" >
            <p onClick={() => this.handleClick('portfolio')}>Portfolio</p>
          </NavLink>
        </DropdownItem>
        <DropdownItem >
          <NavLink className="grow" style={styles.navlink}
            to="/contact/">
            <p onClick={() => this.handleClick('contact')}>Contact</p>
          </NavLink>
        </DropdownItem>
      </DropdownMenu>

    </Dropdown>
    )
  }

  render() {

    const mainStyle = {
      width: '100%',
      // maxWidth: 300,
      margin: '10px 0px 0px 0px',
      background: this.state.bgColor
    }


    return (
      <div className="row fixed-bottom" style={mainStyle}>
        <hr />
        <div className="col-12">
          {this.renderLinks()}

        </div>


      </div>
    );
  }
}

export default Navigator;

const styles = {
  nav: {
    fontSize: 'calc(16px + 0.5vw)',
  },
  navlink: {
    margin: '0.5vw 2vw',
    marginBottom: 5,
    fontWeight: 600,
    textDecoration: 'none'
  },

}