import React, { Component } from 'react';

// routing
import { NavLink } from "react-router-dom";

// components
import { Nav, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// styling
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import Media from 'react-media';

const links = [
  {
    text: 'Home',
    route: '/',
    iconClass: 'fas fa-home'
  },
  {
    text: 'About',
    route: 'about',
    iconClass: 'far fa-user-circle'
  },
  {
    text: 'Resume',
    route: 'resume',
    iconClass: 'far fa-address-card'
  },
  {
    text: 'Portfolio',
    route: 'portfolio',
    iconClass: 'fas fa-project-diagram'
  },
  {
    text: 'Contact',
    route: 'contact',
    iconClass: 'fas fa-mobile-alt'
  }
]

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      dropdownOpen: false,
      dropDown: false
    }
    this.toggle = this.toggle.bind(this);
  }

  renderLinks() {

    return (
      <Nav className="center-all-row">
        {links.map((link, i) => {

          return (
            <NavLink key={i} className="nav-item center-all-col"
              to={link.route}>
              <i className={`nav-icon ${link.iconClass}`}></i>
              <p className="nav-text">{link.text}</p>
            </NavLink>
          )
        })}
      </Nav>
    )
  }

  renderDropDown() {

    return (
      <Dropdown className="nav dropdown" 
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}>

        <DropdownToggle color='link'>
          <i style={styles.dropDownIcon} className="nav-item fas fa-compass"></i>
        </DropdownToggle>

        <DropdownMenu className="center-all-col">
          {links.map((link, i) => {

            return (
              <DropdownItem key={i}>
                <NavLink className="center-all-col"
                  to={link.route}>
                  <i className={`nav-icon ${link.iconClass}`}></i>
                  <p className="nav-text">{link.text}</p>

                </NavLink>
              </DropdownItem>
            )
          })}
        </DropdownMenu>

      </Dropdown>
    )
  }

  // for the dropdown menu on smaller screens
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {

    return (
      <div className="center-all-col fixed-bottom">

        <Media query="(max-width: 499px)">
          {matches =>
            matches ? (
              this.renderDropDown()
            ) : (
                this.renderLinks()
              )
          }
        </Media>

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
    fontSize: 'calc(16px + 0.5vw)',
    margin: '0.5vw 2vw',
    marginBottom: 5,
    fontWeight: 600,
    textDecoration: 'none'
  },
  dropDownLink: {
    fontSize: 'calc(16px + 0.5vw)',
    textDecoration: 'none'
  },
  dropDownIcon: {
    fontSize: '40px',
  }

}