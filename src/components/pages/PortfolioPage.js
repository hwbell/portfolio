import React, { Component } from 'react';

//styling
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// elements
import { FaRandom } from 'react-icons/fa';
import CodePenCard from '../elements/CodePenCard';

import posed from 'react-pose';

const Container = posed.div({
  enter: {staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 10, opacity: 0 }
});

class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
    this.hover = this.hover.bind(this);
  }

  hover () {
    //
  }

  render() {
    return (
      <Container className="Center container">

        <P className="" style={styles.name}>
          Portfolio
        </P>

        <P className="" style={styles.paragraph}>
          Take a look at some projects I have created
        </P>
        
        <div className="row" style={styles.cardscontainer}>

          <div style={styles.cardholder} className="col-12 col-lg-6 project-preview"><CodePenCard /></div>
          <div style={styles.cardholder} className="col-12 col-lg-6 project-preview"><CodePenCard /></div>
          <div style={styles.cardholder} className="col-12 col-lg-6 project-preview"><CodePenCard /></div>
          <div style={styles.cardholder} className="col-12 col-lg-6 project-preview"><CodePenCard /></div>
        </div>
        
      </Container>
    );
  }
}

export default PortfolioPage;

const styles = {
  name: {
    fontSize: 28,
    margin: 40,
  },
  paragraph: {
    fontSize: 18,
    width: '60%,'
  },
  cardscontainer: {
    width: '80%',
    marginBottom: 80,
  },
  cardholder: {
    maxWidth: 400,
  }
}