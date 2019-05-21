import React, { Component } from 'react';

// routing
import { NavLink } from "react-router-dom";

// components
import { Nav, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// styling
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import Media from 'react-media';

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      dropdownOpen: false
    }
    this.toggle = this.toggle.bind(this);
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

    let links = ['home', 'about', 'resume', 'portfolio', 'contact'];

    return (
      <Nav style={styles.nav}>
        {links.map((link, i) => {

          let linkName = link.slice(0, 1).toUpperCase() + link.slice(1);
          let linkRoute = link === 'home' ? '/' : link;

          return (
            <NavLink key={i} className="grow" style={styles.navlink}
              to={linkRoute}>
              <p onClick={() => this.handleClick(link)}>{linkName}</p>
            </NavLink>
          )
        })}
      </Nav>
    )
  }

  renderDropDown() {

    let links = ['home', 'about', 'resume', 'portfolio', 'contact'];

    return (
      <Dropdown className="" style={styles.dropDownMenu}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}>

        <DropdownToggle color='link'>
          <i style={styles.dropDownIcon} className="dropdown fas fa-align-justify"></i>
        </DropdownToggle>

        <DropdownMenu style={{backgroundColor: 'whitesmoke'}}>
          {links.map((link, i) => {

            let linkName = link.slice(0, 1).toUpperCase() + link.slice(1);
            let linkRoute = link === 'home' ? '/' : link;
            return (
              <DropdownItem key={i} className="dropdown-item">
                <NavLink className="grow" style={styles.dropDownLink}
                  to={linkRoute}>
                  <p onClick={() => this.handleClick(link)}>{linkName}</p>
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

    const mainStyle = {
      width: '100%',
      // maxWidth: 300,
      margin: '10px 0px 0px 0px',
      background: 'rgba(245,245,245, 0.9)',
    }


    return (
      <div className="row fixed-bottom" style={mainStyle}>
        <hr />
        <div className="col-12">

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
    fontWeight: 600,
    textDecoration: 'none'
  },
  dropDownIcon: {
    fontSize: 'calc(34px + 0.5vw)',
    
  }

}