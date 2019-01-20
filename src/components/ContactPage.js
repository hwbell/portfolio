import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import EmailForm from './elements/EmailForm';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
    this.hover = this.hover.bind(this);
  }

  hover() {
    //
  }

  render() {
    return (
      <div className="Center container">

        <EmailForm />

      </div>
    );
  }
}

export default ContactPage;

const styles = {
  
}