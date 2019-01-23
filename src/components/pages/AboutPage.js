import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

import posed, { PoseGroup } from 'react-pose';

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
    this.hover = this.hover.bind(this);
  }

  hover () {
    //
  }

  render() {
    return (
      <Container className="Center container">

        <P className="" style={styles.name}>
          About Page
        </P>

        <P className="" style={styles.paragraph}>
          Here is some text that tells an interesting story ...
        </P>

      </Container>
    );
  }
}

export default HomePage;

const styles = {
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 28,
    margin: 40,
  },
  paragraph: {
    fontSize: 18,
    width: '60%,'
  },
  icon: {
    width: 100,
    height: 100
  },

  circleArrow: {
    color: '#48C9B0',
    width: 68,
    height: 68,
  },
  middleDisplayCol: {
    fontSize: 22,
    margin: 10,
  },
}