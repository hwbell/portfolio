import React, { Component } from "react";

// routing
import { NavLink } from "react-router-dom";

// components
import {
  Nav,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

// styling
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import Media from "react-media";

const links = [
  {
    text: "Home",
    route: "/",
    iconClass: "fas fa-home",
  },
  {
    text: "About",
    route: "about",
    iconClass: "far fa-user-circle",
  },
  {
    text: "Resume",
    route: "resume",
    iconClass: "far fa-address-card",
  },
  {
    text: "Portfolio",
    route: "portfolio",
    iconClass: "fas fa-project-diagram",
  },
  {
    text: "Interests",
    route: "interests",
    iconClass: "far fa-lightbulb",
  },
  {
    text: "Contact",
    route: "contact",
    iconClass: "fas fa-mobile-alt",
  },
];

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      dropdownOpen: false,
      dropDown: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  renderLinks() {
    return (
      <div className="space-all-row">
        <div className="right-all-row">
          {links.map((link, i) => {
            return (
              <NavLink
                key={i}
                className="nav-item center-all-col"
                to={link.route}
              >
                {/* <i className={`nav-icon ${link.iconClass}`}></i> */}
                <p className="nav-text">{link.text}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }

  renderDropDown() {
    return (
      <div className="right-all-row">
        <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          style={styles.dropDown}
        >
          <DropdownToggle color="primary" caret>Go To: </DropdownToggle>
          {this.state.dropdownOpen && (
            <DropdownMenu className="center-all-col">
              {links.map((link, i) => {
                return (
                  <DropdownItem key={i}>
                    <NavLink
                      key={i}
                      className="nav-item center-all-col"
                      to={link.route}
                    >
                      {/* <i className={`nav-icon ${link.iconClass}`}></i> */}
                      <p className="nav-text-dropdown">{link.text}</p>
                    </NavLink>
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          )}
        </Dropdown>

      </div>
    );
  }

  // for the dropdown menu on smaller screens
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
      <div className="nav fixed-top space-all-row">
        <p style={styles.name}>Harold Bell</p>
        <Media query="(max-width: 799px)">
          {(matches) => (matches ? this.renderDropDown() : this.renderLinks())}
        </Media>
      </div>
    );
  }
}

export default Navigator;

const styles = {
  nav: {
    fontSize: "calc(16px + 0.5vw)",
  },
  name: {
    fontSize: "24pt",
    fontWeight: "400",
    fontFamily: "Quicksand",
    padding: "10px 20px",
  },
  navlink: {
    fontSize: "calc(16px + 0.5vw)",
    margin: "0.5vw 2vw",
    marginBottom: 5,
    fontWeight: 600,
    textDecoration: "none",
  },
  dropDown: {
    padding: "15px",
  },
  dropDownLink: {
    fontSize: "calc(16px + 0.5vw)",
    textDecoration: "none",
  },
  dropDownIcon: {
    fontSize: "40px",
  },
};
