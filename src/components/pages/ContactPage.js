import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import EmailForm from '../elements/EmailForm';

import posed, { PoseGroup } from 'react-pose';

const Container = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 }
});

const P = posed.p({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 }
});

const Div = posed.div({
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
      <Container className="container" style={styles.main}>
        <P className="" style={styles.title}>
          Get in touch with me to discuss anything at all
        </P>
        <Div style={styles.textContainer}>
          <P style={styles.paragraph}>
            If you think we could create something together, send me a message, or just give me a call. I’m open to discussing any and all ideas for new projects
          </P>
        </Div>
        <EmailForm />

      </Container>
    );
  }
}

export default ContactPage;

const styles = {
  main: {
    margin: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
  },
  textContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 30
  },
  paragraph: {
    fontSize: 18,
    // width: '60%,'
  },

}