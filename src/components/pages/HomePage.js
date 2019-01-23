import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { faDna } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

import posed, { PoseGroup } from 'react-pose';

// this will apply a stagger to whatever animation is specified for the child
// components
const Container = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render() {
    return (

      <Container className="Center container" style={styles.container}>

        <P className="" style={styles.name}>
          Hi, I'm Harry
        </P>

        <div className="row" style={styles.contentholder}>

          <div className="col">
            <P style={styles.icontext}>biologist</P>
            <i className="fa fa-dna fa-gradient-left" style={styles.image}></i>
          </div>

          <div className="col" >
            <i class="fas fa-random" style={styles.icon}></i>
          </div>

          <div className="col" >
            <P style={styles.icontext}>developer</P>
            <i className="fa fa-laptop fa-gradient-right" style={styles.image}></i>
          </div>

        </div>

        <div className="row" style={styles.description}>
          <P>I love creating and developing full stack web & mobile apps.</P>
        </div>

      </Container>
    );
  }
}

export default HomePage;

const styles = {
  container: {
    minWidth: 400,
  },
  name: {
    fontSize: 28,
    margin: 40,
  },
  contentholder: {
    marginBottom: 20,
  },
  image: {
    fontSize: 60,
  },
  icon: {
    fontWeight: 'bolder',
    color: '#1E88E5',
    marginTop: 20,
    width: 20,
    height: 20
  },
  icontext: {
    fontSize: 22
  },
  description: {
 
    fontSize: 20,
    margin: 10,
  },
}