import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import EmailForm from '../elements/EmailForm';

import posed, { PoseGroup } from 'react-pose';

const Container = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 }
});

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
      <Container className="Center container">

        <EmailForm />

      </Container>
    );
  }
}

export default ContactPage;

const styles = {
  
}